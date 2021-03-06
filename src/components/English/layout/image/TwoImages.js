import html from 'react-html-parser'

const TwoImages = (props) => {

    const { item1, item2 } = props;

    var langStyle, emphasisText1, captionText1, emphasisText2, captionText2;
    if (props.lang) {
        langStyle = "two-images-caption-jp";
        emphasisText1 = item1.emphasisJP;
        emphasisText2 = item2.emphasisJP;
        captionText1 = item1.textJP;
        captionText2 = item2.textJP;
    } else { 
        langStyle = "two-images-caption";
        emphasisText1 = item1.emphasis;
        emphasisText2 = item2.emphasis;
        captionText1 = item1.text;
        captionText2 = item2.text;
    }

    return (
        <div className="two-images-flexbox">
            <div>
                <img src={item1.img} alt=""/><br/>
                <p className={langStyle}><strong>{emphasisText1}</strong>{html(captionText1)}</p>
            </div>

            <div>
                <img src={item2.img} alt=""/>
                <p className={langStyle}><strong>{emphasisText2}</strong>{html(captionText2)}</p>
            </div>
        </div>
    )    
};

export default TwoImages;