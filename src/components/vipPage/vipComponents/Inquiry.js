import React from 'react'
import ReactHTMLParser from 'react-html-parser';
import '../vip.css'
import '../vipPhone.css'

export default function Inquiry() {
    return (
        <>
            <div className='VIP-listcontainer'>
                <a href="http://exh.shibunkaku.co.jp/VIP_checklist-210108.pdf" download className='VIP-listlink' ><u>Download work list</u></a>
            </div>

            <div className='VIP-inquirystyle'>
                <strong>Contact for Inquiries: <span className='exInfoPhoneEN'>{ReactHTMLParser('<br />')}</span><a href="mailto:wanobi@shibunkaku.com"><u>wanobi@shibunkaku.com</u></a></strong>
            </div>
        </>
    )
}

