import '../stylesEnglish.css';
import '../stylesEnglishPhone.css';
import '../stylesEnglishTablet.css';

const DefaultTextBlock = (props) => {
        
    let textValue = props.text;
    return (
        <div className="defaultstyle">
            {textValue}<br /><br />
        </div>
    );
};

export default DefaultTextBlock;