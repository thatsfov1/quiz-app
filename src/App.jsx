import './App.css'
import Header from "./components/Header/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home/Home.jsx";
import Quiz from "./components/Pages/Quiz/Quiz.jsx";
import Results from "./components/Pages/Results/Results.jsx";
import {useState} from "react";
import axios from "axios";
import {Container} from "@mui/material";

function App() {


    const [name, setName] = useState('')
    const [questions, setQuestions] = useState('')
    const [score, setScore] = useState(0)

    const fetchQuestions = async (category = '', difficulty = '') => {
        const {data} = await axios.get(`https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`)
        setQuestions(data.results)
    }

    return (
        <BrowserRouter>
            <Header/>
            <div className="app">

                <Container>
                    <Routes>
                        <Route path={'/quiz-app/'} exact
                               element={<Home fetchQuestions={fetchQuestions} name={name} setName={setName}/>}/>
                        <Route path={'/quiz-app/quiz'} element={<Quiz score={score} setScore={setScore}
                                                             name={name} questions={questions}
                                                             setQuestions={setQuestions}/>}/>
                        <Route path={'/quiz-app/result'} element={<Results name={name} score={score}/>}/>
                    </Routes>
                </Container>
            </div>
        </BrowserRouter>
    )
}

export default App
