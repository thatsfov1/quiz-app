import React, {useState} from "react";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import s from './Home.module.css'
import Categories from "../../../Data/Categories.js";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Home = ({name, setName, fetchQuestions}) => {

    const navigate = useNavigate()

    const {
        register, formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues:{
            name:'',
            category:'',
            difficulty:''
        }
    })

    const onSubmit = (data) => {
        fetchQuestions(data.category, data.difficulty)
        navigate('/quiz')
    }
    console.log(errors)
    return <div className={s.container}>
        <Form onSubmit={handleSubmit(onSubmit)} className={s.forms}>
            <Form.Group>
                <Form.Control {...register('name', {
                    required:'Please, fill this blank',
                    pattern: {
                        value:/^[A-Za-z]+$/i,
                        message:'It doesn\'t look like real name'
                    }
                })} onChange={(e) => setName(e.target.value)} value={name}
                              style={{marginTop: 10, marginBottom: 20}} placeholder="Enter Your Name" type='text'
                              size='lg'/>
            </Form.Group>
                {errors?.name && <p className={s.error}>{errors?.name?.message}</p>}
            <FloatingLabel label='Select the Category'>
                <Form.Select {...register('category',{
                    required:'Please, fill this blank'
                })} style={{marginBottom: 20, paddingBottom: 5}}
                             size='lg' aria-label="Default select example">
                    <option key='chooseCat' value=''>Choose the Category</option>
                    {Categories.map(item => <option value={item.value} key={item.category}>{item.category}</option>)}
                </Form.Select>
                {errors?.category && <p className={s.error}>{errors?.category?.message}</p>}

            </FloatingLabel>
            <FloatingLabel label='Select the Difficulty'>
                <Form.Select  {...register('difficulty',{
                    required:'Please, fill this blank'
                })}     style={{paddingBottom: 5}} size='lg' aria-label="Default select example">
                    <option key='choose' value=''>Choose the Difficulty</option>
                    <option key='Easy' value='easy'>Easy</option>
                    <option key='Medium' value='medium'>Medium</option>
                    <option key='Hard' value='hard'>Hard</option>
                </Form.Select>
                {errors?.difficulty && <p className={s.error}>{errors?.difficulty?.message}</p>}
            </FloatingLabel>
            <Button type='submit'  size='lg' style={{width: "100%", marginTop: 20}}
                    variant="light">Start Quiz</Button>
        </Form>
        <div className={s.title}>
            Test your knowledge in any topic
        </div>
    </div>;
}

export default Home;
