const FormInput = (props) => {
    return <>
        <div className="row">
            <label>{props.description}</label>
            <input onChange={props.change} type={props.type} placeholder={props.placeholder}/>
        </div>
    </>;
};
export default FormInput;
