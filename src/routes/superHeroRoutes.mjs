import express from "express";

import {
  obtenerSuperheroePorIdController,
  buscarSuperheroePorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  obtenerTodosLosSuperheroeController,
  crearSuperheroeController,
  actualizarSuperheroeController,
  eliminarSuperheroeController,
} from "../controllers/superheroesController.mjs";

const router = express.Router();

router.get("/heroes", obtenerTodosLosSuperheroeController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.get("/heroes/buscar/:atributo/:valor", buscarSuperheroePorAtributoController);
router.get("/heroes/mayores/30", obtenerSuperheroesMayoresDe30Controller);
router.post("/heroes", crearSuperheroeController);
router.put("/heroes/:id", actualizarSuperheroeController);
router.delete("/heroes/:id", eliminarSuperheroeController);

export default router;
