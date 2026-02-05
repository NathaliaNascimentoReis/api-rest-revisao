import dados from "../models/floresModel.js";
const { flores } = dados;

const getAllFlores = (req, res) => {
  const { nome, preco, categoria } = req.query;

  let resultado = flores;

  if (nome) {
    resultado = resultado.filter((f) =>
      f.nome.toLowerCase().includes(nome.toLowerCase()),
    );
  }

  if (preco) {
    resultado = resultado.filter((f) => f.preco <= Number(preco));
  }

  if (categoria) {
    resultado = resultado.filter((c) =>
      c.categoria.toLowerCase().includes(categoria.toLowerCase()),
    );
  }

  if (resultado.length === 0) {
    if (preco) {
      return res.status(404).json({
        status: 404,
        sucess: false,
        total: resultado.length,
        message: "Nenhuma flor encontrada com preço abaixo de R$" + preco,
      });
    }

    if (nome) {
      return res.status(404).json({
        status: 404,
        sucess: false,
        total: resultado.length,
        message: "Nenhuma flor com o nome " + nome + " foi encontrada",
      });
    }

    if (categoria) {
      return res.status(404).json({
        status: 404,
        sucess: false,
        total: resultado.length,
        message: "Nenhuma flor da categoria " + categoria + " foi encontrada",
      });
    }
  }

  return res.status(200).json({
    status: 200,
    success: true,
    total: resultado.length,
    message: "Lista de flores disponível",
    flores: resultado,
  });
};

export { getAllFlores };
