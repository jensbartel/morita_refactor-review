import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser'; 

import { preview } from "../../data/TextConstants";
import DefaultTextBlock from "./textOnlyComponents/DefaultTextBlock";
import ExhibitionTitle from './textOnlyComponents/ExhibitionTitle';
import MainVisual from "./imageComponents/MainVisual";


class Preview extends Component {
    render() {
    return (
        <>
            <MainVisual />
            <ExhibitionTitle />
            <DefaultTextBlock text={ReactHtmlParser (preview)} />
        </>
    );
    }
}

export default Preview;
