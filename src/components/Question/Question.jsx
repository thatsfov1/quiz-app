import React, {useState} from "react";
import './Question.css'
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const Question = ({
                      setQuestions, currQuestion, questions,
                      setCurrQuestion, score, setScore, correct, options
                  }) => {

    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return 'select'
        } else if (selected === i && selected !== correct) {
            return 'wrong'
        } else if (i === correct) {
            return 'select'
        }
    }

    const handleClick = (i) => {
        setSelected(i)
        if(i === correct){
            setScore(score +1)
        }
        setError(false)
    }

    const handleNext = () => {
        if(currQuestion > 8){
            navigate('/result')
        }else if(selected){
            setCurrQuestion(currQuestion +1)
            setSelected()
        } else{
            setError("Please select an option first")
        }
    }

    return <div className='container'>
        <h1>Question {currQuestion + 1}:</h1>
        <div className='singleQuestion'>
            <div className='question'>{questions[currQuestion].question}</div>
            {error && <ErrorContent>{error}</ErrorContent>}
            <div className='options'>{options && options.map(item => <button
                key={item}
                className={`button ${selected && handleSelect(item)}`}
                onClick={() => handleClick(item)}
                disabled={selected}
            >

                {item}</button>)}</div>
            <div className='controls'>
                <Button className='quit' type='button' size='lg' href='/'
                        variant='secondary' style={{width:185 }}>
                    Quit
                </Button>
                <Button size='lg' onClick={()=> handleNext()} style={{width:185}}>
                    Next
                </Button>
            </div>
        </div>
    </div>;
}

const ErrorContent = ({children}) => {
    return <div style={{
        width: "100%", color: "white",
        height: "50px", borderRadius: 10, backgroundColor: "#fd5c63", display: "flex",
        alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
    }}>
        {children}
    </div>
}

export default Question;
