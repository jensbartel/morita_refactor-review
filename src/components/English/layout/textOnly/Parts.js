import html from 'react-html-parser'

const Parts = (props) => {
    return (
        <p className="parts-header">{html(props.text)}</p>
    )    
};

export default Parts;