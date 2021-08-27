const googleSheet = require("../utils/spreadsheet");
const timestamp = require("../utils/time");

module.exports = {
  async awake(req, res) {
    try {
      return res
        .status(200)
        .json({ success: true, message: "Servidor acordado" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Erro no servidor" });
    }
  },
  async addSub(req, res) {
    try {
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
        success: true,
        message: "Inscrição realizada com sucesso!",
        data: row,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Erro no servidor" });
    }
  },
};
