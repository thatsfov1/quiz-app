import React, {useState} from "react";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import s from './Home.module.css'
import Categories from "../../../Data/Categories.js";
import {useNavigate} from "react-router-dom";

const Home = ({name, setName, fetchQuestions}) => {

    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const validationFunc = () => {
        if (!name || !category || !difficulty) {
            setError(true)
            return
        } else {
            setError(false)
            fetchQuestions(category,difficulty)
            navigate('/quiz')
        }
    }


    return <div className={s.container}>

        <Form className={s.forms}>
            {error && <ErrorContent>Please, fill all of blanks</ErrorContent>}
            <Form.Group>
                <Form.Control onChange={(e) => setName(e.target.value)} value={name}
                              style={{marginTop: 10, marginBottom: 20}} placeholder="Enter Your Name" type='text'
                              size='lg'/>
            </Form.Group>

            <FloatingLabel label='Select the Category'>
                <Form.Select onChange={(e) => setCategory(e.target.value)}
                             value={category} style={{marginBottom: 20, paddingBottom: 5}}
                             size='lg' aria-label="Default select example">
                    <option key='chooseCat' value='chooseCat'>Choose the Category</option>
                    {Categories.map(item => <option value={item.value} key={item.category}>{item.category}</option>)}
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel label='Select the Difficulty'>
                <Form.Select onChange={(e) => setDifficulty(e.target.value)} value={difficulty}
                             style={{paddingBottom: 5}} size='lg' aria-label="Default select example">
                    <option key='choose' value='choose'>Choose the Difficulty</option>
                    <option key='Easy' value='easy'>Easy</option>
                    <option key='Medium' value='medium'>Medium</option>
                    <option key='Hard' value='hard'>Hard</option>
                </Form.Select>
            </FloatingLabel>
            <Button onClick={() => validationFunc()} size='lg' style={{width: "100%", marginTop: 20}}
                    variant="light">Start Quiz</Button>
        </Form>
        <div className={s.title}>
            Test your knowledge in any topic
        </div>
    </div>;
}

export const ErrorContent = ({children}) => {
    return <div style={{
        width: "100%", color: "white",
        height: "50px", borderRadius: 10, backgroundColor: "#fd5c63", display: "flex",
        alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
    }}>
        {children}
    </div>
}

export default Home;
