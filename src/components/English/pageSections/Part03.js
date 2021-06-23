import EssayBlock7 from '../layout/essay/EssayBlock7'
import LargeImage from '../layout/image/LargeImage'
import TwoImages from '../layout/image/TwoImages'
import SelectedExhibitions from '../layout/textOnly/SelectedExhibitions'

import { essay21, essay25, essay26 } from '../../../data/ImageConstantsEssay'

const Part03 = () => {
    return (
        <>
            <EssayBlock7 />
            <LargeImage item={essay21} />
            <SelectedExhibitions />
            <TwoImages item1={essay25} item2={essay26} />
        </>
    )
}

export default Part03
