import React from 'react'
import '../mainPageStylesJP.css'
import '../mainPageStylesTabletJP.css'
import '../mainPageStylesPhoneJP.css'

export default function ExhibitionTitle() {
    return (
        <div>
            <div className="title-containerJP">
                <span className="title-styleJP">墨人　森田子龍</span>
            </div>
            <div className="title-container2JP">
                <p className="title-datesJP">
                    京都：2021年1月10日（日）– 1月23日（土）<br />
                    東京：2021年1月29日（金）– 2月13日（土）
                </p>
            </div>
        </div>
    )
}
