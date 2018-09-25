"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express_1 = __importDefault(require("Express"));
const app = Express_1.default();
const LISTEN_PORT = 4999;
app.listen(LISTEN_PORT, () => {
    console.log(`Start ${LISTEN_PORT}`);
});
console.log("OK");
app.get("/", (req, res) => {
    res.json([
        1, 2, 3, 4, 5
    ]);
});
