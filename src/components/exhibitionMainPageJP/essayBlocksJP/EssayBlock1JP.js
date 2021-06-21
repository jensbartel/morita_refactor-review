import React from "react"

import { partsLabelJP } from "../../../data/TextConstantsJP";
import IntroToEssay from "../textOnlyComponentsJP/IntroToEssayJP";
import Parts from "../textOnlyComponentsJP/PartsJP";

export default function EssayBlock1() {
    return (
        <>
            <Parts text={partsLabelJP[4]} />
            <IntroToEssay />
        </>
    );
}
