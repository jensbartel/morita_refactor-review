import ReactHTMLParser from 'react-html-parser'
import '../../styles/stylesEnglish.css';
import '../../styles/stylesEnglishPhone.css';
import '../../styles/stylesEnglishTablet.css';

const TextLeftImageRight = (props) => {
    const text = props.text;
    const item = props.item;

    return (
        <div className="text-left-flexbox">
            <div className="text-left-left-column">
                {ReactHTMLParser (text)}    
            </div>
            <div className="text-left-container">
                <img src={item.img} className="text-left-image" alt=""/>
                <p className="TLIR-TRIL-caption"><strong>{item.emphasis}</strong>{ReactHTMLParser(item.text)}</p>
            </div>
        </div>
    )
};

export default TextLeftImageRight;