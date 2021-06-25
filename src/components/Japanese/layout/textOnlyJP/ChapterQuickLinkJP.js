import { Link } from 'react-scroll'

const ChapterQuickLinkJP = (props) => {
    const { item1, item2, item3, item1Link, item2Link, item3Link } = props

    return (
        <div className='quicklinkJP'>
            <Link to={item1Link} spy={true} smooth={true}><p className="quicklink-pJP">{item1}</p></Link>
            <Link to={item2Link} spy={true} smooth={true}><p className="quicklink-pJP">{item2}</p></Link>
            <Link to={item3Link} spy={true} smooth={true}><p className="quicklink-pJP">{item3}</p></Link>
        </div>
    );
};

export default ChapterQuickLinkJP;