import { partsLabel } from "../../../../data/TextConstants";
import Parts from "../textOnly/Parts";
import Timeline from "../textOnly/Timeline";
import chronology from '../../../../data/Chronology'

const EssayBlock7 = () => { 
    return (
        <>
            <Parts text={partsLabel[3]} />
            <Timeline title='Chronology' data={chronology}/>
        </>
    );
};


export default EssayBlock7;
