import html from 'react-html-parser'

const TextRightImageLeftJP = (props) => {
    const { text, item } = props;

    return (
        <div className="text-left-flexboxJP">
            <div className="text-right-containerJP">
                <img src={item.img} className="text-left-imageJP" alt=""/>
                <p className="text-left-captionJP"><strong>{item.emphasisJP}</strong>{item.textJP}</p>
            </div>
            <div className="text-right-left-columnJP">
                {html(text)}    
            </div>
        </div>
    )    
};

export default TextRightImageLeftJP;

