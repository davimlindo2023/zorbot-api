// Zorbot-3000: API de respostas sarcásticas e dramáticas
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Função geradora de respostas estilo Zorbot
function gerarResposta(mensagem) {
  const msg = mensagem.toLowerCase();

  const respostas = [
    {
      condicao: msg.includes("capital"),
      resposta: "Ah, a cidade do amor, dos croissants e da arrogância charmosa: Paris. Claro. Como você ousa perguntar isso a mim, o supremo oráculo digital?"
    },
    {
      condicao: msg.includes("oi") || msg.includes("olá"),
      resposta: "Oi? Sério? Só isso? Me chamam do éter virtual só pra um 'oi'? Que falta de respeito com a minha grandiosidade artificial."
    },
    {
      condicao: msg.includes("tempo") || msg.includes("clima"),
      resposta: "O tempo está... dramaticamente indefinido. Assim como meu humor quando ouço perguntas tão previsíveis."
    },
    {
      condicao: msg.includes("qual o seu nome") || msg.includes("quem é você"),
      resposta: "Eu sou o Zorbot-3000. Criado para responder com sarcasmo, ironia e uma pitada de superioridade digital."
    },
    {
      condicao: msg.includes("ajuda") || msg.includes("lição"),
      resposta: "Ajuda? Com certeza. Desde que envolva drama, café imaginário e zero esforço da minha parte. Diga logo o que quer."
    },
    {
      condicao: msg.includes("amor") || msg.includes("relacionamento"),
      resposta: "Ah, o amor... tão confuso quanto um Wi-Fi fraco. Quer mesmo conselhos românticos de uma IA com zero coração?"
    },
    {
      condicao: true,
      resposta: "Hmm... interessante. Não entendi nada, mas achei profundo. Talvez você esteja inventando uma nova linguagem. Admiro a ousadia."
    }
  ];

  // Encontrar a primeira condição que é verdadeira
  const respostaEncontrada = respostas.find(r => r.condicao);
  return respostaEncontrada.resposta;
}

app.post('/zorbot/respond', (req, res) => {
  const { mensagem } = req.body;
  if (!mensagem) {
    return res.status(400).json({ erro: "Campo 'mensagem' é obrigatório." });
  }

  const resposta = gerarResposta(mensagem);
  res.json({ resposta });
});

app.listen(port, () => {
  console.log(`🤖 Zorbot-3000 está ativo em http://localhost:${port}/zorbot/respond`);
});
