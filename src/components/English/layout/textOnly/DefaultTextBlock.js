import Fade from 'react-reveal'

const DefaultTextBlock = (props) => {
    let { text, fade } = props;

    return (    
        <>
            {fade === 'none' && <div className='defaultstyle'>{text}</div>}
            {fade === 'bottom' && <Fade bottom><div className='defaultstyle'>{text}</div></Fade>}
            {(fade !== 'none' && fade !== 'bottom') && <Fade><div className='defaultstyle'>{text}</div></Fade>}
        </>
    )
};

export default DefaultTextBlock;
