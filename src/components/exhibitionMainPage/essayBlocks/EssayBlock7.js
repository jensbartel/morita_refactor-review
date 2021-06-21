import React from "react";

import { partsLabel } from "../../../data/TextConstants";
import Parts from "../textOnlyComponents/Parts";
import Timeline from "../textOnlyComponents/Timeline";

export default function EssayBlock6() {
    return (
        <>
            <Parts text={partsLabel[3]} />
            <Timeline />
        </>
    );
}
