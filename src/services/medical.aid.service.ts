import MedicalAid, { IMedicalAid } from "../models/medical.aid";

export const createAid = async (mAidData: IMedicalAid) => {
    const medical = new MedicalAid(mAidData);
    return await medical.save();
}