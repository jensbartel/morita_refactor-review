import { Component } from 'react'
import { Link } from 'react-scroll'
import '../../styles/stylesEnglish.css';
import '../../styles/stylesEnglishPhone.css';
// import '../../styles/stylesEnglishTablet.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             over: false
        }
    }
    
    mouseEvent() {
        this.setState({over: !this.state.over})
    }

    render() {

        let elementStyle;
        if (this.state.over) {
            elementStyle = {
                opacity: '1'
            }
        } else {
            elementStyle = {
                opacity: '0.3'
            }
        }

        return (
            <div className='sidemenuContainer' style={{...elementStyle}} onMouseOver={() => {this.mouseEvent()}} onMouseOut={() => {this.mouseEvent()}} >
                <ul className='sidemenuUL'>
                    <li className='sidemenuLI'><Link to="part1" spy={true} smooth={true}>Part I</Link></li>
                    <li className='sidemenuLI'><Link to="part2" spy={true} smooth={true}>Part II</Link></li>
                    <li className='sidemenuLI'><Link to="part3" spy={true} smooth={true}>Part III</Link></li>
                    <li className='sidemenuLI'><Link to="part4" spy={true} smooth={true}>Part IV</Link></li>        
                </ul>
            </div>
        )
    }
}