import ReactHtmlParser from 'react-html-parser'

const Parts = (props) => {
    return (
        <p className="parts-header">{ReactHtmlParser(props.text)}</p>
    )    
};

export default Parts;