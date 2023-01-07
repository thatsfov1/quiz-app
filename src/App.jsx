import './App.css'
import Header from "./components/Header/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home/Home.jsx";
import Quiz from "./components/Pages/Quiz/Quiz.jsx";
import Results from "./components/Pages/Results/Results.jsx";
import {useState} from "react";
import axios from "axios";

function App() {


    const [name,setName] = useState('')
    const [questions,setQuestions] = useState('')
    const [score,setScore] = useState(0)

    const fetchQuestions = async(category = '',difficulty = '') =>{
        const {data} = await axios.get(`https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`)
        setQuestions(data.results)
    }

  return (
          <BrowserRouter>
              <Header/>
              <div className="app">
                  <Routes>
                      <Route path={'/'} exact element={<Home fetchQuestions={fetchQuestions} name={name} setName={setName}/>}/>
                      <Route path={'/quiz'} element={<Quiz score={score} setScore={setScore}
                                                           name={name} questions={questions} setQuestions={setQuestions}/>}/>
                      <Route path={'/result'} element={<Results name={name} score={score}/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
  )
}

export default App
