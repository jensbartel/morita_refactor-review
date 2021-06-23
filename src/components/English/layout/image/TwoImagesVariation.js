import ReactHtmlParser from 'react-html-parser'
import '../../styles/stylesEnglish.css';
import '../../styles/stylesEnglishPhone.css';
import '../../styles/stylesEnglishTablet.css';

const TwoImagesVariation = (props) => {

    const item1 = props.item1
    const item2 = props.item2

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
        <div className="TIV-flexContainer">
            <div className="TIV-imageContainer1">
                <div className="TIV-imageSubcontainer">
                        <img src={item1.img} className="TIV-imageStyle" alt=""/><br/>
                        <p className={langStyle}><strong>{emphasisText1}</strong>{ReactHtmlParser(captionText1)}</p>                        
                </div>
            </div>
            <div className="TIV-imageContainer2">
                <div className="TIV-imageSubcontainer">
                    <img src={item2.img} className="TIV-imageStyle" alt=""/>
                    <p className={langStyle}><strong>{emphasisText2}</strong>{ReactHtmlParser(captionText2)}</p>
                </div>
            </div>            
        </div>
    )    
};

export default TwoImagesVariation;