import React from 'react'
import ReactHTMLParser from 'react-html-parser';
import Fade from 'react-reveal/Fade'
// import "../vipMain.css";
// import "../vipPhone.css";

export default function HalfwidthHorizontal(props) {

    const { item1, item2, contentWidth, scaleLeft } = props;
    const scale = Math.round(scaleLeft/100*contentWidth);
    const scale1 = scale.toString();
    const scale2 = (contentWidth-scale).toString();

    var Vtitle, Vcaptionitem;
    if (props.lang) {
        Vtitle = "VIPtitleJP"
        Vcaptionitem = "VIPcaptionitemJP"
    } else {
        Vtitle = "VIPtitle"
        Vcaptionitem = "VIPcaptionitem"
    }

    console.log(Vtitle);

    return (
        <Fade>
            <div className='VIP-halfwidth-variation-container'>
                <div style={{width: scale1 + '%'}} className='VIP-halfwidth-content1'>
                    <img src={item1.img} className='VIP-halfwidth-img' alt='' />
                    <p className={Vtitle}>{item1.title}</p>
                    <p className={Vcaptionitem}>{item1.description}</p>
                    <p className={Vcaptionitem}>{item1.label}</p>
                    <p className={Vcaptionitem}>{item1.seal ? item1.seal : null}</p>
                    <p className={Vcaptionitem}>{item1.dimensions}</p>
                    <p className={Vcaptionitem}>{item1.date}</p>
                    <p className={Vcaptionitem} style={{lineHeight: '1.4'}}>{item1.furtherInfo ? ReactHTMLParser(item1.furtherInfo) : null}</p>
                </div>
                <div style={{width: scale2 + '%'}} className='VIP-halfwidth-content2'>
                    <img src={item2.img} className='VIP-halfwidth-img' alt='' />
                    <p className={Vtitle}>{item2.title}</p>
                    <p className={Vcaptionitem}>{item2.description}</p>
                    <p className={Vcaptionitem}>{item2.label}</p>
                    <p className={Vcaptionitem}>{item2.seal ? item2.seal : null}</p>
                    <p className={Vcaptionitem}>{item2.dimensions}</p>
                    <p className={Vcaptionitem}>{item2.date}</p>
                    <p className={Vcaptionitem} style={{lineHeight: '1.4'}}>{item2.furtherInfo ? ReactHTMLParser(item2.furtherInfo) : null}</p>
                </div>
            </div>
        </Fade>
    )
}
