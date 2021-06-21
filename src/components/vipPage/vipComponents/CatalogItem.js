import React, { Component } from "react";

class CatalogItem extends Component {

    
    render() {
        const work = this.props.image;

        return (
            <div style={container}>
                <div style={imagecontainer}>
                    <img src={work.img} style={imagestyle} alt=''/>
                </div>
                <div style={captioncontainer}>
                    <h2>{work.title}</h2><br />
                    <p>{work.description}</p>
                    <p>{work.label}</p>
                    <p>{work.dimensions}</p>
                    <p>{work.date}</p>
                </div>
                <div style={buttoncontainer}>
                    <button style={buttonstyle}>Inquire</button>
                </div>
            </div>
        );
    }
}

export default CatalogItem;


const container = {
    display: 'flex',
    padding: '0 2.5%',
    marginBottom: '20px',
    fontFamily: 'Quicksand, sans-serif',
    letterSpacing: '0'
}

const imagecontainer = {
    width: '30%',
    textAlign: 'center'
}

const imagestyle = {
    width: '60%',
    padding: '16px 0'
}

const captioncontainer = {
    alignItems: 'center',
    width: '40%',
    padding: '16px',
    fontSize: '13px'
}

const buttoncontainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#B9906E',
    width: '30%'
}

const buttonstyle = {
    border: 'none',
    padding: '8px 40px',
    borderRadius: '4px',
    fontFamily: 'Cormorant, serif',
    fontSize: '30px',
    cursor: 'pointer'
}