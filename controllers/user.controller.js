import UserModel from "../models/users.model.js";

export const getAllRecords = async (req, res) => {
    try {
        const records = await UserModel.find();
        res.json({
            success: true,
            data: records
        });

    } catch (err) {
        res.json({
            success: false,
            error: err.message
        });
    };  
};

export const createRecord = async (req, res) => {
    try {
        const newData = req.body;
    const record = new UserModel(newData);

    await record.save();

    res.status(201).json(record);

    } catch (err) {
    res.json({
            success: false,
            error: err.message
        });
    };
};

export const updateRecord = async (req, res) => {
    try{
        const id = req.params.id;

        const newData = req.body;

        const record = await UserModel.findOneAndReplace({_id: id}, newData, {new: true});

        res.status(200).json({
            success: true,
            data: record,
            message: "User updated Successfully!"
        })

    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    };
};

export const patchRecord = async (req, res) => {
    try{
        const id = req.params.id;
        const newData = req.body;

        const record = await UserModel.findByIdAndUpdate(id, newData, { new: true });

        res.status(200).json({
            success: true,
            data: record,
            message: "User updated Successfully!"
        })
        
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    };
};

export const deleteRecord = async (req, res) => {
    try {
        const id = req.params.id;

        await UserModel.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "User deleted Successfully!"
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    };
};