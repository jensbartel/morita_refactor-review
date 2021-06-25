import html from 'react-html-parser'

import DefaultTextBlockJP from "./textOnlyJP/DefaultTextBlockJP"
import ExhibitionTitleJP from "./textOnlyJP/ExhibitionTitleJP"
import LargeImage from "../English/layout/image/LargeImage"
import TwoImages from "../English/layout/image/TwoImages"

import { essay7, essay8, essay9 } from "../../data/ImageConstantsEssay"
import { exhibitionInfoJP, previewJP, previewJP3, previewJP4 } from "../../data/TextConstantsJP"

const Part01 = () => {
    return (
        <>
            <div id='part1' className='anchordiv'></div>
            <ExhibitionTitleJP />
            <DefaultTextBlockJP text={html(previewJP)} />
            <LargeImage item={essay9} lang="jp"/>
            <DefaultTextBlockJP text={html(previewJP3)} />
            <TwoImages item1={essay7} item2={essay8} lang="jp" />
            <DefaultTextBlockJP text={html(previewJP4)} />
            <DefaultTextBlockJP text={html(exhibitionInfoJP)} />
            {/* <Pullquote /> */}
        </>
    )
}

export default Part01
