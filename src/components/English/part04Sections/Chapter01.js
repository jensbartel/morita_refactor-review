import { wanobi01 } from "../../../data/ImageConstantsEssay"
import EssayBlock1 from "../layout/essay/EssayBlock1"
import EssayBlock2 from "../layout/essay/EssayBlock2"
import FullWidthImage from "../layout/image/FullWidthImage"

const Chapter01 = () => {
    return (
        <>
            <EssayBlock1 />
            <EssayBlock2 />
            <FullWidthImage item={wanobi01} />
        </>
    )
}

export default Chapter01
