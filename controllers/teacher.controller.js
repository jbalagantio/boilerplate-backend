import TeacherModel from "../models/teachers.model.js";

export const getAllRecords = async (req, res) => {
    try {
        const records = await TeacherModel.find();
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
    const record = new TeacherModel(newData);

    await record.save();

    res.json(record);

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

        const record = await TeacherModel.findOneAndReplace({_id: id}, newData, {new: true});

        res.status(200).json({
            success: true,
            data: record,
            message: "Teacher updated Successfully!"
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

        const record = await TeacherModel.findByIdAndUpdate(id, newData, { new: true });

        res.status(200).json({
            success: true,
            data: record,
            message: "Teacher updated Successfully!"
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

        await TeacherModel.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Teacher deleted Successfully!"
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    };
};