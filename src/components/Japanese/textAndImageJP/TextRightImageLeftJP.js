import Fade from 'react-reveal/Fade'
import ReactHTMLParser from 'react-html-parser'
import '../stylesJapanese.css'
import '../stylesJapanesePhone.css'
import '../stylesJapaneseTablet.css'

const TextRightImageLeftJP = (props) => {
    const text = props.text;
    const item = props.item;

    return (
        <Fade bottom>
            <div className="text-left-flexboxJP">
                <div className="text-right-containerJP">
                    <img src={item.img} className="text-left-imageJP" alt=""/>
                    <p className="text-left-captionJP"><strong>{item.emphasisJP}</strong>{item.textJP}</p>
                </div>
                <div className="text-right-left-columnJP">
                    {ReactHTMLParser (text)}    
                </div>
            </div>
        </Fade>
    )    
};

export default TextRightImageLeftJP;

