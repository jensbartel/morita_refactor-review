import { useState } from 'react'
import { Link } from 'react-scroll'

const NavigationArrow = () => {
    const [ over, setOver ] = useState(false);

    let elementStyle;
    if(over) {
        elementStyle = { opacity: '1' }
    } else {
        elementStyle = { opacity: '0.3' }
    }

    return (
        <div className='sidemenu' style={{ ...elementStyle }} onMouseOver={() => { setOver(!over) }} onMouseOut={() => { setOver(!over) }} >
            <ul>
                <li><Link to='part1' spy={true} smooth={true}>Part I</Link></li>
                <li><Link to='part2' spy={true} smooth={true}>Part II</Link></li>
                <li><Link to='part3' spy={true} smooth={true}>Part III</Link></li>
                <li><Link to='part4' spy={true} smooth={true}>Part IV</Link></li>
            </ul>            
        </div>
    )
}

export default NavigationArrow;
