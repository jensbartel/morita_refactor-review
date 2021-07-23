import Fade from 'react-reveal'

const DefaultTextBlockJP = (props) => {
    let { text, fade ,lessMaBo } = props;

    let defaultStyleJP = 'defaultstyleJP';
    if (lessMaBo) {
        defaultStyleJP += ' lessMaBo';
    }

    return (
        <>
            {fade === 'none' && <div className={defaultStyleJP}>{text}</div>}
            {fade === 'bottom' && <Fade bottom><div className={defaultStyleJP}>{text}</div></Fade>}
            {(fade !== 'none' && fade !== 'bottom') && <Fade><div className={defaultStyleJP}>{text}</div></Fade>}
        </>
    );
};

export default DefaultTextBlockJP;
