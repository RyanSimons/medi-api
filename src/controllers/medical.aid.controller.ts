import { Request, Response } from "express";
import * as MedicalService from "../services/medical.aid.service";

export const createMedicalAid = async (request: Request, response: Response) => {
    try {
        const medicalAid = await MedicalService.createAid(request.body);
        response.status(201).json(medicalAid);
    } catch (error) {
        response.status(400).json({ error: error})
    }
}