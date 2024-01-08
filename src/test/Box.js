//Box.js


const Box = (props) => {
    const style = {
        marginRight: '20px',
        marginTop: '20px',
        borderRadius: '20px',
    };
    const newStyle = {...style, ...props.style};
    return (
        <>
            <div style={newStyle}></div>
        </>
    );
};
export default Box;
