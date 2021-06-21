import React from "react";
import ReactHtmlParser from "react-html-parser";

import { workSelectionJP, workSelectionJP2, workSelectionJP3 } from '../../../data/TextConstantsJP';
import { essay15 } from "../../../data/ImageConstantsEssay";
import PartsJP from "../textOnlyComponentsJP/PartsJP";
import { partsLabelJP } from "../../../data/TextConstantsJP";
import DefaultTextBlockJP from "../textOnlyComponentsJP/DefaultTextBlockJP";
import TextLeftImageRightJP from "../textAndImageComponentsJP/TextLeftImageRightJP";

import '../mainPageStylesJP.css';
import '../mainPageStylesPhoneJP.css';
import '../mainPageStylesTabletJP.css';

export default function EssayBlock6() {
    return (
        <>
            <PartsJP text={partsLabelJP[2]} />
            <DefaultTextBlockJP text={ReactHtmlParser(workSelectionJP)} />
            <TextLeftImageRightJP text={workSelectionJP2} item={essay15} />
            <DefaultTextBlockJP text={ReactHtmlParser(workSelectionJP3)} />
        </>
    );
}
