import Fade from 'react-reveal'

const DefaultTextBlock = (props) => {
    let { text, fade, lessMaBo } = props;

    let defaultStyle = 'defaultstyle'
    if (lessMaBo) {
        defaultStyle += ' lessMaBo'
    }

    return (    
        <>
            {fade === 'none' && <div className={defaultStyle}>{text}</div>}
            {fade === 'bottom' && <Fade bottom><div className={defaultStyle}>{text}</div></Fade>}
            {(fade !== 'none' && fade !== 'bottom') && <Fade><div className={defaultStyle}>{text}</div></Fade>}
        </>
    )
};

export default DefaultTextBlock;
