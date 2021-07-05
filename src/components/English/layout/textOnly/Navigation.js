import { useState } from 'react'
import { Link } from 'react-scroll'

const Navigation = () => {
    const [ over, setOver ] = useState(false);

    let elementStyle;
    if(over) {
        elementStyle = { opacity: '1' }
    } else {
        elementStyle = { opacity: '0.3' }
    }

    window.addEventListener('scroll', function(event) {
        var scroll = this.scrollY;
        if (scroll>450) {
            this.document.getElementById('sidemenu').classList.remove('sidemenu-hidden');
        } else {
            this.document.getElementById('sidemenu').classList.add('sidemenu-hidden');
        }
    })

    return (
        <div className='sidemenu-container sidemenu-hidden' id='sidemenu'>
            <div className='sidemenu' style={{ ...elementStyle }} onMouseOver={() => { setOver(!over) }} onMouseOut={() => { setOver(!over) }} >
                <ul>
                    <li><Link to='part1' spy={true} smooth={true}>Part I</Link></li>
                    <li><Link to='part2' spy={true} smooth={true}>Part II</Link></li>
                    <li><Link to='part3' spy={true} smooth={true}>Part III</Link></li>
                    <li><Link to='part4' spy={true} smooth={true}>Part IV</Link></li>
                </ul>            
            </div>
        </div>
    )
}

export default Navigation;
