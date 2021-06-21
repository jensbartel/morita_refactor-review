import React from 'react';
import Fade from 'react-reveal/Fade';
import ReactHTMLParser from 'react-html-parser';
import '../vip.css'
import '../vipPhone.css'

export default function fullwidthHorizontal(props) {

    const scale = props.scale;
    var Vtitle, Vcaptionitem, Vtext;
    if (props.lang) {
        Vtitle = "VIPtitleJP"
        Vcaptionitem = "VIPcaptionitemJP"
        Vtext = "VIPtextJP"
    } else {
        Vtitle = "VIPtitle"
        Vcaptionitem = "VIPcaptionitem"
        Vtext = "VIPtext"
    }
    return (
        <Fade>
            <div className="workcontainer">
                <img src={props.item.img} className="fullwidthVIPimage" style={{width: scale + '%'}} alt=""/>
                <div className="captions" style={{width: scale + '%'}} >
                    <div className="textAndCaptions">
                        <div>
                            <p className={Vtext}>{ReactHTMLParser(props.text)}</p>
                        </div>
                        <div style={{width: scale + '%', marginTop: '1rem'}} className='fullwidthText_mobileCaptions'> 
                            <p className={Vtitle}>{props.item.title}</p>
                            <p className={Vcaptionitem}>{props.item.translation}</p>
                            <p className={Vcaptionitem}>{props.item.description}</p>
                            <p className={Vcaptionitem}>{props.item.label}</p>
                            <p className={Vcaptionitem}>{props.item.dimensions}</p>
                            <p className={Vcaptionitem}>{props.item.date}</p>
                            <p className={Vcaptionitem} style={{lineHeight: '1.4'}}>{props.item.furtherInfo ? ReactHTMLParser(props.item.furtherInfo) : null}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

