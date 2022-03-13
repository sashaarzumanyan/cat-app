import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCatPng } from '../redux/thunkMiddleware/getCatPng'
import './image.css'

const CatList = () => {
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getCatPng())
    },[])
    const {cats} =  useSelector(state => state)
  return (
    <div>
        {cats.map((e)=>
            <img className='catImg' key={e.id} src={e.url} alt={'sds'} />
        )}
    </div>
  )
}

export default CatList