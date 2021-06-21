import React from 'react'
import Fade from 'react-reveal/Fade'
import ReactHTMLParser from 'react-html-parser';


import "../vip.css";
import "../vipPhone.css";

export default function HalfwidthWithText(props) {

    const scale1 = props.scale1
    
    var Vtitle, Vcaptionitem, Vtext;
    if (props.lang) {
        Vtitle = "VIPtitleJP"
        Vcaptionitem = "VIPcaptionitemJP"
        Vtext = "VIPtextVertJP"
    } else {
        Vtitle = "VIPtitle"
        Vcaptionitem = "VIPcaptionitem"
        Vtext = "VIPtextVert"
    }

    return (
        <Fade>
            <div className="VIP-halfwidthText-container">
                <div className="VIP-halfwidthText-row">
                    <div className="VIP-halfwidthText-col6">
                        <div className="VIP-halfwidthText-inner-left">
                            <img src={props.item1.img} className="VIP-halfwidthText-img-vert" style={{width: scale1 + '%'}} alt="" />
                            <div className="VIP-halfwidthText-caption" style={{width: scale1 + '%'}}>
                                <p className={Vtitle}>{props.item1.title}</p>
                                <p className={Vcaptionitem}>{props.item1.description}</p>
                                <p className={Vcaptionitem}>{props.item1.label}</p>
                                <p className={Vcaptionitem}>{props.item1.dimensions}</p>
                                <p className={Vcaptionitem}>{props.item1.date}</p>
                                <p className={Vcaptionitem} style={{lineHeight: '1.4'}}>{props.item1.furtherInfo ? ReactHTMLParser(props.item1.furtherInfo) : null}</p>
                            </div>
                        </div>
                    </div>
                    <div className="VIP-halfwidthText-col6">
                        <div className="VIP-halfwidthText-inner-right">
                            <div className="VIP-halfwidthText-halfwidth-caption">
                            <p className={Vtext}>{ReactHTMLParser(props.text)}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
