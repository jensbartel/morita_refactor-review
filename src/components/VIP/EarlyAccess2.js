import React from 'react';
import './vip.css';
import './vipPhone.css';


import FullwidthHorizontal from './vipComponents/FullwidthHorizontal';
import FullwidthWithText from './vipComponents/FullwidthWithText';
import HalfwidthHorizontal from './vipComponents/HalfwidthHorizontal';
import Inquiry from './vipComponents/Inquiry';

import group3 from '../../assets/installation/group3.jpg';
import group4 from '../../assets/installation/group4.jpg';
import group5 from '../../assets/installation/group5.jpg';
import group6 from '../../assets/installation/group6.jpg';

import { Ki_shikkin1964, Ki1963, En1963, Monoui1963, Kanzan_shikkin1964,Asa1970, En1969, Usobuku1963, Izumi1975, Myo1964, Sojo1969, Ki1995, Nin1975, Negai1986 } from '../../data/ImageConstants';
import { enVIPtext } from '../../data/TextConstants';


export default function EarlyAccess2() {
    return (
        <>
            <div className='containerstyle' style={{marginTop: '2rem'}}>
                <img src={group3} className='fullwidthimagestyle' alt=""/>
            </div>            

            <div className="navigationLinks">
                <a className="navLinksItem" href='vip'>Viewing 1</a>
                <a className="navLinksItem navLinksActive" href='vip2'>Viewing 2</a>
                <a className="navLinksItem" href='../english'>Exhibition Overview</a>
            </div>

            <FullwidthWithText item={En1963} scale="75" text={enVIPtext}/>
            <HalfwidthHorizontal item1={Monoui1963} item2={Kanzan_shikkin1964} scaleLeft={50} contentWidth={50} />
            <HalfwidthHorizontal item1={Ki_shikkin1964} item2={Ki1963} scaleLeft={50} contentWidth={57} />

            <div className='containerstyle notFirst'>
                <img src={group4} className='fullwidthimagestyle' alt=""/>
            </div>       

            <HalfwidthHorizontal item1={Usobuku1963} item2={En1969} scaleLeft={55} contentWidth={57} />
            <HalfwidthHorizontal item1={Izumi1975} item2={Asa1970} scaleLeft={45} contentWidth={54} />

            <div className='containerstyle notFirst'>
                <img src={group5} className='fullwidthimagestyle' alt=""/>
            </div>   

            <FullwidthHorizontal item={Myo1964} scale="70"/>
            <FullwidthHorizontal item={Sojo1969} scale="60"/>

            <div className='containerstyle notFirst'>
                <img src={group6} className='fullwidthimagestyle' alt=""/>
            </div>   

            <FullwidthHorizontal item={Ki1995} scale="60"/>
            <HalfwidthHorizontal item1={Nin1975} item2={Negai1986} scaleLeft={38} contentWidth={60} />
                     
            <Inquiry />

            <a href='../english/vip'>
                <h2 className="nextpage">Go to Page 1</h2>
            </a>
        </>
    )
}
