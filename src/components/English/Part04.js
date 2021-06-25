import { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'

import DefaultTextBlock from './layout/textOnly/DefaultTextBlock'
import DefaultTextBlock2 from './layout/textOnly/DefaultTextBlock2'
import Endnotes from './layout/textOnly/Endnotes'
import LargeImage from './layout/image/LargeImage'
import Quote from './layout/textOnly/Quote'
import Pullquote2 from './layout/textOnly/Pullquote2'
import TextLeftImageRight from './layout/textAndImage/TextLeftImageRight'
import TextRightImageLeft from './layout/textAndImage/TextRightImageLeft'
import TwoImages from './layout/image/TwoImages'
import TwoImagesVariation from './layout/image/TwoImagesVariation'

import EssayBlock3 from './layout/essay/EssayBlock3'
import EssayBlock4 from './layout/essay/EssayBlock4'
import EssayBlock5 from './layout/essay/EssayBlock5'

import { acknowledgments, morita02a, morita03, morita04, morita05, morita06, morita07, morita08, morita09, morita09a, morita11, morita12, morita12a, morita13, morita14a, morita14b, morita14c, morita15, moritaEndnotes } from '../../data/TextConstants'
import { essay1, essay10, essay11, essay13, essay14, essay17, essay18, essay19, essay2, essay20, essay22, essay27, essay28, essay3, essay4, essay5, essay6, wanobi01 } from '../../data/ImageConstantsEssay'
import Chapter01 from './part04Sections/Chapter01'


export class Part04 extends Component {
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
            <>
                {/* Chapter 1 */}                
                <Chapter01 />


                {/* Chapter 2 */}
                <EssayBlock3 />
                <LargeImage item={essay1} />
                <DefaultTextBlock text={ReactHtmlParser(morita02a)} />
                <TwoImages item1={essay2} item2={essay3} />

                {/* Read more section of Chapter 2 */}
                { this.state.visible1 ?
                    <>
                    <DefaultTextBlock2 text={ReactHtmlParser(morita03)} />
                    <Quote text={ReactHtmlParser(morita04)} />
                    <TextLeftImageRight text={morita05} item={essay4} />
                    <DefaultTextBlock2 text={ReactHtmlParser(morita06)} />
                    <TwoImages item1={essay5} item2={essay6} />
                    <br/><br/><DefaultTextBlock2 text={ReactHtmlParser(morita07)} />
                    <br/><br/><DefaultTextBlock2 text={ReactHtmlParser(morita08)} />
                    <Pullquote2 />
                    <br/><br/><DefaultTextBlock2 text={ReactHtmlParser(morita09)} />
                    <TextRightImageLeft text={morita09a} item={essay10} />
                    </> : null
                }

                <button 
                    className="read-more-less"
                    onClick={() => {this.setState({visible1: !this.state.visible1});}}
                >{btnText1}
                </button>
                

                {/* Chapter 3 */}
                <EssayBlock4 />
                <LargeImage item={essay11} />
                <DefaultTextBlock text={ReactHtmlParser(morita11)} />

                {/* Read more section of Chapter 3 */}
                { this.state.visible2 ? 
                    <>
                    <LargeImage item={essay13} />
                    <DefaultTextBlock2 text={ReactHtmlParser (morita12)} />
                    <TextLeftImageRight item={essay14} text={morita12a} />        
                    <DefaultTextBlock2 text={ReactHtmlParser (morita13)} />
                    </> : null
                }
                               
                <button 
                    className="read-more-less"
                    onClick={() => {this.setState({visible2: !this.state.visible2});}}
                >{btnText2}
                </button>
                
                <LargeImage item={essay17} />
                <TwoImagesVariation item1={essay18} item2={essay19} />


                {/* Chapter 4 */}
                <EssayBlock5 />
                <TextRightImageLeft text={morita14a} item={essay20} />

                {/* Read more section of Chapter 4 */}
                { this.state.visible3 ? 
                    <>
                        <DefaultTextBlock2 text={ReactHtmlParser (morita14b)} />
                        <LargeImage item={essay22} />
                        <DefaultTextBlock2 text={ReactHtmlParser (morita14c)} />
                        <DefaultTextBlock2 text={ReactHtmlParser (morita15)} />
                        <Endnotes text={ReactHtmlParser (moritaEndnotes)} />
                    </> : null
                }
            
                <button 
                    className="read-more-less"
                    onClick={() => {this.setState({visible3: !this.state.visible3});}}
                >{btnText3}
                </button>
                

                {/* 'Closing' images and acknowledgments */}
                <LargeImage item={essay27} />
                <LargeImage item={essay28} />
                <DefaultTextBlock text={ReactHtmlParser(acknowledgments)} />
                <br /><br /><br /><br /> 
            </>
        )
    }
}

export default Part04;
