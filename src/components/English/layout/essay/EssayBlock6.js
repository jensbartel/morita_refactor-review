import ReactHtmlParser from "react-html-parser";

import TextLeftImageRight from "../textAndImage/TextLeftImageRight";
import DefaultTextBlock from "../textOnly/DefaultTextBlock";
import Parts from "../textOnly/Parts";

import { partsLabel, workSelection, workSelection2, workSelection3 } from "../../../../data/TextConstants";
import { essay15 } from "../../../../data/ImageConstantsEssay";

const EssayBlock6 = () => {
    return (
        <>
            <Parts text={partsLabel[2]} />
            <DefaultTextBlock text={ReactHtmlParser(workSelection)} />
            <TextLeftImageRight text={workSelection2} item={essay15} />
            <DefaultTextBlock text={ReactHtmlParser(workSelection3)} />
        </>
    );
};

export default EssayBlock6;
