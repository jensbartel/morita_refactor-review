import html from 'react-html-parser'

const TextLeftImageRight = (props) => {
    const { text, item } = props;

    return (
        <div className="text-image-flexbox">
            <div className="text-column">
                {html(text)}    
            </div>
            <div className="image-column">
                <img src={item.img} alt=""/>
                <p><strong>{item.emphasis}</strong>{html(item.text)}</p>
            </div>
        </div>
    )
};

export default TextLeftImageRight;