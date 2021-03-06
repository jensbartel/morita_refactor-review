import Fade from 'react-reveal/Fade';
import html from 'react-html-parser';

const FullwidthHorizontal = (props) => {

    const { scale, item: { img, title, translation, description, source, label, seal, dimensions, date, furtherInfo}, lang } = props;

    let style = 'fullwidth-container';
    if(lang) { style = 'fullwidth-container fullwidth-modifier-eng' }

    return (
        <Fade>
            <div className={style}>
                <img src={img} style={{width: scale + '%'}} alt=""/>
                <div style={{width: scale + '%'}} >
                    <h2>{title}</h2>
                    <p>{translation}</p>
                    <p >{description}</p>
                    <p>{source ? source : null}</p>                    
                    <p>{label}</p>
                    <p>{seal ? seal : null}</p>
                    <p>{dimensions}</p>
                    <p>{date}</p>
                    <p style={{lineHeight: '1.4'}}>{furtherInfo ? html(furtherInfo) : null}</p>
                </div>
            </div>
        </Fade>
    )
};

export default FullwidthHorizontal;