const PokemonModel = require("../dbmodels/pokemon");

class PokemonService {
  static async findAll() {
    try {
      const response = await PokemonModel.find({});
      return {
        error: false,
        data: {
          status: 200,
          response,
        },
      };
    } catch (error) {
      return {
        error: true,
        data: {
          status: 500,
          response: "no se encontraron los pokemons",
        },
      };
    }
  }

  static async findById(id) {
    try {
      const response = await PokemonModel.findById(id);
      return {
        error: false,
        data: {
          status: 200,
          response,
        },
      };
    } catch (error) {
      return {
        error: true,
        data: {
          status: 500,
          response: "no se encontraron el pokemon",
        },
      };
    }
  }

  static async createPokemon(body) {
    try {
      const response = await PokemonModel.create(body);
      return {
        error: false,
        data: {
          status: 201,
          response,
        },
      };
    } catch (error) {
      return {
        error: true,
        data: { statu: 500, response: "problema al crear" },
      };
    }
  }

  static async updateById(id, body) {
    try {
      const response = await PokemonModel.findOneAndUpdate({ _id: id }, body);
      return {
        error: false,
        data: {
          status: 201,
          response,
        },
      };
    } catch (error) {
      return {
        error: true,
        data: { status: 500, response: "problema al actualizar" },
      };
    }
  }

  static async deleteById(id) {
    try {
      const response = await PokemonModel.deleteOne({ _id: id });
      return {
        error: false,
        data: {
          status: 200,
          response,
        },
      };
    } catch (error) {
      return {
        error: true,
        data: {
          status: 500,
          response: "Problema al borrar",
        },
      };
    }
  }
}
module.exports = PokemonService;
