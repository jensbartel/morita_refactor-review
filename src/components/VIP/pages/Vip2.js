import '../styles/vip.css'

import FullwidthHorizontal from '../vipcomponents/FullwidthHorizontal';
import FullwidthWithText from '../vipcomponents/FullwidthWithText';
import HalfwidthHorizontal from '../vipcomponents/HalfwidthHorizontal';
import Inquiry from '../vipcomponents/Inquiry';

import group3 from '../../../assets/installation/group3.jpg';
import group4 from '../../../assets/installation/group4.jpg';
import group5 from '../../../assets/installation/group5.jpg';
import group6 from '../../../assets/installation/group6.jpg';

import { Ki_shikkin1964, Ki1963, En1963, Monoui1963, Kanzan_shikkin1964,Asa1970, En1969, Usobuku1963, Izumi1975, Sojo1969, Ki1995, Nin1975, Negai1986, Myo1964_1, Myo1964_2 } from '../../../data/ImageConstants';
import { enVIPtext } from '../../../data/TextConstants';
import HalfwidthHorizontalVariation from '../vipcomponents/HalfwidthHorizontalVariation';


const VIP2 = () => {
    return (
        <>
            <div className='containerstyle' style={{marginTop: '2rem'}}>
                <img src={group3} alt=""/>
            </div>            

            <div className="nav-link">
                <a href='vip'>Viewing 1</a>
                <a className="active-link" href='vip2'>Viewing 2</a>
                <a href='../english'>Exhibition Overview</a>
            </div>

            <FullwidthWithText item={En1963} scale="75" text={enVIPtext} lang='en'/>
            <HalfwidthHorizontal item1={Monoui1963} item2={Kanzan_shikkin1964} scaleLeft={50} contentWidth={50} lang='en'/>
            <HalfwidthHorizontal item1={Ki_shikkin1964} item2={Ki1963} scaleLeft={50} contentWidth={57} lang='en'/>

            <div className='containerstyle notFirst'>
                <img src={group4} alt=""/>
            </div>       

            <HalfwidthHorizontal item1={Usobuku1963} item2={En1969} scaleLeft={55} contentWidth={57} lang='en'/>
            <HalfwidthHorizontal item1={Izumi1975} item2={Asa1970} scaleLeft={45} contentWidth={54} lang='en'/>

            <div className='containerstyle notFirst'>
                <img src={group5} alt=""/>
            </div>   

            <HalfwidthHorizontalVariation item1={Myo1964_1} item2={Myo1964_2} lang='en' />
            <FullwidthHorizontal item={Sojo1969} scale="60" lang='en'/>

            <div className='containerstyle notFirst'>
                <img src={group6} alt=""/>
            </div>   

            <FullwidthHorizontal item={Ki1995} scale="60" lang='en'/>
            <HalfwidthHorizontal item1={Nin1975} item2={Negai1986} scaleLeft={38} contentWidth={60} lang='en'/>
                     
            <Inquiry />

            <a href='../english/vip' className='nextEng'>
                <h2>Go to Page 1</h2>
            </a>
        </>
    )
};

export default VIP2;