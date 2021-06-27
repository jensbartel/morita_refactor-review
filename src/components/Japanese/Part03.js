import LargeImage from '../English/layout/image/LargeImage'
import PartsJP from './layout/textOnlyJP/PartsJP'
import SelectedExhibitionsJP from './layout/textOnlyJP/SelectedExhibitionsJP'
import TimelineJP from './layout/textOnlyJP/TimelineJP'
import TwoImages from '../English/layout/image/TwoImages'

import { essay21, essay25, essay26 } from '../../data/ImageConstantsEssay'
import { partsLabelJP } from '../../data/TextConstantsJP'

const Part03 = () => {
    return (
        <>
            <div id='part3' className='anchordiv'></div>                        
            <PartsJP text={partsLabelJP[3]} />
            <TimelineJP />
            <LargeImage item={essay21} lang='jp' />
            <SelectedExhibitionsJP />
            <TwoImages item1={essay25} item2={essay26} />            
        </>
    )
}

export default Part03
