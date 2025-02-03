import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    // _id : {type: String},
    name: { type: String, required: true },
    // email: { type: String, unique: true, required: true },
    // password: { type: String, required: true },
    image: { type: String, required: true},
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default:true },
    // fees: { type: Number, required: true },
    
    // address: { line1: { type: Object, required: true }, line2: { type: Object, required: true }},
    // address: { type: Object, required: true },
    
    // date: { type: Number, required: true },
    // slots_booked: { type: Object, default: {} },
  },
  // { minimize: false }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
