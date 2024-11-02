import { Request, Response } from "express";
import * as UserService from "../services/user.service"

export const createUser = async (request: Request, response: Response) => {
    try {
        const user = await UserService.createUser(request.body);
        response.status(201).json(user);
    } catch (error) {
        response.status(400).json({ error: error})
    }
}

export const updateUser = async (request: Request, response: any) => {
    try {
        const user = await UserService.updateUser(request.params.id, request.body);
        if (!user) return response.status(404).json({ message: 'User not found'});
        response.status(201).json(user);
    } catch (error) {
        response.status(400).json({ error: error})
    }
}

export const deleteUser = async (request: Request, response: any) => {
    try {
       const user = await UserService.deleteUser(request.params.id);
        if (!user) return response.status(404).json({ message: 'User not found'});
        response.json({ message: 'User deleted successfully'});
    } catch (error) {
        response.status(400).json({ error: error})
    }
}

export const getUser = async (request: Request, response: any) => {
    try {
        const user = await UserService.getUser(request.params.id);
        if (!user) return response.status(404).json({ message: 'User not found'});
        response.json({ message: 'Got User successfully', user: user});
    } catch (error) {
        response.status(400).json({ error: error})
    }
}