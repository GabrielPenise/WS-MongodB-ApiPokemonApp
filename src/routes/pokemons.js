const express = require("express");
const router = express.Router();
const PokemonController = require("../controllers/pokemon");

router.get("/", PokemonController.findAll);
router.get("/:id", PokemonController.findById);
router.post("/", PokemonController.createPokemon);
router.put("/:id", PokemonController.updateById);
router.delete("/:id", PokemonController.deleteById);

module.exports = router;
