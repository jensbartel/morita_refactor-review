import html from 'react-html-parser'

const PartsJP = (props) => {
    return (
        <p className="parts-headerJP">{html(props.text)}</p>
    )    
};

export default PartsJP;
