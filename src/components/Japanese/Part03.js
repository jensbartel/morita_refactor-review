import Fade from 'react-reveal';

import LargeImage from '../English/layout/image/LargeImage';
import PartsJP from './layout/textOnlyJP/PartsJP';
import TimelineJP from './layout/textOnlyJP/TimelineJP';
import TwoImages from '../English/layout/image/TwoImages';

import chronologyJP from '../../data/ChronologyJP';
import exhibitionHistoryJP from '../../data/ExhibitionHistoryJP';
import { essay21, essay25, essay26 } from '../../data/ImageConstantsEssay';
import { partsLabelJP } from '../../data/TextConstantsJP';

const Part03 = () => {
    return (
        <>
            <div id='part3' className='anchordiv'></div>

            <Fade bottom>
                <>
                    <PartsJP text={partsLabelJP[3]} />
                    <TimelineJP title='年譜' data={chronologyJP} />
                </>
            </Fade>

            <LargeImage item={essay21} lang='jp' />

            <Fade>
                <TimelineJP title='展覧会歴' data={exhibitionHistoryJP} />
            </Fade>

            <Fade bottom>
                <TwoImages item1={essay25} item2={essay26} />
            </Fade>
        </>
    );
};

export default Part03;
