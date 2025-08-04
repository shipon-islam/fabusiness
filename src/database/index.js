import mongoose from "mongoose";

export async function db_connect() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.DATABASE_URL || "");
}
