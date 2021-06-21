import Fade from 'react-reveal/Fade'
import ReactHtmlParser from 'react-html-parser'
import '../stylesEnglish.css';
import '../stylesEnglishPhone.css';
import '../stylesEnglishTablet.css';

const TwoImages = (props) => {

    let item1 = props.item1
    let item2 = props.item2

    var langStyle, emphasisText1, captionText1, emphasisText2, captionText2;
    if (props.lang) {
        langStyle = "two-images-caption-jp";
        emphasisText1 = item1.emphasisJP;
        emphasisText2 = item2.emphasisJP;
        captionText1 = item1.textJP;
        captionText2 = item2.textJP;
    } else { 
        langStyle = "two-images-caption";
        emphasisText1 = item1.emphasis;
        emphasisText2 = item2.emphasis;
        captionText1 = item1.text;
        captionText2 = item2.text;

    }

    return (
        <Fade bottom>
            <div className="two-images-flexbox">
                <div className="two-images-container1">
                    <img src={item1.img} className="two-images-imagestyle" alt=""/><br/>
                    <p className={langStyle}><strong>{emphasisText1}</strong>{ReactHtmlParser(captionText1)}</p>
                </div>

                <div className="two-images-container2">
                    <img src={item2.img} className="two-images-imagestyle" alt=""/>
                    <p className={langStyle}><strong>{emphasisText2}</strong>{ReactHtmlParser(captionText2)}</p>
                </div>
            </div>
        </Fade>
    )    
};

export default TwoImages;