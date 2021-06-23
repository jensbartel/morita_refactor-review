import ReactHTMLParser from 'react-html-parser'
import '../../styles/stylesEnglish.css';
import '../../styles/stylesEnglishPhone.css';
import '../../styles/stylesEnglishTablet.css';

const TextRightImageLeft = (props) => {
    const text = props.text;
    const item = props.item;

    return (
        <div className="text-right-flexbox">
            <div className="text-right-container">
                <img src={item.img} className="text-right-image" alt=""/>
                <p className="TLIR-TRIL-caption"><strong>{item.emphasis}</strong>{ReactHTMLParser(item.text)}</p>
            </div>
            <div className="text-right-left-column">
                {ReactHTMLParser (text)}    
            </div>
        </div>
    )    
};

export default TextRightImageLeft;