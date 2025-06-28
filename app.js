const express = require('express');
const dotenv = require('dotenv');
const conectarBanco = require('./config/db');
const contatoRoutes = require('./routes/atendimentoRoutes');

dotenv.config();
const app = express();
const cors    = require('cors');

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); 
    callback(null, origin); 
  },
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
};

app.use(cors(corsOptions));

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas principais
app.use('/api/atendimento', contatoRoutes);

// Conectar ao banco e iniciar o servidor
conectarBanco();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));