import html from 'react-html-parser'

const TextLeftImageRightJP = (props) => {
    const { text, item } = props;

    return (
        <div className="text-image-flexboxJP">
            <div className="text-column">
                {html (text)}    
            </div>
            <div className="image-column">
                <img src={item.img} alt=""/>
                <p><strong>{item.emphasisJP}</strong>{html(item.textJP)}</p>
            </div>
        </div>
    )
};

export default TextLeftImageRightJP;


