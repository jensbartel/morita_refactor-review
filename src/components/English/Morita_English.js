import MainVisual from "./layout/image/MainVisual";
import Navigation from "./layout/textOnly/Navigation";
import Part01 from "./pageSections/Part01";
import Part02 from "./pageSections/Part02";
import Part03 from "./pageSections/Part03";
import Part04 from "./pageSections/Part04";

const Morita = () => {            
    return (
        <div> 
            <Navigation />
            <MainVisual />
            <div className='anchor'>
                <div id='part1'></div>
                <Part01 />
                <div id='part2'></div>
                <Part02 /> 
                <div id='part3'></div>
                <Part03 />
                <div id='part4'></div>
                <Part04 />              
            </div>
        </div>
    )
};

export default Morita;