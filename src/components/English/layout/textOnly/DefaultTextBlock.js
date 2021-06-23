import '../../styles/stylesEnglish.css';
import '../../styles/stylesEnglishPhone.css';
import '../../styles/stylesEnglishTablet.css';

const DefaultTextBlock = (props) => {
    let text = props.text;

    return (
        <div className="defaultstyle">
            {text}<br /><br />
        </div>
    );
};

export default DefaultTextBlock;