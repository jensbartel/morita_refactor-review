import './vip.css';
import './vipPhone.css';

import FullwidthHorizontal from './vipComponents/FullwidthHorizontal';
import FullwidthWithText from './vipComponents/FullwidthWithText';
import HalfwidthHorizontal from './vipComponents/HalfwidthHorizontal';
import HalfwidthWithText from './vipComponents/HalfwidthWithText';
import Inquiry from './vipComponents/Inquiry';

import group1 from "../../assets/installation/group1.jpg";
import group2 from "../../assets/installation/group2.jpg";
import group7 from "../../assets/installation/group7.jpg";

import { Miraiken1949, Ryu1965, Shizuka1969, KanzanScreen1969, Datsu1963, Usobuku_shikkin1963, So1954, Kan1965, Kanzan1964, Kumomushin1967, Eko1967, SeishiBiken1941, Kan1961 } from '../../data/ImageConstants';
import { kanzanVIPtext, soVIPtext } from '../../data/TextConstants';


const EarlyAccess = () => {
    return (
        <>
            <div className='containerstyle' style={{marginTop: '2rem'}}>
                <img src={group1} className='fullwidthimagestyle' alt=""/>
            </div>

            <div className="navigationLinks">
                <a className="navLinksItem navLinksActive" href='vip'>Viewing 1</a>
                <a className="navLinksItem" href='vip2'>Viewing 2</a>
                <a className="navLinksItem" href='../english'>Exhibition Overview</a>
            </div>

            <FullwidthWithText item={KanzanScreen1969} scale="75" text={kanzanVIPtext}/>
            <HalfwidthHorizontal item1={Shizuka1969} item2={Ryu1965} scaleLeft={56} contentWidth={42} />
            <FullwidthHorizontal item={SeishiBiken1941} scale="60"/>
            <FullwidthHorizontal item={Miraiken1949} scale="35"/>

            <div className='containerstyle'>
                <img src={group2} className='fullwidthimagestyle' alt=""/>
            </div>

            <HalfwidthWithText item1={So1954} text={soVIPtext} scale1="70"/>

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
                <FullwidthHorizontal item={Kan1961} scale="70"/>
                <HalfwidthHorizontal item1={Kan1965} item2={Datsu1963} scaleLeft={54} contentWidth={59} />
                <HalfwidthHorizontal item1={Kanzan1964} item2={Usobuku_shikkin1963} scaleLeft={40} contentWidth={46} />

                {/* third group  */}
                <div className='containerstyle notFirst'>
                    <img src={group7} className='fullwidthimagestyle' alt=""/>
                </div>

                <FullwidthHorizontal item={Kumomushin1967} scale="60"/>
                <FullwidthHorizontal item={Eko1967} scale="60"/>
                
                <Inquiry />

                <a href='/english/vip2'>
                    <h2 className="nextpage">Go to Page 2</h2>
                </a>
            </div>
        </>
    )
};

export default EarlyAccess;