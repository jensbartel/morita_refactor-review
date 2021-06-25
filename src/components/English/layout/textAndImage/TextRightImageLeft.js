import ReactHTMLParser from 'react-html-parser'

const TextRightImageLeft = (props) => {
    const text = props.text;
    const item = props.item;

    return (
        <div className="text-image-flexbox">
            <div className="image-column">
                <img src={item.img} alt=""/>
                <p><strong>{item.emphasis}</strong>{ReactHTMLParser(item.text)}</p>
            </div>
            <div className="text-column">
                {ReactHTMLParser (text)}    
            </div>
        </div>
    )    
};

export default TextRightImageLeft;