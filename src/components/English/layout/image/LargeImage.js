import ReactHtmlParser from 'react-html-parser'
import '../../styles/stylesEnglish.css';
import '../../styles/stylesEnglishPhone.css';
import '../../styles/stylesEnglishTablet.css';

const LargeImage = (props) => {
    const { item: { emphasis, emphasisJP, text, textJP, img }, lang } = props;

    var captionText, emphasisText,langStyle;
    if(lang) {
        emphasisText = emphasisJP;
        captionText = textJP;
        langStyle  = "large-image-caption-jp"
    }
    else {
        emphasisText = emphasis;
        captionText = text;
        langStyle = "large-image-caption";
    }

    return (
        <div className="large-image-container">
            <img src={img} className="large-image-style" alt="" />
            <div style={{ marginBottom: "1rem" }}>
                <p className={langStyle}>
                    <strong>{emphasisText}</strong>{ ReactHtmlParser(captionText) }
                </p>
            </div>
        </div>
    );
};

export default LargeImage;
