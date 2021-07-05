import LargeImage from './layout/image/LargeImage'
import Parts from './layout/textOnly/Parts'
import TwoImages from './layout/image/TwoImages'
import Timeline from './layout/textOnly/Timeline'

import { essay21, essay25, essay26 } from '../../data/ImageConstantsEssay'
import exhibitionHistory from '../../data/ExhibitionHistory'
import { partsLabel } from '../../data/TextConstants'
import chronology from '../../data/Chronology'

const Part03 = () => {
    return (
        <>
            <div id='part3' className='anchordiv'></div>
            {/* <EssayBlock7 /> */}
            <Parts text={partsLabel[3]} />
            <Timeline title='Chronology' data={chronology} />
            <LargeImage item={essay21} />
            <Timeline title='Selected Exhibitions' data={exhibitionHistory} />
            <TwoImages item1={essay25} item2={essay26} />
        </>
    )
}

export default Part03
