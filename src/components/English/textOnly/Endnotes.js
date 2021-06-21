import Fade from "react-reveal/Fade";

const Endnotes = (props) => {
    const textValue = props.text;

    return (
        <div className="endnotes">
            <Fade bottom>
                {textValue}
                <br /> 
                <br />
            </Fade>
        </div>
    );
};

export default Endnotes;