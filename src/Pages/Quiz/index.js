import { useState, useEffect} from 'react';
import Questoes from './Questoes.js';
function PageQuiz({ setStateQuiz }) {
  const MaxQ = Questoes.length;
  const [questaoAtual, setQuestaoAtual] = useState(Number(localStorage.getItem("qAtual")) || 0);
  const [pergunta, setPergunta] = useState([]);
  const [alternativas, setAlternativas]= useState([]);
  const [respostaCorreta, setRespostaCorreta] = useState("");
  const [end, setEnd] = useState(false);
  const [clicado, setClicado] = useState(false);
  const [pontos, setPontos] = useState(Number(localStorage.getItem("pontuacao")));
function getQuestoes () {
   setPergunta(Questoes[questaoAtual].pergunta);
   setAlternativas(Questoes[questaoAtual].alternativas);
   setRespostaCorreta(Questoes[questaoAtual].correta);
   if(end === true ) {
     sessionStorage.setItem("stateQuiz", "score");
     setStateQuiz("score");
   }
}
function Desistir () {
  sessionStorage.setItem("stateQuiz", "score");
  setStateQuiz("score");
}
function ProximaQuestao (alt) {
  setClicado(true);
  setTimeout(() => {
  if(questaoAtual + 1 < MaxQ ) {
  setQuestaoAtual(questaoAtual + 1);
  } else {
    setEnd(true)
  }
  if (alt === respostaCorreta && pontos < MaxQ){
     setPontos(pontos + 1);
   }
  }, 600);
}
useEffect(() => {
   setClicado(false);
   setRespostaCorreta("");
   getQuestoes();
  localStorage.setItem("qAtual", questaoAtual);
  localStorage.setItem("pontuacao", pontos);
}, [questaoAtual, pontos, end]);
  return (
      <div className="Quiz">
      <h1 className="Desistir" onClick={Desistir}>Desistir</h1>
      <div className="CardQuiz">
      <div className="Pergunta">
      <span>{questaoAtual + 1} de {MaxQ}</span>
      <h1 className={pergunta.length > 42 ? "small" : ""}>{pergunta}?</h1>
      </div>
      <ul className="Alternativas">
      {alternativas.map((alt) => (
      <li
       className={alt === respostaCorreta && clicado === true ? "altcorreta" : ""}
      onClick={() => ProximaQuestao(alt)}
      key={alt}
      id="Alts">
      <p className={alt.length > 42 ? "small" : ""}>{alt}</p>
      </li>
        ))}
      </ul>
      </div>
      </div>
);
}

export default PageQuiz;