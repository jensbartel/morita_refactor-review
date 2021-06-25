import html from 'react-html-parser'

import thumb1 from '../../../../assets/thumbs/Miraiken1949_thumb.jpg'
import thumb2 from '../../../../assets/thumbs/So1954_thumb.jpg'
import thumb3 from '../../../../assets/thumbs/Usobuku1963_thumb.jpg'
import thumb4 from '../../../../assets/thumbs/KanzanScreen1969_thumb.jpg'
import thumb5 from '../../../../assets/thumbs/En1969_thumb.jpg'
import thumb6 from '../../../../assets/thumbs/Asa1970_thumb.jpg'

import { repTextENG, repTextENG_mobile } from '../../../../data/TextConstants'
import { repTextJP, repTextJP_mobile } from '../../../../data/TextConstantsJP'

const RepresentedWorks= (props) => {

    var langStyle, langStyleMobile, captionText, captionTextMobile;
    if (props.lang) {
        langStyle = 'rep-defaultstyleJP';
        captionText = repTextJP;
        langStyleMobile = 'rep-defaultstyleJP_mobile';
        captionTextMobile = repTextJP_mobile;
    } else {
        langStyle = 'rep-defaultstyle';
        captionText = repTextENG;
        langStyleMobile = 'rep-defaultstyle';
        captionTextMobile = repTextENG_mobile;
    }

    return (
        <div className='rep-container'>
            <div>
                <img src={thumb1} alt=''/>
                <img src={thumb2} alt=''/>
                <img src={thumb3} alt=''/>
            </div>
            <div>
                <img src={thumb4} alt=''/>
                <img src={thumb5} alt=''/>
                <img src={thumb6} alt=''/>
            </div>
            <div>
                <p className={langStyle}>{html(captionText)}</p>
                <p className={langStyleMobile}>{html(captionTextMobile)}</p>
            </div>
        </div>
    )
};

export default RepresentedWorks;