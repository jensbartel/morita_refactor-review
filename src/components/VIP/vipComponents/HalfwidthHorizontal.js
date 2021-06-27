import html from 'react-html-parser';
import Fade from 'react-reveal/Fade'

const HalfwidthHorizontal = (props) => {

    const { item1, item2, contentWidth, scaleLeft, lang } = props;
    
    const scale = Math.round(scaleLeft/100*contentWidth);
    const scale1 = scale.toString();
    const scale2 = (contentWidth-scale).toString();

    let style = 'halfwidth-horizontal';
    if(lang) { style = 'halfwidth-horizontal halfwidth-modifier-eng' }

    return (
        <Fade>
            <div className={style}>
                <div style={{width: scale1 + '%'}} >
                    <img src={item1.img} className='VIP-halfwidth-img' alt='' />
                    <h2>{item1.title}</h2>
                    <p>{item1.description}</p>
                    <p>{item1.label}</p>
                    <p>{item1.seal ? item1.seal : null}</p>
                    <p>{item1.dimensions}</p>
                    <p>{item1.date}</p>
                    <p style={{lineHeight: '1.4'}}>{item1.furtherInfo ? html(item1.furtherInfo) : null}</p>
                </div>
                <div style={{width: scale2 + '%'}} >
                    <img src={item2.img} className='VIP-halfwidth-img' alt='' />
                    <h2>{item2.title}</h2>
                    <p>{item2.description}</p>
                    <p>{item2.label}</p>
                    <p>{item2.seal ? item2.seal : null}</p>
                    <p>{item2.dimensions}</p>
                    <p>{item2.date}</p>
                    <p style={{lineHeight: '1.4'}}>{item2.furtherInfo ? html(item2.furtherInfo) : null}</p>
                </div>
            </div>
        </Fade>
    )
};

export default HalfwidthHorizontal;
