import { Model, Schema, model } from "mongoose";
import { IUser, UserModel } from "./userInterface";

const userSchema = new Schema<IUser>(
  {
    phoneNumber: { type: String, unique: true, required: true },
    role: { type: String, enum: ["seller", "buyer"], required: true },
    password: { type: String, required: true },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },

    address: { type: String, required: true },
    budget: { type: Number },
    income: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const User = model<IUser, UserModel>("User", userSchema);
