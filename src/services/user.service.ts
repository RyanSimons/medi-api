import User, { IUser } from "../models/user";

export const createUser = async (userData: IUser) => {
    const user = new User(userData);
    return await user.save();
};

export const updateUser = async (id: string, userData: Partial<IUser>) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id: string) => {
    return await User.findByIdAndDelete(id);
};

export const getUser = async (id: string) => {
    return await User.findById(id);
};