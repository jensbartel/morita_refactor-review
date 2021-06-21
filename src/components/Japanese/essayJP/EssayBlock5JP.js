import ReactHtmlParser from 'react-html-parser'
import { essayQuickLinkJP, morita14JP, sectionLabelJP } from "../../../data/TextConstantsJP";
import ChapterQuickLinkJP from "../textOnlyJP/ChapterQuickLinkJP";
import DefaultTextBlockJP from "../textOnlyJP/DefaultTextBlockJP";
import SectionHeaderJP from "../textOnlyJP/SectionHeaderJP";


const EssayBlock5JP = () => {
    return (
        <>
            <div id='quicklink4' style={anchordivVertAdjust}></div>
            <SectionHeaderJP text={sectionLabelJP[4]} />
            <ChapterQuickLinkJP 
                item1={essayQuickLinkJP[1].text} 
                item2={essayQuickLinkJP[2].text} 
                item3={essayQuickLinkJP[3].text} 
                item1Link={essayQuickLinkJP[1].quickLink} 
                item2Link={essayQuickLinkJP[2].quickLink} 
                item3Link={essayQuickLinkJP[3].quickLink} />
            <DefaultTextBlockJP text={ReactHtmlParser (morita14JP)} />
        </>
    );
}

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
}

export default EssayBlock5JP;