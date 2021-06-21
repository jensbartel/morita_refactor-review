import React from 'react'
import '../mainPageStyles.css'
import '../mainPageStylesTablet.css'
import '../mainPageStylesPhone.css'

export default function ExhibitionTitle() {
    return (
        <div>
            <div className="title-container">
                <span className="title-style">Morita Shiryū: Bokujin</span>
            </div>
            <div className="title-container2">
                <p className="title-dates">
                    January 10–23, Kyoto<br />
                    January 29–February 13, Tokyo
                </p>
            </div>
        </div>
    )
}
