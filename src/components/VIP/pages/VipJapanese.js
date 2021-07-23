import '../styles/vip.css'

import FullwidthHorizontal from '../vipcomponents/FullwidthHorizontal';
import FullwidthWithText from '../vipcomponents/FullwidthWithText';
import HalfwidthHorizontal from '../vipcomponents/HalfwidthHorizontal';
import HalfwidthWithText from '../vipcomponents/HalfwidthWithText';
import InquiryJP from '../vipcomponents/InquiryJP';

import group1 from "../../../assets/installation/group1.jpg";
import group2 from "../../../assets/installation/group2.jpg";
import group7 from "../../../assets/installation/group7.jpg";

import { KanzanScreen1969JP, Ryu1965JP, Shizuka1969JP, Miraiken1949JP, So1954JP,  SeishiBiken1941JP, Kan1961JP, Kan1965JP, Datsu1963JP, Kanzan1964JP, Usobuku_shikkin1963JP, Kumomushin1967JP, Eko1967JP } from '../../../data/ImageConstants';
import { kanzanVIPtextJP, soVIPtextJP } from '../../../data/TextConstantsJP';


const VIPJapanese = () => {
    return (
        <>        
            <div className='containerstyle' style={{marginTop: '2rem'}} >
                <img src={group1} alt=""/>
            </div>

            <div className="nav-linkJP">
                <a className="active-link" href='vip'>作品一覧 (1)</a>
                <a href='vip2'>作品一覧 (2)</a>
                <a href='../'>展覧会概要</a>
            </div>

            <FullwidthWithText item={KanzanScreen1969JP} scale="75" text={kanzanVIPtextJP}/>
            <HalfwidthHorizontal item1={Shizuka1969JP} item2={Ryu1965JP} scaleLeft={56} contentWidth={42} />
            <FullwidthHorizontal item={SeishiBiken1941JP} scale="60" />
            <FullwidthHorizontal item={Miraiken1949JP} scale="35" />

            <div className='containerstyle'>
                <img src={group2} alt=""/>
            </div>

            <HalfwidthWithText item={So1954JP} text={soVIPtextJP} scale1="70"/>

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

        </>
    )
};

export default VIPJapanese;