import html from 'react-html-parser'

const TextLeftImageRightJP = (props) => {
    const { text, item } = props;

    return (
        <div className="text-left-flexboxJP">
            <div className="text-left-left-columnJP">
                {html (text)}    
            </div>
            <div className="text-left-containerJP">
                <img src={item.img} className="text-left-imageJP" alt=""/>
                <p className="text-left-captionJP"><strong>{item.emphasisJP}</strong>{html(item.textJP)}</p>
            </div>
        </div>
    )
};

export default TextLeftImageRightJP;


