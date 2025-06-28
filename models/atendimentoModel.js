const mongoose = require('mongoose');

const atendimentoSchema = new mongoose.Schema({

  id: {
    type: String,
    required: [true, 'O ID é obrigatório']
  },

  cliente: {
    type: String,
    required: [true, 'O nome do cliente é obrigatório']
  },

  assunto: {
    type: String,
    required: [true, 'O assunto é obrigatório']
  },

  status: {
    type: String,
    required: [true, 'O status é obrigatório']
  },

  atendente: {
    type: String,
    required: [true, 'O nome do atendente é obrigatório']
  },

  data: {
    type: Date,
    required: [true, 'A data é obrigatória']
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Atendimento', atendimentoSchema, 'atendimentos');