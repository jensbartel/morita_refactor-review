import ReactHtmlParser from 'react-html-parser'
import { essayQuickLink, morita14, sectionLabel } from "../../../data/TextConstants";
import ChapterQuickLink from "../textOnly/ChapterQuickLink";
import DefaultTextBlock from "../textOnly/DefaultTextBlock";
import SectionHeader from '../textOnly/SectionHeader';


const EssayBlock5 = () => {
    return (
        <>
            <div id='quicklink4' style={anchordivVertAdjust}></div>
            <SectionHeader text={sectionLabel[4]} />
            <ChapterQuickLink 
                item1={essayQuickLink[1].text} 
                item2={essayQuickLink[2].text} 
                item3={essayQuickLink[3].text} 
                item1Link={essayQuickLink[1].quickLink} 
                item2Link={essayQuickLink[2].quickLink} 
                item3Link={essayQuickLink[3].quickLink} />
            <DefaultTextBlock text={ReactHtmlParser (morita14)} />
        </>
    );
};

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
};

export default EssayBlock5;