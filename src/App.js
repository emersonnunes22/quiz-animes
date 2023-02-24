import { useState, useEffect} from 'react';
import PageMenu from './Pages/Menu';
import PageQuiz from './Pages/Quiz';
import PageScore from './Pages/Score';
import './Pages/Pages.css';
import React from 'react';

function App() {
  const Qstate = sessionStorage.getItem("stateQuiz");
  const [ stateQuiz, setStateQuiz ] = useState(Qstate? Qstate: "menu");
  if ( stateQuiz === "menu") {
    return (<PageMenu setStateQuiz={setStateQuiz}/>)
  } 
  if ( stateQuiz === "quiz") {
    return (<PageQuiz setStateQuiz={setStateQuiz}/>)
  }
  if ( stateQuiz === "score") {
   return (<PageScore setStateQuiz={setStateQuiz} />)
  }
}
export default App;
