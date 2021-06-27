import html from 'react-html-parser'

const TextRightImageLeftJP = (props) => {
    const { text, item } = props;

    return (
        <div className="text-image-flexboxJP">
            <div className="image-column">
                <img src={item.img} alt=""/>
                <p><strong>{item.emphasisJP}</strong>{item.textJP}</p>
            </div>
            <div className="text-column">
                {html(text)}    
            </div>
        </div>
    )    
};

export default TextRightImageLeftJP;

