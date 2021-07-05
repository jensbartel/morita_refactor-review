import { useInView } from 'react-intersection-observer';

const PullquoteJP = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    if (inView) {
        document
            .getElementById('pullquoteJP')
            .classList.add('pullquoteJP-animation');
    }

    return (
      <div className="pullquoteJP" id='pullquoteJP'> 
          <p ref={ref}>書は文字を書く</p><br />
          <p ref={ref}>ことを場として</p><br />
          <p ref={ref}>内のいのちの躍動が</p><br />
          <p ref={ref}>外におどり出て</p><br />
          <p ref={ref}>形を結んだものである</p>
      </div>
    )
};

export default PullquoteJP;