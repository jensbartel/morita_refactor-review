import html from 'react-html-parser'
import Fade from 'react-reveal'

import DefaultTextBlock from "./layout/textOnly/DefaultTextBlock"
import ExhibitionTitle from "./layout/textOnly/ExhibitionTitle"
import LargeImage from './layout/image/LargeImage'
import Pullquote from './layout/textOnly/Pullquote'
import TwoImages from './layout/image/TwoImages'

import { preview, preview2, preview4 } from "../../data/TextConstants"
import { essay7, essay8, essay9 } from '../../data/ImageConstantsEssay'


const Part01 = () => {
    return (
        <>
            <div id='part1' className='anchordiv'></div>
            <ExhibitionTitle/>
            <DefaultTextBlock text={html(preview)} fade='none'/>
            <LargeImage item={essay9} />
            <DefaultTextBlock text={html(preview2)} fade=''/>
            <Fade bottom><TwoImages item1={essay7} item2={essay8} /></Fade>
            <DefaultTextBlock text={html(preview4)} fade=''/>
            <Pullquote />
        </>
    )
};

export default Part01;
