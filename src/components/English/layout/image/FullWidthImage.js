import ReactHtmlParser from 'react-html-parser'

const FullWidthImage = (props) => {
    const item = props.item;

    var langStyle, captionText, emphasisText;
    if (props.lang) {
        langStyle = "two-images-caption-jp";
        captionText = item.textJP;
        emphasisText = item.emphasisJP;
    } else {
        langStyle = "two-images-caption";
        captionText = item.text;
        emphasisText = item.emphasis;
    }

    return (
            <div className='fullwidthContainerstyle'>
                <img src={item.img} className='fullwidthImageStyle' alt="" />
                <div className={langStyle}>
                    <span>
                        <strong>{emphasisText}</strong>{ReactHtmlParser(captionText)}
                    </span>
                </div>
            </div>
    );
};

export default FullWidthImage;