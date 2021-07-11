import Fade from 'react-reveal'
import html from 'react-html-parser'

const LargeImage = (props) => {
    const { item: { emphasis, emphasisJP, text, textJP, img }, lang, fade } = props;

    var captionText, emphasisText,langStyle;
    if(lang) {
        emphasisText = emphasisJP;
        captionText = textJP;
        langStyle  = "large-image-caption-jp"
    }
    else {
        emphasisText = emphasis;
        captionText = text;
        langStyle = "large-image-caption";
    }

    return (
        <>
            {fade === 'none' && (
                    <Fade>
                        <div className="large-image-container">
                            <img src={img} alt="" />
                            <div style={{ marginBottom: "1rem" }}>
                                <p className={langStyle}>
                                    <strong>{emphasisText}</strong>{ html(captionText) }
                                </p>
                            </div>
                        </div>
                    </Fade>
                )
            }

            {fade !== 'none' && (
                    <Fade bottom>
                        <div className="large-image-container">
                            <img src={img} alt="" />
                            <div style={{ marginBottom: "1rem" }}>
                                <p className={langStyle}>
                                    <strong>{emphasisText}</strong>{ html(captionText) }
                                </p>
                            </div>
                        </div>
                    </Fade>
                )
            }
        </>
    );
};

export default LargeImage;
