import html from 'react-html-parser'

const FullWidthImage = (props) => {
    const item = props.item;

    var langStyle, captionText, emphasisText;
    if (props.lang) {
        langStyle = "fullwidth-image-caption-jp";
        captionText = item.textJP;
        emphasisText = item.emphasisJP;
    } else {
        langStyle = "fullwidth-image-caption";
        captionText = item.text;
        emphasisText = item.emphasis;
    }

    return (
            <div className='fullwidthContainerstyle'>
                <img src={item.img} alt="" />
                <div className={langStyle}>
                    <span>
                        <strong>{emphasisText}</strong>{html(captionText)}
                    </span>
                </div>
            </div>
    );
};

export default FullWidthImage;