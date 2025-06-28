const Atendimento = require('../models/atendimentoModel');


exports.getAllAtendimento = async (req, res) => {

try {

const atendimentos = await Atendimento.find();

res.json(atendimentos);

} catch (err) {

res.status(500).json({ mensagem: 'Erro ao buscar atendimentos', erro: err.message });

}

};


exports.getAtendimentoById = async (req, res) => {

try {

const atendimento = await atendimento.findById(req.params.id);

if (!atendimento) return res.status(404).json({ mensagem: 'Atendimento não encontrado' });

res.json(atendimento);

} catch (err) {

res.status(500).json({ mensagem: 'Erro ao buscar atendimento', erro: err.message });

}

};


exports.createAtendimento = async (req, res) => {

try {

const novoAtendimento = new Atendimento(req.body);

await novoAtendimento.save();

res.status(201).json(novoAtendimento);

} catch (err) {

res.status(400).json({ mensagem: 'Erro ao criar atendimento', erro: err.message });

}

};


exports.updateAtendimento = async (req, res) => {

try {

const atendimentoAtualizado = await Atendimento.findByIdAndUpdate(req.params.id, req.body, { new: true });

if (!atendimentoAtualizado) return res.status(404).json({ mensagem: 'Contato não encontrado' });

res.json(atendimentoAtualizado);

} catch (err) {

res.status(400).json({ mensagem: 'Erro ao atualizar atendimento', erro: err.message });

}

};


exports.deleteAtendimento = async (req, res) => {

try {

const atendimentoRemovido = await Atendimento.findByIdAndDelete(req.params.id);

if (!atendimentoRemovido) return res.status(404).json({ mensagem: 'Atendimento não encontrado' });

res.status(204).end();

} catch (err) {

res.status(500).json({ mensagem: 'Erro ao excluir atendimento', erro: err.message });

}

};