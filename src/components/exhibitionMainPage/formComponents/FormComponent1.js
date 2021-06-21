import React from 'react'

export default function FormComponent1() {
    return (
        <>
            <div style={container}>
                <div style={inner}>
                    <div style={innerinner}>
                        <span style={labelstyle}>Stay up to date</span>
                        <input style={inputstyle} placeholder='Email' id='input'></input>
                    </div>
                    <button style={btn}>Submit</button>
                </div>
                <p style={explanation}>Sign up to our email list for exhibition updates, gallery news and other Shibunkaku related information. <br/>By clicking submit you agree to our <u>Terms and Conditions</u> and <u>Privacy Policy</u>.</p>

                {/* <div className="container">
                    <div style={{ marginTop: "4rem" }} className="row">
                        <div className="col s8 offset-s2">
                            <form noValidate>
                                <div className="input-field col s12">
                                    <input />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    margin: '0 20vw'
}

const inner = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

const innerinner = {
    display: 'flex'
}

const explanation = {
    textAlign: 'left',
    color: 'grey',
    paddingTop: '35px',
    fontSize: '0.7rem',
    lineHeight: '1.5',
    letterSpacing: '0',
    fontFamily: 'Quicksand, sans-serif'
}

const labelstyle = {
    fontFamily: 'Cormorant, serif',
    fontSize: '2.8rem',
    letterSpacing: '0',
    marginRight: '2rem'
}

const inputstyle = {
    width: '25vw',
    border: 'none',
    color: 'darkgray',
    fontSize: '1.5rem',
    top: '6px',
    borderBottom: '1px solid black'
}

const btn = {
    width: '140px',
    background: 'none',
    border: 'none',
    fontSize: '18px'
}

