import html from 'react-html-parser'

import DefaultTextBlock from "./layout/textOnly/DefaultTextBlock"
import ExhibitionTitle from "./layout/textOnly/ExhibitionTitle"
import LargeImage from './layout/image/LargeImage'
import Pullquote from './layout/textOnly/Pullquote'
import TwoImages from './layout/image/TwoImages'

import { exhibitionInfo, preview, preview2, preview3, preview4 } from "../../data/TextConstants"
import { essay7, essay8, essay9 } from '../../data/ImageConstantsEssay'


const Part01 = () => {
    return (
        <>
            <div id='part1' className='anchordiv'></div>
            <ExhibitionTitle/>
            <DefaultTextBlock text={html(preview)} />
            <LargeImage item={essay9} />
            <DefaultTextBlock text={html(preview2)} />
            <DefaultTextBlock text={html(preview3)} />
            <TwoImages item1={essay7} item2={essay8} />
            <DefaultTextBlock text={html(preview4)} />
            <DefaultTextBlock text={html(exhibitionInfo)} />
            <Pullquote />
        </>
    )
};

export default Part01;
