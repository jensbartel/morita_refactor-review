import html from 'react-html-parser'

const TextRightImageLeft = (props) => {
    const text = props.text;
    const item = props.item;

    return (
        <div className="text-image-flexbox">
            <div className="image-column">
                <img src={item.img} alt=""/>
                <p><strong>{item.emphasis}</strong>{html(item.text)}</p>
            </div>
            <div className="text-column">
                {html(text)}    
            </div>
        </div>
    )    
};

export default TextRightImageLeft;