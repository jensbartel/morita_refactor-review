import html from 'react-html-parser'

const TextRightImageLeft = (props) => {
    const text = props.text;
    const item = props.item;

    return (
        <div className="text-image-flexbox TRIL-mobile">
            <div className="image-column" style={{marginBottom: '2rem'}}>
                <img src={item.img} alt=""/>
                <p><strong>{item.emphasis}</strong>{html(item.text)}</p>
            </div>
            <div className="text-column" style={{marginBottom: '0'}}>
                {html(text)}    
            </div>
        </div>
    )    
};

export default TextRightImageLeft;