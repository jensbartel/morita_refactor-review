import React from 'react';
import './vip.css';
import './vipPhone.css';


import FullwidthHorizontal from './vipComponents/FullwidthHorizontal';
import HalfwidthHorizontal from './vipComponents/HalfwidthHorizontal';
import FullwidthWithText from './vipComponents/FullwidthWithText';
import InquiryJP from './vipComponents/InquiryJP';

import group3 from '../../assets/installation/group3.jpg';
import group4 from '../../assets/installation/group4.jpg';
import group5 from '../../assets/installation/group5.jpg';
import group6 from '../../assets/installation/group6.jpg';

import { En1963JP, Monoui1963JP, Kanzan_shikkin1964JP, Ki_shikkin1964JP, Ki1963JP, Usobuku1963JP, En1969JP, Asa1970JP, Izumi1975JP, Myo1964JP, Sojo1969JP, Ki1995JP, Nin1975JP, Negai1986JP } from '../../data/ImageConstants';
import { enVIPtextJP } from '../../data/TextConstantsJP';


export default function EarlyAccess2JP() {
    return (
        <>
            <div className='containerstyle' style={{marginTop: '2rem'}}>
                <img src={group3} className='fullwidthimagestyle' alt=""/>
            </div> 

            <div className="navigationLinks">
                <a className="navLinksItemJP" href='vip'>作品一覧 (1)</a>
                <a className="navLinksItemJP navLinksActive" href='vip2'>作品一覧 (2)</a>
                <a className="navLinksItemJP" href='../'>展覧会概要</a>
            </div>

            <FullwidthWithText item={En1963JP} scale="75" text={enVIPtextJP} lang='jp'/>
            <HalfwidthHorizontal item1={Monoui1963JP} item2={Kanzan_shikkin1964JP} scaleLeft={50} contentWidth={50} lang='jp'/>
            <HalfwidthHorizontal item1={Ki_shikkin1964JP} item2={Ki1963JP} scaleLeft={50} contentWidth={57} lang='jp'/>

            <div className='containerstyle notFirst' >
                <img src={group4} className='fullwidthimagestyle' alt=""/>
            </div> 

            <HalfwidthHorizontal item1={Usobuku1963JP} item2={En1969JP} scaleLeft={55} contentWidth={57} lang='jp'/><br /><br />
            <HalfwidthHorizontal item1={Izumi1975JP} item2={Asa1970JP} scaleLeft={45} contentWidth={54} lang='jp'/><br /><br />

            <div className='containerstyle notFirst' >
                <img src={group5} className='fullwidthimagestyle' alt=""/>
            </div>   

            <FullwidthHorizontal item={Myo1964JP} scale="70" lang='jp'/>
            <FullwidthHorizontal item={Sojo1969JP} scale="60" lang='jp'/>

            <div className='containerstyle notFirst' >
                <img src={group6} className='fullwidthimagestyle' alt=""/>
            </div>   

            <FullwidthHorizontal item={Ki1995JP} scale="60" lang='jp'/>
            <HalfwidthHorizontal item1={Nin1975JP} item2={Negai1986JP} scaleLeft={38} contentWidth={60} lang='jp'/>
         
            <InquiryJP />

            <a href='/vip'>
                <h2 className="nextpageJP">前のページ</h2>
            </a>
        </>
    )
}
