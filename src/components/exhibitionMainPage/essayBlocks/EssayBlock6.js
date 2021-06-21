import React from "react";
import ReactHtmlParser from "react-html-parser";

import { partsLabel, workSelection, workSelection2, workSelection3 } from "../../../data/TextConstants";
import { essay15 } from "../../../data/ImageConstantsEssay";
import TextLeftImageRight from "../textAndImageComponents/TextLeftImageRight";
import DefaultTextBlock from "../textOnlyComponents/DefaultTextBlock";
import Parts from "../textOnlyComponents/Parts";

import '../mainPageStyles.css';
import '../mainPageStylesPhone.css';
import '../mainPageStylesTablet.css';

export default function EssayBlock6() {
    return (
        <>
            <Parts text={partsLabel[2]} />
            <DefaultTextBlock text={ReactHtmlParser(workSelection)} />
            <TextLeftImageRight text={workSelection2} item={essay15} />
            <DefaultTextBlock text={ReactHtmlParser(workSelection3)} />
        </>
    );
}
