import React, { Component } from "react"
import ReactHtmlParser from 'react-html-parser'
import Fade from 'react-reveal/Fade'
import Iframe from 'react-iframe'

// components
import DefaultTextBlock from './textOnly/DefaultTextBlock';
import Endnotes from "./textOnly/Endnotes";
import ExhibitionTitle from './textOnly/ExhibitionTitle';
import FullWidthImage from './image/FullWidthImage';
import LargeImage from './image/LargeImage';
import MainVisual from './image/MainVisual';
import Navigation from "./textOnly/Navigation";
import Quote from "./textOnly/Quote";
import Pullquote from './textOnly/Pullquote';
import Pullquote2 from './textOnly/Pullquote2';
import SelectedExhibitions from "./textOnly/SelectedExhibitions";
import TextLeftImageRight from './textAndImage/TextLeftImageRight';
import TextRightImageLeft from './textAndImage/TextRightImageLeft';
import TwoImages from './image/TwoImages';
import TwoImagesVariation from './image/TwoImagesVariation';

import EssayBlock1 from "./essay/EssayBlock1";
import EssayBlock2 from "./essay/EssayBlock2";
import EssayBlock3 from "./essay/EssayBlock3";
import EssayBlock4 from "./essay/EssayBlock4";
import EssayBlock5 from "./essay/EssayBlock5";
import EssayBlock6 from "./essay/EssayBlock6";
import EssayBlock7 from "./essay/EssayBlock7";

// text blocks essay etc.
import { acknowledgments, moritaEndnotes, preview, preview2, preview3, preview4, morita02a, morita03, morita04, morita05, morita06, morita07, morita08, morita09, morita09a, morita11, morita12, morita12a, morita13, morita14a, morita14b, morita14c, morita15, exhibitionInfo, workSelection4 } from '../../data/TextConstants';

// essay image-and-captions objects
import { essay1, essay10, essay2, essay3, essay4, essay5, essay6, essay7, essay8, essay9, essay11, essay13, essay14, essay17, essay18, essay19, essay20, essay21, essay22, essay23, essay24, essay25, essay26, essay27, essay28, wanobi01, wanobi02 } from "../../data/ImageConstantsEssay";
import RepresentedWorks from "./image/RepresentedWorks";


export default class Morita extends Component {

    state = {
        visible1: false,
        visible2: false,
        visible3: false
    }
        
    render() {
        
        const btnText1 = this.state.visible1 ? "Read Less..." : "Read More..."
        const btnText2 = this.state.visible2 ? "Read Less..." : "Read More..."
        const btnText3 = this.state.visible3 ? "Read Less..." : "Read More..."
        
        return (
            <div> 
                <Navigation />
                <MainVisual />

                {/* PART 1 */}
                <div id='part1' style={anchordivVertAdjust}></div>
                <ExhibitionTitle />
                <Fade bottom><DefaultTextBlock text={ReactHtmlParser (preview)} /></Fade>
                <LargeImage item={essay9} />
                <Fade bottom><DefaultTextBlock text={ReactHtmlParser (preview2)} /></Fade>
                <Fade bottom><DefaultTextBlock text={ReactHtmlParser (preview3)} /></Fade>
                <TwoImages item1={essay7} item2={essay8} />
                <Fade bottom><DefaultTextBlock text={ReactHtmlParser (preview4)} /></Fade>
                <Fade bottom><DefaultTextBlock text={ReactHtmlParser (exhibitionInfo)} /></Fade>
                <Pullquote />

                {/* PART 2 */}
                <div id='part2' style={anchordivVertAdjust}></div>
                <Fade bottom><EssayBlock6 /></Fade>
                <Fade bottom>
                    <RepresentedWorks />  
                    <div className='listcontainer'>
                        <a href="http://exh.shibunkaku.co.jp/MoritaShiryu_ListofWorks.pdf" download className='listlink'><u>Download work list</u></a>
                    </div>   
                </Fade>   
                <Fade bottom><DefaultTextBlock text={ReactHtmlParser(workSelection4)} /></Fade>


                <TwoImages item1={essay24} item2={essay23} />

                <div style={thevideo}>
                    <Iframe url="https://player.vimeo.com/video/546329551?title=0&byline=0&portrait=0" //493273103
                        width="640px"
                        height="360px"
                        frameborder="0"
                        allow="fullscreen"
                        allowfullscreen
                    />
                </div>

                {/* <FullWidthImage item={wanobi04} /> */}
                <FullWidthImage item={wanobi02} />


                {/* PART 3 */}
                <div id='part3' style={anchordivVertAdjust}></div>
                <Fade bottom><EssayBlock7 /></Fade>
                <LargeImage item={essay21} />
                <Fade bottom><SelectedExhibitions /></Fade>
                <TwoImages item1={essay25} item2={essay26} />



                {/* PART 4 */}
                {/* Chapter 1 */}
                <div id='part4' style={anchordivVertAdjust}></div>
                <Fade bottom>
                    <EssayBlock1 />
                    <EssayBlock2 />
                </Fade>
                <FullWidthImage item={wanobi01} />

                {/* Chapter 2 */}
                <Fade bottom><EssayBlock3 /></Fade>
                <LargeImage item={essay1} />

                <Fade bottom><DefaultTextBlock text={ReactHtmlParser (morita02a)} /></Fade>
                <TwoImages item1={essay2} item2={essay3} />

                
                
                { this.state.visible1 ? 
                    <>
                    <Fade><DefaultTextBlock text={ReactHtmlParser (morita03)} /></Fade>
                    <Fade><Quote text={ReactHtmlParser (morita04)} /> </Fade>
                    <TextLeftImageRight text={morita05} item={essay4} />
                    <Fade><DefaultTextBlock text={ReactHtmlParser (morita06)} /></Fade>
                    <TwoImages item1={essay5} item2={essay6} />
                    <Fade><br/><br/><DefaultTextBlock text={ReactHtmlParser (morita07)} /></Fade>
                    <Fade><br/><br/><DefaultTextBlock text={ReactHtmlParser (morita08)} /></Fade>
                    <Pullquote2 />
                    <Fade><br/><br/><DefaultTextBlock text={ReactHtmlParser (morita09)} /></Fade>
                    <TextRightImageLeft item={essay10} text={morita09a} />
                    </> : null
                }

                <Fade bottom>
                    <button 
                    className="read-more-less"
                    onClick={() => {this.setState({visible1: !this.state.visible1});}}
                    >{btnText1}</button>
                </Fade>



                {/* Chapter 3 */}
                <Fade bottom><EssayBlock4 /></Fade>
                <LargeImage item={essay11} />
                <Fade bottom><DefaultTextBlock text={ReactHtmlParser (morita11)} /></Fade>




                { this.state.visible2 ? 
                    <>
                    <LargeImage item={essay13} />
                    <Fade><DefaultTextBlock text={ReactHtmlParser (morita12)} /></Fade>
                    <TextLeftImageRight item={essay14} text={morita12a} />        
                    <Fade><DefaultTextBlock text={ReactHtmlParser (morita13)} /></Fade>
                    </> : null
                }

                <Fade bottom>
                    <button 
                    className="read-more-less"
                    onClick={() => {this.setState({visible2: !this.state.visible2});}}
                    >{btnText2}</button>
                </Fade>



                <LargeImage item={essay17} />
                <TwoImagesVariation item1={essay18} item2={essay19} />


                {/* Chapter 4 */}
                <Fade bottom><EssayBlock5 /></Fade>
                <TextRightImageLeft text={morita14a} item={essay20} />


                { this.state.visible3 ? 
                    <>
                    <Fade><DefaultTextBlock text={ReactHtmlParser (morita14b)} /></Fade>
                    <LargeImage item={essay22} />
                    <Fade><DefaultTextBlock text={ReactHtmlParser (morita14c)} /></Fade>
                    <Fade><DefaultTextBlock text={ReactHtmlParser (morita15)} /></Fade>
                    <Endnotes text={ReactHtmlParser (moritaEndnotes)} />
                    </> : null
                }

                <Fade bottom>
                    <button 
                    className="read-more-less"
                    onClick={() => {this.setState({visible3: !this.state.visible3});}}
                    >{btnText3}</button>
                </Fade>

                
                <LargeImage item={essay27} />
                <LargeImage item={essay28} />
                <DefaultTextBlock text={ReactHtmlParser(acknowledgments)} />
                <br /><br /><br /><br />   
            </div>
        );
    }
}


const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
}

const thevideo = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '4rem'
}