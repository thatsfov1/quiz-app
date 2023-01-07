import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import s from '../Quiz/Quiz.module.css'

const Results = ({name,score}) => {

    const navigate = useNavigate()

    useEffect(()=>{
        if(!name){
            navigate('/')
        }
    },[name,navigate])

    return <div style={{
        fontSize:"4rem",
        color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:100
    }}>
        Your Score: {score}
        <Button size='lg' className={s.resultButton} href={'/'}> Go to Homepage</Button>
    </div>;
}

export default Results;
