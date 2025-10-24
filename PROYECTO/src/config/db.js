import mongoose from "mongoose";

const MAX_RETRIES = 10;
const RETRY_DELAY_MS = 2000; // 2s

export const connectDB = async (uri = process.env.MONGODB_URI) => {
  let attempt = 0;

  const connectOnce = async () => {
    attempt++;
    try {
      await mongoose.connect(uri, {
        // opciones recomendadas
        // useNewUrlParser/useUnifiedTopology ya no son necesarios en Mongoose 6+
      });
      console.log("✅ Conectado a MongoDB");
    } catch (err) {
      console.error(`❌ Error conectando a MongoDB (intento ${attempt}):`, err.message);
      if (attempt < MAX_RETRIES) {
        console.log(`Reintentando en ${RETRY_DELAY_MS / 1000}s...`);
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
        return connectOnce();
      } else {
        console.error("⛔ No fue posible conectar a MongoDB tras varios intentos");
        throw err;
      }
    }
  };

  // Manejo elegante del cierre
  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ Conexión a MongoDB perdida");
  });

  mongoose.connection.on("error", (e) => {
    console.error("⚠️ Error de conexión MongoDB:", e.message);
  });

  await connectOnce();
};