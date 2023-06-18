"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.User = (0, mongoose_1.model)("User", userSchema);
