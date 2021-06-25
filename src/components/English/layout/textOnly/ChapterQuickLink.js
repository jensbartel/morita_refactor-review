import { Link } from 'react-scroll'

const ChapterQuickLink = (props) => {
    const { item1, item2, item3, item1Link, item2Link, item3Link } = props;

    return (
            <div className="quicklink">
                <Link to={item1Link} spy={true} smooth={true}>
                    <p>{item1}</p></Link>
                <Link to={item2Link} spy={true} smooth={true}>
                    <p>{item2}</p></Link>
                <Link to={item3Link} spy={true} smooth={true}>
                    <p>{item3}</p></Link>
            </div>
    );
};

export default ChapterQuickLink;