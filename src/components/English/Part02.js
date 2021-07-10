import html from 'react-html-parser'
import Iframe from 'react-iframe'
import Fade from 'react-reveal'

import DefaultTextBlock from './layout/textOnly/DefaultTextBlock';
import FullWidthImage from './layout/image/FullWidthImage'
import Parts from './layout/textOnly/Parts';
import RepresentedWorks from './layout/image/RepresentedWorks'
import TextLeftImageRight from './layout/textAndImage/TextLeftImageRight';
import TwoImages from './layout/image/TwoImages'

import { essay15, essay23, essay24, wanobi02 } from '../../data/ImageConstantsEssay'
import { partsLabel, workSelection2, workSelection3, workSelection4 } from '../../data/TextConstants'

const Part02 = () => {
    return (
        <>
            <div id='part2' className='anchordiv'></div>
            <Fade bottom>
                <>
                            <Parts text={partsLabel[2]} />
                            <DefaultTextBlock text={html(workSelection2)} fade='none'/>
                </>
            </Fade>

            <Fade>          <TextLeftImageRight text={workSelection3} item={essay15} />         </Fade>
            <Fade bottom>   <RepresentedWorks />                                                </Fade>

                            <div className='listcontainer'>
                                <a href="http://exh.shibunkaku.co.jp/MoritaShiryu_ListofWorks.pdf" download ><u>Download work list</u></a>
                            </div>

                            <DefaultTextBlock item={html(workSelection4)} />
            <Fade bottom>   <TwoImages item1={essay24} item2={essay23} />                       </Fade>

                            <div className='theVideo'>
                                <Iframe url="https://player.vimeo.com/video/546329551?title=0&byline=0&portrait=0"
                                    width="640px"
                                    height="360px"
                                    frameborder="0"
                                    allow="fullscreen"
                                    allowfullscreen
                                />
                            </div>

                            <FullWidthImage item={wanobi02} />
        </>
    )
};

export default Part02