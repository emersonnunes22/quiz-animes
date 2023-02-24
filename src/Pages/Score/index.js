import { useState, useEffect} from 'react';
function PageScore({ setStateQuiz }) {
  const pts = localStorage.getItem("pontuacao");
  const Name = localStorage.getItem("nomedousuario");
  const [singularPlural, setSingularPlural] = useState("");
  
  useEffect(() => {
    if(pts === 1) {
      setSingularPlural(null);
    }
    if(pts > 1 || pts < 1) {
      setSingularPlural("plural");
    }
  })
  
  function VoltarMenu () {
    localStorage.setItem("qAtual", 0);
    localStorage.setItem("pontuacao", 0);
    sessionStorage.setItem("stateQuiz", "menu");
    setStateQuiz("menu");
  }
   function Plural () {
     return (
        <p>você acertou {pts} perguntas</p>
       )
   }
   function Singular () {
     return (
           <p>você acertou {pts} pergunta</p>
   )
   }
   function ReiniciarQuiz () {
     localStorage.setItem("qAtual", 0);
     localStorage.setItem("pontuacao", 0);
     sessionStorage.setItem("stateQuiz", "quiz");
     setStateQuiz("quiz");
   }
  return (
      <div className="Score">
      <div className="CardResultado">
      <h1>Resultado</h1>
      <div className="Pontuacao">
      <h2>{Name}:</h2>
     { singularPlural && <Plural />}
     { !singularPlural && <Singular />}
      </div>
      <div className="inf-extras">
      <button onClick={VoltarMenu}>Menu</button>
      <button onClick={ReiniciarQuiz}>Reiniciar</button>
      </div>
      </div>
      </div>
);
}

export default PageScore;