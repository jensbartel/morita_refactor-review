const Quote = (props) => {

    let textValue = props.text;
    return (
        <div className='quoteStyle'>
            {textValue}
        </div>
    );
};

export default Quote;