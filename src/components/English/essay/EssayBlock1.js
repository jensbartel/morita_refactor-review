import { partsLabel } from "../../../data/TextConstants";
import IntroToEssay from "../textOnly/IntroToEssay";
import Parts from "../textOnly/Parts";

const EssayBlock1 = () => {
    return (
        <>
            <Parts text={partsLabel[4]} />
            <IntroToEssay />
        </>
    );
};

export default EssayBlock1;
