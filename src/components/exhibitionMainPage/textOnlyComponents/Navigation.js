import React, { Component } from 'react'
import { Link } from 'react-scroll'
import '../mainPageStyles.css'
import '../mainPageStylesPhone.css'


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

        let otherStyle;
        if (this.state.over) {
            otherStyle = {
                opacity: '1'
            }
        } else {
            otherStyle = {
                opacity: '0.3'
            }
        }

        return (
            <div className='sidemenuContainer' style={{...otherStyle}} onMouseOver={() => {this.mouseEvent()}} onMouseOut={() => {this.mouseEvent()}} >
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