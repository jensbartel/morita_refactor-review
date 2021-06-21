import Fade from 'react-reveal/Fade'
import ReactHtmlParser from 'react-html-parser'
import '../stylesEnglish.css';
import '../stylesEnglishPhone.css';
import '../stylesEnglishTablet.css';

const LargeImage = (props) => {
    const essay01 = props.item;

    var captionText, emphasisText,langStyle;
    if (props.lang) {
        emphasisText = essay01.emphasisJP;
        captionText = essay01.textJP;
        langStyle  = "large-image-caption-jp"
    }
    else {
        emphasisText = essay01.emphasis;
        captionText = essay01.text;
        langStyle = "large-image-caption";
    }

    return (
        <Fade bottom>
            <div className="large-image-container">
                <img src={essay01.img} className="large-image-style" alt="" />
                <div style={{ marginBottom: "1rem" }}>
                    <p className={langStyle}>
                        <strong>{emphasisText}</strong>{ ReactHtmlParser(captionText) }
                    </p>
                </div>
            </div>
        </Fade>
    );
};

export default LargeImage;
