import dados from "../models/floresModel.js";
const { flores } = dados;

const getAllFlores = (req, res) => {
        res.status(200).json({
            status: 200,
            success: true,
            total: flores.length,
            message: "Lista de flores disponível",
            flores: flores
        });
    };

export { getAllFlores };