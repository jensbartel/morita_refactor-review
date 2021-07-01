import html from 'react-html-parser';
import Fade from 'react-reveal';

const FullWidthImage = (props) => {
    const {
        item: { img, text, textJP, emphasis, emphasisJP },
    } = props;

    var langStyle, caption, emphasisText;
    if (props.lang) {
        langStyle = 'fullwidth-image-caption-jp';
        caption = textJP;
        emphasisText = emphasisJP;
    } else {
        langStyle = 'fullwidth-image-caption';
        caption = text;
        emphasisText = emphasis;
    }

    return (
        <Fade>
            <div className='fullwidthContainerstyle'>
                <img src={img} alt='' />
                <div className={langStyle}>
                    <span>
                        <strong>{emphasisText}</strong>
                        {html(caption)}
                    </span>
                </div>
            </div>
        </Fade>
    );
};

export default FullWidthImage;
