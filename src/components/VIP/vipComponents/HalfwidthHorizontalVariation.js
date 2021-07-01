import html from 'react-html-parser';
import Fade from 'react-reveal/Fade'

const HalfwidthHorizontalVariation = (props) => {

    const { item1, item2: { img, title, description, dimensions, label, date, furtherInfo }, lang } = props;

    let style = 'halfwidth-variation';
    if(lang) { style = 'halfwidth-variation halfwidth-modifier-eng' }

    return (
        <Fade>
            <div className={style}>
                <div>
                    <img src={item1.img} alt=''/>
                    <img src={img} alt=''/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{label}</p>
                    <p>{dimensions}</p>
                    <p>{date}</p>
                    <p style={{lineHeight: '1.4'}}>{furtherInfo ? html(furtherInfo) : null}</p>    
                </div>
            </div>
        </Fade>
    )
};

export default HalfwidthHorizontalVariation;
