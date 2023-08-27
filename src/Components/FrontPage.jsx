import React from 'react'
import { imagearr } from './Imagearray'
const FrontPage = () => {
  return (
    <div className='frontpage'>
      <div className='frontpagecont'>
            <div className='inputfield'>
                <h1>Search System</h1>
                <div className='container'>
                    <input placeholder='Type here...' value=""></input>
                    <div className='searchbtn'>
                        <img className="search" src='/Images/search (1).png'></img>
                    </div>
                    
                </div>
            </div>
            <div className='topsearch'>
                {imagearr.map((data,id)=>{
                    return(
                        <img src={data.image}></img>
                    )
                })}
            </div>
      </div>
    </div>
  )
}

export default FrontPage
