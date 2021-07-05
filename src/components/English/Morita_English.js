import MainVisual from "./layout/image/MainVisual";
import Navigation from "./layout/textOnly/Navigation";
import Part01 from "./Part01";
import Part02 from "./Part02";
import Part03 from "./Part03";
import Part04 from "./Part04";

const Morita = () => {            
    return (
        <div> 
            <Navigation />
            <MainVisual />
            <Part01 />
            <Part02 /> 
            <Part03 />
            <Part04 />              
        </div>
    )
};

export default Morita;