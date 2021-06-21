import React from "react"

import { partsLabel } from "../../../data/TextConstants";
import IntroToEssay from "../textOnlyComponents/IntroToEssay";
import Parts from "../textOnlyComponents/Parts";

export default function EssayBlock1() {
    return (
        <>
            <Parts text={partsLabel[4]} />
            <IntroToEssay />
        </>
    );
}
