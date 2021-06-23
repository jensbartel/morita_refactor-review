import '../../styles/stylesEnglish.css';
import '../../styles/stylesEnglishPhone.css';
import '../../styles/stylesEnglishTablet.css';
// import Fade from 'react-reveal/Fade'

const DefaultTextBlock = (props) => {
    let text = props.text;

    return (
        // <Fade bottom>
            <div className="defaultstyle">
                {text}<br /><br />
            </div>
        // </Fade>
    );
};

export default DefaultTextBlock;