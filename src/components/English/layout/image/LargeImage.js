import html from 'react-html-parser'

const LargeImage = (props) => {
    const { item: { emphasis, emphasisJP, text, textJP, img }, lang } = props;

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
        <div className="large-image-container">
            <img src={img} alt="" />
            <div style={{ marginBottom: "1rem" }}>
                <p className={langStyle}>
                    <strong>{emphasisText}</strong>{ html(captionText) }
                </p>
            </div>
        </div>
    );
};

export default LargeImage;
