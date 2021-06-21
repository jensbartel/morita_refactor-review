import React from "react";

import { partsLabelJP } from "../../../data/TextConstantsJP";
import TimelineJP from "../textOnlyComponentsJP/TimelineJP";
import PartsJP from "../../exhibitionMainPageJP/textOnlyComponentsJP/PartsJP";

export default function EssayBlock6() {
    return (
        <>
            <PartsJP text={partsLabelJP[3]} />
            <TimelineJP />
        </>
    );
}
