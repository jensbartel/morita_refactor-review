import { Component } from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import Fade from 'react-reveal/Fade'

import DefaultTextBlockJP from './textOnlyJP/DefaultTextBlockJP';
import EndnotesJP from './textOnlyJP/EndnotesJP';
import ExhibitionTitleJP from './textOnlyJP/ExhibitionTitleJP';
import SelectedExhibitionsJP from './textOnlyJP/SelectedExhibitionsJP';
import TextLeftImageRightJP from './textAndImageJP/TextLeftImageRightJP';
import TextRightImageLeftJP from './textAndImageJP/TextRightImageLeftJP';

import FullWidthImage from '../English/image/FullWidthImage';
import LargeImage from '../English/image/LargeImage';
import MainVisual from '../English/image/MainVisual';
import Navigation from '../English/textOnly/Navigation';
import TwoImages from '../English/image/TwoImages';
import TwoImagesVariation from '../English/image/TwoImagesVariation';
import RepresentedWorks from '../English/image/RepresentedWorks';

import EssayBlock1JP from "./essayJP/EssayBlock1JP";
import EssayBlock2JP from "./essayJP/EssayBlock2JP";
import EssayBlock3JP from "./essayJP/EssayBlock3JP";
import EssayBlock4JP from "./essayJP/EssayBlock4JP";
import EssayBlock5JP from "./essayJP/EssayBlock5JP";
import EssayBlock6JP from "./essayJP/EssayBlock6JP";
import EssayBlock7JP from "./essayJP/EssayBlock7JP";

// data
import { morita02aJP, morita03JP, morita04JP, morita05JP, morita06JP, morita07JP, morita08JP, morita09JP, morita09aJP, morita11JP, morita12JP, morita12aJP, morita13JP, morita14aJP, morita14cJP, morita15JP, previewJP, previewJP3, previewJP4, morita14bJP, exhibitionInfoJP, acknowledgmentsJP, workSelectionJP4 } from '../../data/TextConstantsJP';

// essay image-and-captions objects
import { essay1, essay5, essay6, essay9, essay10, essay11, essay13, essay14, essay17, essay18, essay19, essay2, essay20, essay21, essay22, essay23, essay24, essay25, essay26, essay27, essay28, essay3, essay4, essay7, essay8, wanobi01, wanobi02 } from '../../data/ImageConstantsEssay';

import { moritaEndnotesJP } from '../../data/TextConstantsJP';
 

export default class MoritaJP extends Component {
 
    state = {
        visible1: false,
        visible2: false,
        visible3: false
    }

    render() {
                
        const btnText1 = this.state.visible1 ? "折りたたむ" : "続きを読む"
        const btnText2 = this.state.visible2 ? "折りたたむ" : "続きを読む"
        const btnText3 = this.state.visible3 ? "折りたたむ" : "続きを読む"

        return (
            <div>
                <Navigation />
                <MainVisual />

                {/* PART 1 */}
                <div id='part1' style={anchordivVertAdjust}></div> 
                <ExhibitionTitleJP />
                <Fade bottom><DefaultTextBlockJP text={ReactHtmlParser (previewJP)} /></Fade>
                <LargeImage item={essay9} lang="jp"/>
                <Fade bottom><DefaultTextBlockJP text={ReactHtmlParser (previewJP3)} /></Fade>
                <TwoImages item1={essay7} item2={essay8} lang="jp" />
                <Fade bottom><DefaultTextBlockJP text={ReactHtmlParser (previewJP4)} /></Fade>
                <Fade bottom><DefaultTextBlockJP text={ReactHtmlParser (exhibitionInfoJP)} /></Fade>

                {/* <Pullquote /> */}

                {/* PART 2 */}
                <div id='part2' style={anchordivVertAdjust}></div>
                <Fade bottom><EssayBlock6JP /></Fade>
                <Fade bottom>
                    <RepresentedWorks lang='jp'/>
                    <div className='listcontainerJP' >
                        <a href="http://exh.shibunkaku.co.jp/MoritaShiryu_作品リスト.pdf" download className='listlinkJP'><u>作品リストをダウンロード</u></a>
                    </div>
                </Fade>

                <Fade bottom><DefaultTextBlockJP text={ReactHtmlParser(workSelectionJP4)} /></Fade>

                <TwoImages item1={essay24} item2={essay23} lang='jp'/>

                <div className="video-responsive">
                    <iframe className="iframe" src="https://player.vimeo.com/video/546329551?title=0&byline=0&portrait=0"
                        width="640"
                        height="360"
                        frameBorder="0"
                        allow="fullscreen"
                        title="Morita Shiryu"
                    />
                </div>
                
                <div className="video-responsive2">
                <FullWidthImage item={wanobi02} lang='jp'/>

                {/* PART 3 */}
                <div id='part3' style={anchordivVertAdjust}></div>
                <Fade bottom><EssayBlock7JP /></Fade>
                <LargeImage item={essay21} lang='jp'/>
                <Fade bottom><SelectedExhibitionsJP /></Fade>
                <TwoImages item1={essay25} item2={essay26} lang='jp'/>




                {/* PART 4 */}
                {/* Chapter 1 */}
                <div id='part4' style={anchordivVertAdjust}></div>
                <Fade bottom >
                    <EssayBlock1JP />
                    <EssayBlock2JP />
                </Fade>
                <FullWidthImage item={wanobi01} lang='jp'/>

                {/* Chapter 2 */}
                <Fade bottom><EssayBlock3JP /></Fade>
                <LargeImage item={essay1} lang='jp'/>

                <Fade bottom><DefaultTextBlockJP text={ReactHtmlParser (morita02aJP)} /></Fade>
                <TwoImages item1={essay2} item2={essay3} lang='jp'/>




                { this.state.visible1 ? 
                    <>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita03JP)} /></Fade>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita04JP)} /></Fade>
                    <TextLeftImageRightJP text={morita05JP} item={essay4} lang='jp'/>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita06JP)} /></Fade>
                    <TwoImages item1={essay5} item2={essay6} lang='jp'/>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita07JP)} /></Fade>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita08JP)} /></Fade>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita09JP)} /></Fade>
                    <TextRightImageLeftJP item={essay10} text={morita09aJP} />
                    </> : null
                }

                <Fade bottom>
                    <button             
                    className="read-more-or-lessJP"
                    onClick={() => {this.setState({visible1: !this.state.visible1});}}
                    >{btnText1}</button>
                </Fade>


                {/* Chapter 3 */}
                <Fade bottom><EssayBlock4JP /></Fade>
                <LargeImage item={essay11} lang='jp'/>
                <Fade bottom><DefaultTextBlockJP text={ReactHtmlParser (morita11JP)} /></Fade>



                { this.state.visible2 ? 
                    <>
                    <LargeImage item={essay13} lang='jp'/>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita12JP)} /></Fade>
                    <TextLeftImageRightJP item={essay14} text={morita12aJP} lang='jp'/>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita13JP)} /></Fade>
                    </> : null
                }

                <Fade bottom>
                    <button 
                    className="read-more-or-lessJP"
                    onClick={() => {this.setState({visible2: !this.state.visible2});}}
                    >{btnText2}</button>
                </Fade>

                <LargeImage item={essay17} lang='jp'/>
                {/* <TwoImages item1={essay18} item2={essay19} lang='jp'/> */}
                <TwoImagesVariation item1={essay18} item2={essay19} lang='jp'/>


                {/* Chapter 4 */}
                <Fade bottom><EssayBlock5JP /></Fade>
                <TextRightImageLeftJP text={morita14aJP} item={essay20} />

                { this.state.visible3 ? 
                    <>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita14bJP)} /></Fade>
                    <LargeImage item={essay22} lang='jp'/>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita14cJP)} /></Fade>
                    <Fade><DefaultTextBlockJP text={ReactHtmlParser (morita15JP)} /></Fade>
                    <EndnotesJP text={ReactHtmlParser (moritaEndnotesJP)} />
                    </> : null
                }

                <Fade bottom>
                    <button 
                    className="read-more-or-lessJP"
                    onClick={() => {this.setState({visible3: !this.state.visible3});}}
                    >{btnText3}</button>
                </Fade>


                <LargeImage item={essay27} lang='jp'/>
                <LargeImage item={essay28} lang='jp'/>
                <DefaultTextBlockJP text={ReactHtmlParser(acknowledgmentsJP)} />  
                </div>
            </div>
        )
    }
}

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
}