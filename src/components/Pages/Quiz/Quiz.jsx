import React, {useEffect, useState} from "react";
import s from './Quiz.module.css'
import loading from '../../../assets/loading.svg'
import Question from "../../Question/Question.jsx";

const Quiz = ({score,setScore,questions,setQuestions,name}) => {

    const [options, setOptions] = useState()
    const [currQuestion, setCurrQuestion] = useState(0)

    useEffect(()=>{
        setOptions(
            questions && handleShuffle([
                questions[currQuestion]?.correct_answer,
                ...questions[currQuestion]?.incorrect_answers
            ])
        )

    },[questions])

    const handleShuffle = (options) =>{
        return options.sort(() => Math.random - 0.5)
    }


    return <div className={s.container}>
        <span className={s.title}> Welcome,<i>{name}</i></span>
        {questions ? <div>
            <div className={s.quizInfo}>
                <span> {questions[currQuestion].category}</span>
                <span>Score: {score} </span>
            </div>
            <Question/>
        </div> : <img style={{marginTop:100}} src={loading}/> }

    </div>;
}


export default Quiz;
