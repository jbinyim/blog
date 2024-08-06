import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  text: string;
}

const blogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBlog>("Blog", blogSchema);
