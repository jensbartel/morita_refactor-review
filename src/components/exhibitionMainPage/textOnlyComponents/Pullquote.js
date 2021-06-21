import React from 'react'
import Fade from 'react-reveal/Fade'
import Reveal from 'react-reveal/Reveal';


export default function Pullquote() {
    return (
        // <div className="pullquote">
        //     <Fade bottom>
        //         <span><i>Sho</i> is the site of</span><br />
        //         <span>writing characters,</span><br />
        //         <span>which manifests the</span><br />
        //         <span>dynamic movements</span><br />
        //         <span>of our inner being.</span><br/><br/>
        //     </Fade>
        // </div>
        <div className="pullquote">
            
            <Reveal effect="fadeInUp"><span><i>Sho</i> is the site of</span><br /></Reveal>
            <Reveal effect="fadeInUp"><span>writing characters,</span><br /></Reveal>
            <Reveal effect="fadeInUp"><span>which manifests the</span><br /></Reveal>
            <Reveal effect="fadeInUp"><span>dynamic movements</span><br /></Reveal>
            <Reveal effect="fadeInUp"><span>of our inner being.</span><br/><br/></Reveal>
            
        </div>
    )
}

