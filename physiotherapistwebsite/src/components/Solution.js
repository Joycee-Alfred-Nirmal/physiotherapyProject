import React from 'react';
import './solution.css';


import aiTrackImage from '../images/aitrack.webp';
import plan2Image from '../images/plan2.webp';
import plan4Image from '../images/plan4.webp';
import plan5Image from '../images/plan5.webp';

export default function Solution() {
  return (
    <div className='solutionOuter'>
      <div className='solutionInner'>
         <div className='headContainer'>
            <h1>Our Solutions</h1>
         </div>
         <div className='solutionContainer1'>
             <div className='solutionInner1'>
                <h1>AI Powered Scanning</h1>
                <p>Let science first understand the strength, <br/> weaknesses, and alignment issues in the body</p>
             </div>
             <div className='solutionInner2'>
                <img src={aiTrackImage} alt="AI Powered Scanning" /> 
             </div>
         </div>
         <div className='solutionContainer1'>
             <div className='solutionInner4'>
                <img src={plan2Image} alt="Plan 2" /> 
             </div>
             <div className='solutionInner3'>
                <h1>1-On-1 Sessions with a <br/> Physiotherapist</h1>
                <p>Scanning results from the technology are analyzed <br/> deeply by the Physiotherapist to further understand <br/> the body better</p>
             </div>
         </div>
         <div className='solutionContainer1'>
             <div className='solutionInner5'>
                <h1>A Detailed Assessment Report</h1>
                <p>Data from technology and Physiotherapist are <br/> combined to build a customized plan for recovery</p>
             </div>
             <div className='solutionInner6'>
                <img src={plan4Image} alt="Plan 4" /> 
             </div>
         </div>
         <div className='solutionContainer1'>
             <div className='solutionInner8'>
                <img src={plan5Image} alt="Plan 5" />
             </div>
             <div className='solutionInner7'>
                <h1>Starting the Program and <br/> Constant Progress Monitoring</h1>
                <p>Start sessions in expert care and constant <br/> monitoring of progress to help you reach a pain-free <br/> life forever</p>
             </div>
         </div>
      </div>
    </div>
  );
}
