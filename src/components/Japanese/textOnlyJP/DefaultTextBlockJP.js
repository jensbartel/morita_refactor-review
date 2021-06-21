import '../stylesJapanese.css'
import '../stylesJapanesePhone.css'
import '../stylesJapaneseTablet.css'

const DefaultTextBlockJP = (props) => {
      
    let textValue = props.text;
    return (
        <div className="defaultstyleJP">
            {textValue}<br /><br />
        </div>
    );
};

export default DefaultTextBlockJP;
