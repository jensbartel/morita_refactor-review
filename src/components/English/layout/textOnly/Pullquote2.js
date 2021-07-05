import { useInView } from 'react-intersection-observer';

const Pullquote2 = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
      });

    if (inView) {
        document.getElementById('pullquote2').classList.add('pullquote-animation')
    };

    return (
        <div className="pullquote2" id='pullquote2'>
            <p ref={ref}>I realized that if I become</p><br />
            <p ref={ref}>one with the brush, I will</p><br />
            <p ref={ref}>achieve a more wholesome</p><br />
            <p ref={ref}>version of myself.</p><br/><br/><br/>            
        </div>
    )
};

export default Pullquote2;