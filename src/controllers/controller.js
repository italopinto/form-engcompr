const googleSheet = require("../utils/spreadsheet");
const timestamp = require("../utils/time");

module.exports = {
  async addSub(req, res) {
    try {
      if (req.body.name === undefined) {
        return res.status(204).json({ message: "Requisição sem dados" });
      } else {
        const {
          name,
          birthdate,
          email,
          phone,
          city,
          degree,
          college,
          knowing,
          paycheck,
        } = req.body;
        const row = {
          DATA: await timestamp(),
          NOME: name,
          "DATA DE NASCIMENTO": birthdate,
          EMAIL: email,
          TELEFONE: phone,
          "ESTADO/CIDADE": city,
          "NÍVEL ESCOLARIDADE": degree,
          "FACULDADE/COLÉGIO": college,
          SABENDO: knowing,
          PAGAMENTO: paycheck,
        };

        await googleSheet.addRow(row);

        return res.status(201).json({
          message: "Inscrição realizada com sucesso!",
          data: row,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error :(", erro: error });
    }
  },
};
