import FormButton from './FormButton';
import FormInput from './FormInput';
import {useState} from 'react';

const submitHandler = (e) => {
    e.preventDefault();
    console.log(111);
};

const changeInput = (e) => {
    console.log(e.target.value, '!!!');
};


const Form = (props) => {

    return <>
        <form onSubmit={submitHandler}>
            <FormInput change={changeInput} description="Username" placeholder="Enter your username" type="text"/>
            <FormInput change={changeInput} description="Password" placeholder="Enter your password" type="password"/>
            <FormButton title="Log in"/>
        </form>
    </>;
};
export default Form;
