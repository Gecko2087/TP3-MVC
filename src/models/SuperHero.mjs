import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true, trim: true },
  nombreReal: { type: String, required: true, trim: true },
  edad: { type: Number, min: 0, required: true },
  planetaOrigen: { type: String, default: "Desconocido", trim: true },
  debilidad: { type: String, trim: true },
  poderes: [{ type: String, trim: true }],
  aliados: [{ type: String, trim: true }],
  enemigos: [{ type: String, trim: true }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("SuperHero", superheroSchema, "Grupo-14");
