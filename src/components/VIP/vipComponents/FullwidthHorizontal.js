import React from 'react';
import Fade from 'react-reveal/Fade';
import ReactHTMLParser from 'react-html-parser';
import '../vip.css'

export default function fullwidthHorizontal(props) {

    const scale = props.scale;
    var Vtitle, Vcaptionitem;
    if (props.lang) {
        Vtitle = "VIPtitleJP"
        Vcaptionitem = "VIPcaptionitemJP"
    } else {
        Vtitle = "VIPtitle"
        Vcaptionitem = "VIPcaptionitem"
    }
    return (
        <Fade>
            <div className="workcontainer">
                <img src={props.item.img} className="fullwidthVIPimage" style={{width: scale + '%'}} alt=""/>
                <div className="captions" style={{width: scale + '%'}} >
                    <h2 className={Vtitle}>{props.item.title}</h2>
                    <p className={Vcaptionitem}>{props.item.translation}</p>
                    <p className={Vcaptionitem}>{props.item.description}</p>

                    <p className={Vcaptionitem}>{props.item.source ? props.item.source : null}</p>
                    
                    <p className={Vcaptionitem}>{props.item.label}</p>
                    <p className={Vcaptionitem}>{props.item.seal ? props.item.seal : null}</p>
                    <p className={Vcaptionitem}>{props.item.dimensions}</p>
                    <p className={Vcaptionitem}>{props.item.date}</p>
                    <p className={Vcaptionitem} style={{lineHeight: '1.4'}}>{props.item.furtherInfo ? ReactHTMLParser(props.item.furtherInfo) : null}</p>
                </div>
            </div>
        </Fade>
    )
}


