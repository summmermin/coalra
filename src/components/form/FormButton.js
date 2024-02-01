const FormButton = (props) => {
    return <>
        <div id="button" className="row">
            <button type="submit">{props.title}</button>
        </div>
    </>;
};
export default FormButton;
