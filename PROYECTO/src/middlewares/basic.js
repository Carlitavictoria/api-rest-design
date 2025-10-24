export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export const notFound = (req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
};

export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal server error" });
};