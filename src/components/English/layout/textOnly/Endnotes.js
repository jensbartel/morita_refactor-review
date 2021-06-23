import Fade from "react-reveal/Fade";

const Endnotes = (props) => {
    const text = props.text;

    return (
        <div className="endnotes">
            <Fade bottom>
                {text}
                <br /> 
                <br />
            </Fade>
        </div>
    );
};

export default Endnotes;