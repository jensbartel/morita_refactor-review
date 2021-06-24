const Quote = (props) => {

    let textValue = props.text;
    return (
        <div className='quoteStyle'>
            {textValue}
            <br /> 
            <br />
        </div>
    );
};

export default Quote;