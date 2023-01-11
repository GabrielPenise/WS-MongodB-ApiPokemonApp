const PokemonModel = require("../dbmodels/pokemon");
const PokemonService = require("../service/PokemonService");

const pokemonController = {
  async findAll(req, res) {
    const { error, data } = await PokemonService.findAll();
    if (error) {
      res.status(data.status || 500).send({ message: data.response || data });
    }
    res.send(data.response);
  },
  async findById(req, res) {
    const { error, data } = await PokemonService.findById(req.params.id);
    if (error) {
      res.status(data.status || 500).send({ message: data.response || data });
    }
    res.send(data.response);
  },

  async createPokemon(req, res) {
    const { error, data } = await PokemonService.createPokemon(req.body);

    if (error) {
      console.error(error);
      res.status(data.status || 500).send({ message: data.response || data });
    }
    res.send(data.response);
  },
  async updateById(req, res) {
    const { error, data } = await PokemonService.updateById(
      req.params.id,
      req.body
    );
    if (error) {
      console.error(error);
      res.status(data.status || 500).send({ message: data.response || data });
    }
    res.send(data.response);
  },

  async deleteById(req, res) {
    try {
      const { error, data } = await PokemonService.deleteById(req.params.id);
      if (error) {
        res.status(data.status || 500).send({ message: data.response || data });
      }
    } catch (error) {
      console.error(error);
      res.status(data.status || 500).send({ message: data.response || data });
    }
  },
};

module.exports = pokemonController;
