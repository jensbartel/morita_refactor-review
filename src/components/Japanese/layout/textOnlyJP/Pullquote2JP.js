import { useInView } from 'react-intersection-observer';

const Pullquote2JP = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    if (inView) {
        document
            .getElementById('pullquoteJP2')
            .classList.add('pullquoteJP-animation');
    }

    return (
      <div className="pullquoteJP2" id='pullquoteJP2'> 
          <p ref={ref}>帰一の場では、</p><br />
          <p ref={ref}>私も筆も、</p><br />
          <p ref={ref}>私・筆を超えて、</p><br />
          <p ref={ref}>私が筆であり</p><br />
          <p ref={ref}>筆が私である。</p>
      </div>
    )
}

export default Pullquote2JP