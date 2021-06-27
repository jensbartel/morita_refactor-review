import './vipMain.css';
import './vipPhone.css';

import FullwidthHorizontal from './vipComponents/FullwidthHorizontal';
import FullwidthWithText from './vipComponents/FullwidthWithText';
import HalfwidthHorizontal from './vipComponents/HalfwidthHorizontal';
import HalfwidthWithText from './vipComponents/HalfwidthWithText';
import InquiryJP from './vipComponents/InquiryJP';

import group1 from "../../assets/installation/group1.jpg";
import group2 from "../../assets/installation/group2.jpg";
import group7 from "../../assets/installation/group7.jpg";

import { KanzanScreen1969JP, Ryu1965JP, Shizuka1969JP, Miraiken1949JP, So1954JP, Kan1965JP, Datsu1963JP, Kanzan1964JP, Usobuku_shikkin1963JP, Kumomushin1967JP, Eko1967JP, SeishiBiken1941JP, Kan1961JP } from '../../data/ImageConstants';
import { kanzanVIPtextJP, soVIPtextJP } from '../../data/TextConstantsJP';


const EarlyAccessJP = () => {
    return (
        <>
            <div className='containerstyle' style={{marginTop: '2rem'}} >
                <img src={group1} className='fullwidthimagestyle' alt=""/>
            </div>

            <div className="nav-linkJP">
                <a className="active-link" href='vip'>作品一覧 (1)</a>
                <a href='vip2'>作品一覧 (2)</a>
                <a href='../'>展覧会概要</a>
            </div>

            <FullwidthWithText item={KanzanScreen1969JP} scale="75" text={kanzanVIPtextJP}/>
            <HalfwidthHorizontal item1={Shizuka1969JP} item2={Ryu1965JP} scaleLeft={56} contentWidth={42} lang='jp'/>
            <FullwidthHorizontal item={SeishiBiken1941JP} scale="60" />
            <FullwidthHorizontal item={Miraiken1949JP} scale="35" />

            <div className='containerstyle'>
                <img src={group2} className='fullwidthimagestyle' alt=""/>
            </div>

            <HalfwidthWithText item1={So1954JP} text={soVIPtextJP} scale1="70" lang='jp'/>

            <div className='video-responsive-vip'>
                <iframe 
                    className='iframe'
                    src="https://player.vimeo.com/video/493276722?title=0&byline=0&portrait=0" 
                    width="640" 
                    height="431" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="Morita Shiryu"
                    >
                </iframe>  
            </div>

            <div className='video-responsive2-vip'>
                <iframe 
                    className='iframe'
                    src="https://player.vimeo.com/video/494030007?title=0&byline=0&portrait=0" 
                    width="640" 
                    height="360" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="So"
                    >                    
                </iframe>
            </div>

            <div className='video-responsive3-vip'>            
                <FullwidthHorizontal item={Kan1961JP} scale="70" />
                <HalfwidthHorizontal item1={Kan1965JP} item2={Datsu1963JP} scaleLeft={54} contentWidth={59} lang='jp'/>
                <HalfwidthHorizontal item1={Kanzan1964JP} item2={Usobuku_shikkin1963JP} scaleLeft={40} contentWidth={46} lang='jp'/>

                {/* third group  */}
                <div className='containerstyle notFirst' >
                    <img src={group7} className='fullwidthimagestyle' alt="" lang='jp'/>
                </div>

                <FullwidthHorizontal item={Kumomushin1967JP} scale="60" />
                <FullwidthHorizontal item={Eko1967JP} scale="60" />

                <InquiryJP />

                <a href='/vip2' className='nextJp'>
                    <h2>次のページ</h2>
                </a>
            </div>

        </>
    )
};

export default EarlyAccessJP;