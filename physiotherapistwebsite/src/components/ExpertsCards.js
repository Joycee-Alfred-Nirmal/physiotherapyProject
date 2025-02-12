import React from 'react'

export default function ExpertsCards(props) {
    const{image,drname,designation,degree,experience,pain1,pain2,pain3}=props;
  return (
      <div className='cardOutercontainer'>
                 <div className='cardContainer'>
                    <img className='nikilImage' src={image}/>
                     <h1 className='drname'>{drname}</h1>
                     <h1 className='designation'>{designation}</h1>
                     <p>{degree}</p>
                     <p>{experience}</p>
                     <div>
                        <div className='drbtnmain'>
                        <button className='drbtn'>{pain1}</button>
                        <button className='drbtn hip'>{pain2}</button>
                        </div>
                        <div className='drbtnmain'>
                            <button className='drbtn'> {pain3}</button>
                        </div>
                        <div className='knowMorebtnMain'>
                            <button className='knowMorebtn'>Know More</button>
                        </div>
                     </div>
                 </div>
                </div>

  )
}
