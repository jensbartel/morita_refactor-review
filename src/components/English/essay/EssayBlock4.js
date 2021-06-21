import ReactHtmlParser from 'react-html-parser'
import { essayQuickLink, morita10, sectionLabel } from "../../../data/TextConstants";
import ChapterQuickLink from "../textOnly/ChapterQuickLink";
import DefaultTextBlock from "../textOnly/DefaultTextBlock";
import SectionHeader from '../textOnly/SectionHeader';


const EssayBlock4 = () => {
    return (
        <>
            <div id='quicklink3' style={anchordivVertAdjust}></div>
            <SectionHeader text={sectionLabel[3]} />
            <ChapterQuickLink 
                item1={essayQuickLink[1].text} 
                item2={essayQuickLink[2].text} 
                item3={essayQuickLink[4].text} 
                item1Link={essayQuickLink[1].quickLink} 
                item2Link={essayQuickLink[2].quickLink} 
                item3Link={essayQuickLink[4].quickLink} />
            <DefaultTextBlock text={ReactHtmlParser (morita10)} />
        </>
    );
};

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
};

export default EssayBlock4;