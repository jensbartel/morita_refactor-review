const Endnotes = (props) => {
    const text = props.text;

    return (
        <div className="endnotes">
            {text}
            <br /> 
            <br />
        </div>
    );
};

export default Endnotes;