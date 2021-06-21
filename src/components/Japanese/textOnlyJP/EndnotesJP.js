import Fade from "react-reveal/Fade";

const EndnotesJP = (props) => {
    const textValue = props.text;

    return (
        <div className='endnotesJP'>
            <Fade bottom>
                {textValue}
                <br /> 
                <br />
            </Fade>
        </div>
    );
};

export default EndnotesJP;