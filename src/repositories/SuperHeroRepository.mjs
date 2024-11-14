import SuperHero from "../models/SuperHero.mjs";
import IRepository from "../repositories/IRepository.mjs";
import mongoose from "mongoose";

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    if (mongoose.isValidObjectId(id)) {
      return await SuperHero.findById(id);
    }
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    const query = { [atributo]: new RegExp(valor, "i") };
    return await SuperHero.find(query);
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({ edad: { $gt: 30 } });
  }

  async crear(superheroe) {
    const nuevoSuperHeroe = new SuperHero(superheroe);
    return await nuevoSuperHeroe.save();
  }

  async actualizar(id, datos) {
    return await SuperHero.findByIdAndUpdate(id, datos, { new: true }).exec();
  }

  async eliminar(id) {
    return await SuperHero.findByIdAndDelete(id).exec();
  }
}

export default new SuperHeroRepository();
