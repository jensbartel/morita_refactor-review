import { partsLabelJP } from "../../../data/TextConstantsJP";
import IntroToEssay from "../textOnlyJP/IntroToEssayJP";
import Parts from "../textOnlyJP/PartsJP";

const EssayBlock1JP = () => {
    return (
        <>
            <Parts text={partsLabelJP[4]} />
            <IntroToEssay />
        </>
    );
}

export default EssayBlock1JP;
