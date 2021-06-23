import Fade from "react-reveal/Fade";
import ReactHtmlParser from 'react-html-parser'
import '../../styles/stylesEnglish.css'
import '../../styles/stylesEnglishPhone.css';
import '../../styles/stylesEnglishTablet.css';

const FullWidthImage = (props) => {
    const item = props.item;

    var langStyle, captionText, emphasisText;
    if (props.lang) {
        langStyle = "two-images-caption-jp";
        captionText = item.textJP;
        emphasisText = item.emphasisJP;
    } else {
        langStyle = "two-images-caption";
        captionText = item.text;
        emphasisText = item.emphasis;
    }

    return (
        <Fade>
            <div className='fullwidthContainerstyle'>
                <img src={item.img} className='fullwidthImageStyle' alt="" />
                <div className={langStyle}>
                    <span>
                        <strong>{emphasisText}</strong>{ReactHtmlParser(captionText)}
                    </span>
                </div>
            </div>
        </Fade>
    );
};

export default FullWidthImage;