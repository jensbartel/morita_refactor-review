import { Component } from 'react'
import { Link } from 'react-scroll'

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
            <div className='sidemenu' style={{...elementStyle}} onMouseOver={() => {this.mouseEvent()}} onMouseOut={() => {this.mouseEvent()}} >
                <ul>
                    <li><Link to="part1" spy={true} smooth={true}>Part I</Link></li>
                    <li><Link to="part2" spy={true} smooth={true}>Part II</Link></li>
                    <li><Link to="part3" spy={true} smooth={true}>Part III</Link></li>
                    <li><Link to="part4" spy={true} smooth={true}>Part IV</Link></li>        
                </ul>
            </div>
        )
    }
}