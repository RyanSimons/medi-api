"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.deleteUser = exports.updateUser = exports.createUser = void 0;
const UserService = __importStar(require("../services/user.service"));
const createUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserService.createUser(request.body);
        response.status(201).json(user);
    }
    catch (error) {
        response.status(400).json({ error: error });
    }
});
exports.createUser = createUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserService.updateUser(request.params.id, request.body);
        if (!user)
            return response.status(404).json({ message: 'User not found' });
        response.status(201).json(user);
    }
    catch (error) {
        response.status(400).json({ error: error });
    }
});
exports.updateUser = updateUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserService.deleteUser(request.params.id);
        if (!user)
            return response.status(404).json({ message: 'User not found' });
        response.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        response.status(400).json({ error: error });
    }
});
exports.deleteUser = deleteUser;
const getUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserService.getUser(request.params.id);
        if (!user)
            return response.status(404).json({ message: 'User not found' });
        response.json({ message: 'Got User successfully', user: user });
    }
    catch (error) {
        response.status(400).json({ error: error });
    }
});
exports.getUser = getUser;
