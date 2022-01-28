const { response } = require("express");
const DataRepository = require("../repositories/DataRepository");

class DataUserController {
  async index(request, response) {
    // Lista todos os registros
    const data = await DataRepository.findAll();

    response.json(data);
  }

  async show(request, response) {
    // Lista todos os registros pelo mes da compra
    const { type } = request.params;

    if (type === "contribuitions" || type === "volume") {
      if (type === "contribuitions") {
        const data = await DataRepository.findAllContribuitions();

        response.json(data);
      } else {
        const data = await DataRepository.findTotalVolumeStocks();

        response.json(data);
      }
    } else {
      return response.status(404).json({ error: "This parameter is invalid" });
    }
  }

  async store() {
    // Cria um novo registro
  }

  async update() {
    // Edita um registro
  }

  async delete() {
    // Deleta um registro
  }
}

module.exports = new DataUserController();
