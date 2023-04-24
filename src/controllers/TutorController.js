const Services = require("../services/Services");
const tutorServices = new Services("Tutor");
const autenticarUsuario = require('../utils/autenticarUsuario');

class TutorController {

  static async autenticar(req, res) {
    const { email, senha } = req.body;

    const tutor = await tutorServices.pegaUmRegistro({ email: email });
      if (!tutor) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
     }
     const autenticado = autenticarUsuario(senha, tutor);
      if (autenticado) {
        return res.status(200).json({ message: 'Usuário autenticado com sucesso' });
      } else {
        return res.status(401).json({ message: 'Senha incorreta' });
     }
  }

  static async getAllTutors(req, res) {
    try {
      const allTutors = await tutorServices.pegaTodosOsRegistros();
      return res.status(200).json(allTutors);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getTutorById(req, res) {
    const { id } = req.params;
    try {
      const tutor = await tutorServices.pegaUmRegistro({ id: Number(id) });
      return res.status(200).json(tutor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async createTutor(req, res) {
    const tutor = req.body;
    try {
      const tutorCreated = await tutorServices.criaRegistro(tutor);
      return res.status(200).json(tutorCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async updateTutor(req, res) {
    const { id } = req.params;
    const tutor = req.body;
    try {
      await tutorServices.atualizaRegistro(tutor, id);
      const tutorUpdated = await tutorServices.pegaUmRegistro({ id: Number(id) });
      return res.status(200).json(tutorUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deleteTutor(req, res) {
    const { id } = req.params;
    try {
      await tutorServices.apagaRegistro(id);
      return res.status(200).json({ message: `id ${id} deleted` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TutorController;