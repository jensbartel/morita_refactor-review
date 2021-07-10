import Fade from 'react-reveal'

import LargeImage from './layout/image/LargeImage'
import Parts from './layout/textOnly/Parts'
import TwoImages from './layout/image/TwoImages'
import Timeline from './layout/textOnly/Timeline'

import exhibitionHistory from '../../data/ExhibitionHistory'
import chronology from '../../data/Chronology'
import { partsLabel } from '../../data/TextConstants'
import { essay21, essay25, essay26 } from '../../data/ImageConstantsEssay'

const Part03 = () => {
    return (
        <>
            <div id='part3' className='anchordiv'></div>

            <Fade bottom>
                <>
                            <Parts text={partsLabel[3]} />
                            <Timeline title='Chronology' data={chronology} />
                </>
            </Fade>

                            <LargeImage item={essay21} />
            <Fade>          <Timeline title='Selected Exhibitions' data={exhibitionHistory} />  </Fade>
            <Fade bottom>   <TwoImages item1={essay25} item2={essay26} />                       </Fade>
        </>
    )
}

export default Part03
