import ReactHtmlParser from "react-html-parser";
import { workSelectionJP, workSelectionJP2, workSelectionJP3 } from '../../../data/TextConstantsJP';
import { essay15 } from "../../../data/ImageConstantsEssay";
import PartsJP from "../textOnlyJP/PartsJP";
import { partsLabelJP } from "../../../data/TextConstantsJP";
import DefaultTextBlockJP from "../textOnlyJP/DefaultTextBlockJP";
import TextLeftImageRightJP from "../textAndImageJP/TextLeftImageRightJP";

const EssayBlock6JP = () => {
    return (
        <>
            <PartsJP text={partsLabelJP[2]} />
            <DefaultTextBlockJP text={ReactHtmlParser(workSelectionJP)} />
            <TextLeftImageRightJP text={workSelectionJP2} item={essay15} />
            <DefaultTextBlockJP text={ReactHtmlParser(workSelectionJP3)} />
        </>
    );
}

export default EssayBlock6JP;
