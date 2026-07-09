import mongoose from "mongoose";
import { BLOOD_GROUPS } from "../constants/index.js";

const inventorySchema = new mongoose.Schema(
  {
    bloodGroup: {
      type: String,
      enum: BLOOD_GROUPS,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", inventorySchema);
