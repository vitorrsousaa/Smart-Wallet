const { response } = require("express");
const DataRepository = require("../repositories/DataRepository");

class DataUserController {
  async index(request, response) {
    // Lista todos os registros
    const data = await DataRepository.findAllOrdened();

    response.json(data);
  }

  async show(request, response) {
    const { type } = request.params;

    if (type === "contribuitions") {
      const dataOrdened = await DataRepository.findAllOrdened();

      const data = await DataRepository.findAllContribuitions(dataOrdened);

      return response.json(data);
    }

    if (type === "volumeTotal") {
      const data = await DataRepository.findTotalVolumeStocks();

      return response.json(data);
    }

    return response.status(404).json({ error: "This parameter is invalid" });
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
