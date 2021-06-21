import ReactHtmlParser from 'react-html-parser'
import '../stylesJapanese.css'
import '../stylesJapanesePhone.css'
import '../stylesJapaneseTablet.css'

const PartsJP = (props) => {
    return (
        <p className="parts-headerJP">{ReactHtmlParser(props.text)}</p>
    )    
};

export default PartsJP;
