import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },
    status: {
      type: String,
      required: true,
      enum: ["todo", "in_progress", "done"],
      default: "todo",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    description: {
      type: String,
      trim: true,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt automáticos
    versionKey: false,
  }
);

export default mongoose.model("Task", TaskSchema);

