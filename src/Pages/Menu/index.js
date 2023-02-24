import { useState, useEffect} from 'react';
function PageMenu({ setStateQuiz }) {
  const [userName, setUserName] = useState("");
  function IniciarQuiz (event) {
    event.preventDefault();
    localStorage.setItem("pontuacao", 0);
    if(userName !== "") {
    localStorage.setItem("nomedousuario", userName);
    sessionStorage.setItem("stateQuiz", "quiz");
    setStateQuiz("quiz");
    localStorage.setItem("qAtual", 0);
    } else {
      alert("Input Vazio")
    }
  }
  return (
      <div className="Menu"
   /*   initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ ease: "easeOut", duration: 0.5 }}*/>
      <div className="CardMenu">
      <div className="Apresentacao">
      <h1>Quiz sobre Animes</h1>
      <h2>Teste os seus conhecimentos sobre animes (Dragon Ball Z/Super e Naruto.</h2>
      </div>
      <form>
      <label>Digite seu nome:<br/>
      <input className="InputMenu" type="name"
      onChange={(event) => setUserName (event.target.value)}
      placeholder="Digite seu nome" />
      </label>
      <button className="IniciarQuiz" onClick={IniciarQuiz}>
      <p>Começar Quiz</p>
      </button>
      </form>
      </div>
      </div>
      );
}

export default PageMenu;