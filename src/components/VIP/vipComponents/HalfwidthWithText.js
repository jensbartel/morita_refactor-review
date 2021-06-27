import Fade from 'react-reveal/Fade'
import html from 'react-html-parser';

const HalfwidthWithText = (props) => {

    const { item: { img, title, description, label, dimensions, date, furtherInfo }, lang } = props

    let left = 'inner-left';
    let right = 'inner-right';
    if(lang) { 
        left = 'inner-left halfwidthText-modifier-eng' 
        right = 'inner-right halfwidthText-modifier-eng' 
    }

    return (
        <Fade>
            <div className="halfwidthText-container">
                <div className="halfwidthText-row">
                    <div className="halfwidthText-column">
                        <div className={left}>
                            <img src={img} alt="" />
                            <div>
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <p>{label}</p>
                                <p>{dimensions}</p>
                                <p>{date}</p>
                                <p style={{lineHeight: '1.4'}}>{furtherInfo ? html(furtherInfo) : null}</p>
                            </div>
                        </div>
                    </div>
                    <div className="halfwidthText-column">
                        <div className={right}>
                            <p>{html(props.text)}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
};

 export default HalfwidthWithText;