import '../../styles/stylesEnglish.css';
import '../../styles/stylesEnglishPhone.css';
import '../../styles/stylesEnglishTablet.css';

const Quote = (props) => {

    let textValue = props.text;
    return (
        <div className='quoteStyle'>
            {textValue}
            <br /> 
            <br />
        </div>
    );
};

export default Quote;