import { useInView } from 'react-intersection-observer';

const Pullquote = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
      });

    if (inView) {
        document.getElementById('pullquote').classList.add('pullquote-animation')
    };

    return (
        <div className="pullquote" id='pullquote'> 
            <p ref={ref}><i>Sho</i> is the site of </p><br />
            <p ref={ref}>writing characters, </p><br />
            <p ref={ref}>which manifests the </p><br />
            <p ref={ref}>dynamic movements </p><br />
            <p ref={ref}>of our inner being.</p>
        </div>
    )
};

export default Pullquote;

