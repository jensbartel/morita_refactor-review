import LargeImage from '../English/layout/image/LargeImage'
import PartsJP from './textOnlyJP/PartsJP'
import SelectedExhibitionsJP from './textOnlyJP/SelectedExhibitionsJP'
import TimelineJP from './textOnlyJP/TimelineJP'
import TwoImages from '../English/layout/image/TwoImages'

import { essay21, essay25, essay26 } from '../../data/ImageConstantsEssay'
import { partsLabelJP } from '../../data/TextConstantsJP'

const Part03 = () => {
    return (
        <>
            <div id='part3' sclassName='anchordiv'></div>                        
            <PartsJP text={partsLabelJP[3]} />
            <TimelineJP />
            <LargeImage item={essay21} lang='jp' />
            <SelectedExhibitionsJP />
            <TwoImages item1={essay25} item2={essay26} />            
        </>
    )
}

export default Part03