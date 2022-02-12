import React, { useState } from 'react'

function Page({data}) {
    const[show,setShow]= useState(false)
    const loadMore=()=>{
        setShow(true)
    }
  return (
    <div>
         {show? <div className="imgDiv">
            {data.map((e) => (                  
              <img className="catImg" key={e.id} src={e.url} alt={e.title} />                  
              ))}
          </div>:null }         
        <button onClick={loadMore} >Load More</button>
    </div>
  )
}

export default Page