import EssayBlock7 from './layout/essay/EssayBlock7'
import LargeImage from './layout/image/LargeImage'
import TwoImages from './layout/image/TwoImages'
import Timeline from './layout/textOnly/Timeline'

import { essay21, essay25, essay26 } from '../../data/ImageConstantsEssay'
import exhibitionHistory from '../../data/ExhibitionHistory'

const Part03 = () => {
    return (
        <>
            <EssayBlock7 />
            <LargeImage item={essay21} />
            <Timeline title='Selected Exhibitions' data={exhibitionHistory} />
            <TwoImages item1={essay25} item2={essay26} />
        </>
    )
}

export default Part03
