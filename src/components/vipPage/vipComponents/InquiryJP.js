import React from 'react'
import '../vip.css'
import '../vipPhone.css'

export default function Inquiry() {
    return (
        <>
            <div className='VIP-listcontainer' >
                <a href="http://exh.shibunkaku.co.jp/VIP作品リスト-210108.pdf" download className='VIP-listlinkJP'><u>作品リストをダウンロード</u></a>
            </div>
            <div className='VIP-inquirystyleJP'>
                <strong>本展に関するお問い合わせ: <a href="mailto:wanobi@shibunkaku.com"><u>wanobi@shibunkaku.com</u></a></strong>
            </div>
        </>
    )
}
