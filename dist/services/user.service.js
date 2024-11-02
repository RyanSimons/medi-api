"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.deleteUser = exports.updateUser = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default(userData);
    return yield user.save();
});
exports.createUser = createUser;
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findByIdAndUpdate(id, userData, { new: true });
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findByIdAndDelete(id);
});
exports.deleteUser = deleteUser;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findById(id);
});
exports.getUser = getUser;
