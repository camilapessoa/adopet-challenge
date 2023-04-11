const Services = require("../services/Services.js");
const AbrigoServices = new Services("Abrigo");

class AbrigoController {
    static async getAllAbrigos(req, res) {
        try {
            const allAbrigos = await abrigoServices.pegaTodosOsRegistros();
            return res.status(200).json(allAbrigos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async getAbrigoById(req, res) {
        const { id } = req.params;
        try {
            const abrigo = await abrigoServices.pegaUmRegistro({ id: Number(id) });
            return res.status(200).json(abrigo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async createAbrigo(req, res) {
        const abrigo = req.body;
        try {
            const abrigoCreated = await abrigoServices.criaRegistro(abrigo);
            return res.status(200).json(abrigoCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async updateAbrigo(req, res) {
        const { id } = req.params;
        const abrigo = req.body;
        try {
            await abrigoServices.atualizaRegistro(abrigo, id);
            const abrigoUpdated = await abrigoServices.pegaUmRegistro({ id: Number(id) });
            return res.status(200).json(abrigoUpdated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async deleteAbrigo(req, res) {
        const { id } = req.params;
        try {
            await abrigoServices.apagaRegistro(id);
            return res.status(200).json({ message: `id ${id} deleted` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = AbrigoController
