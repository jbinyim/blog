import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  text: string;
  img: string;
  youtube: string;
}

const blogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    img: {
      type: String,
    },
    youtube: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBlog>("Blog", blogSchema);
