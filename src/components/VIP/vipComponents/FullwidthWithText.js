import Fade from 'react-reveal/Fade';
import html from 'react-html-parser';

const FullwidthWithText = (props) => {

    const { scale, item: { img, title, translation, description, label, dimensions, date, furtherInfo }, text, lang } = props;

    let style = 'fullwidthWithText-container';
    if(lang) { style = 'fullwidthWithText-container fullwidth-modifier-eng' }

    return (
        <Fade>
            <div className={style}>
                <img src={img} style={{width: scale + '%'}} alt=""/>
                <div className='withText' style={{width: scale + '%'}} >
                    <div className="text-caption">
                        <p>{html(text)}</p>
                    </div>
                    <div className='fullwidthWithText_mobileCaptions'> 
                        <h2>{title}</h2>
                        <p>{translation}</p>
                        <p>{description}</p>
                        <p>{label}</p>
                        <p>{dimensions}</p>
                        <p>{date}</p>
                        <p style={{lineHeight: '1.4'}}>{furtherInfo ? html(furtherInfo) : null}</p>
                    </div>
                </div>
            </div>
        </Fade>
    )
};

export default FullwidthWithText;

