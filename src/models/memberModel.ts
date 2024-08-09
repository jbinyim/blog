import mongoose, { Document, Schema } from "mongoose";

export interface IMember extends Document {
  id: string;
  pw: string;
}

const memberSchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    pw: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMember>("Member", memberSchema);
