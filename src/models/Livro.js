import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"]
    },
    numeroPaginas: {
      type: Number,
      min: [10, "O número de páginas deve estar entre 10 e 10000."],
      max: [10000, "O número de páginas deve estar entre 10 e 10000."]
    }
  },
  {
    versionKey: false
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;