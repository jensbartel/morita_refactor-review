import React from "react"
import { Link } from 'react-scroll'

export default function ChapterQuickLinkJP(props) {
    const item1 = props.item1;
    const item2 = props.item2;
    const item3 = props.item3;

    return (
        <div className='quicklinkJP'>
            <Link to={props.item1Link} spy={true} smooth={true}><p className="quicklink-pJP">{item1}</p></Link>
            <Link to={props.item2Link} spy={true} smooth={true}><p className="quicklink-pJP">{item2}</p></Link>
            <Link to={props.item3Link} spy={true} smooth={true}><p className="quicklink-pJP">{item3}</p></Link>
        </div>
    );
}