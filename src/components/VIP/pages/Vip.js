import '../styles/vip.css'
import Fade from 'react-reveal'

import FullwidthHorizontal from '../vipcomponents/FullwidthHorizontal';
import FullwidthWithText from '../vipcomponents/FullwidthWithText';
import HalfwidthHorizontal from '../vipcomponents/HalfwidthHorizontal';
import HalfwidthWithText from '../vipcomponents/HalfwidthWithText';
import Inquiry from '../vipcomponents/Inquiry';

import group1 from "../../../assets/installation/group1.jpg";
import group2 from "../../../assets/installation/group2.jpg";
import group7 from "../../../assets/installation/group7.jpg";

import { Miraiken1949, Ryu1965, Shizuka1969, KanzanScreen1969, Datsu1963, Usobuku_shikkin1963, So1954, Kan1965, Kanzan1964, Kumomushin1967, Eko1967, SeishiBiken1941, Kan1961 } from '../../../data/ImageConstants';
import { kanzanVIPtext, soVIPtext } from '../../../data/TextConstants';


const VIP = () => {
    return (
        <>
            <div className='containerstyle' style={{marginTop: '2rem'}}>
                <Fade>                
                    <img src={group1} alt=""/>
                </Fade>
            </div>

            <div className="nav-link">
                <a className="active-link" href='vip'>Viewing 1</a>
                <a href='vip2'>Viewing 2</a>
                <a href='../english'>Exhibition Overview</a>
            </div>

            <FullwidthWithText item={KanzanScreen1969} scale="75" text={kanzanVIPtext} lang='en'/>
            <HalfwidthHorizontal item1={Shizuka1969} item2={Ryu1965} scaleLeft={56} contentWidth={42} lang='en'/>
            <FullwidthHorizontal item={SeishiBiken1941} scale="60" lang='en'/>
            <FullwidthHorizontal item={Miraiken1949} scale="35" lang='en'/>

            <div className='containerstyle'>
                <Fade>
                    <img src={group2} alt=""/>
                </Fade>
            </div>

            <HalfwidthWithText item={So1954} text={soVIPtext} lang='en'/>

            <div className='video-responsive-vip'>
                <iframe 
                    className='iframe'
                    src="https://player.vimeo.com/video/493276722?title=0&byline=0&portrait=0" 
                    width="640" 
                    height="431" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
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
                    title="So"
                    >                    
                </iframe>
            </div>

            <div className='video-responsive3-vip'>
                <FullwidthHorizontal item={Kan1961} scale="70" lang='en'/>
                <HalfwidthHorizontal item1={Kan1965} item2={Datsu1963} scaleLeft={54} contentWidth={59} lang='en'/>
                <HalfwidthHorizontal item1={Kanzan1964} item2={Usobuku_shikkin1963} scaleLeft={40} contentWidth={46} lang='en'/>

                {/* third group  */}
                <div className='containerstyle notFirst'>
                    <Fade>
                        <img src={group7} alt=""/>
                    </Fade>
                </div>

                <FullwidthHorizontal item={Kumomushin1967} scale="60" lang='en'/>
                <FullwidthHorizontal item={Eko1967} scale="60" lang='en'/>
                
                <Inquiry />

                <a href='/english/vip2' className='nextEng'>
                    <h2>Go to Page 2</h2>
                </a>
            </div>
        </>
    )
};

export default VIP;