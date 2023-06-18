"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const http_status_1 = __importDefault(require("http-status"));
const routres_1 = __importDefault(require("./app/routres"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parse
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1", routres_1.default);
// app.get("/", async (req: Request, res: Response) => {
//   await userServices.createUser({
//     id: "555",
//     role: "seller",
//     password: "seller",
//   });
//   res.send("Hello, TypeScript and Express!");
// });
// Global Error Handler
app.use(globalErrorHandler_1.default);
// if API not found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Not Found !",
        errorMessage: [
            {
                path: req.originalUrl,
                message: "API not found !",
            },
        ],
    });
    next();
});
exports.default = app;
