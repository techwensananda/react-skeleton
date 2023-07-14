import React, { useEffect, useState } from 'react'
import SkeletonArticle from './skeletons/SkeletonArticle'

const Articles = () => { 
  const[articles,setarticles]=useState(null)
  useEffect(()=>{
    setTimeout(async()=>{
  const res=  await fetch(`https://jsonplaceholder.typicode.com/posts`)
const data = await res.json();
setarticles(data)
    },6000)
  },[])
  return (
    <div className='articles'>
        <h2>Articles</h2>
       

        {articles && (
          articles.map(article =>(
            <div className="profile" key={article.id}>
            <h3 className="">{article.title}</h3>
            <p className="">{article.body}</p>
       

          </div>
          ))
       
        )}
        {!articles && 
       [...Array(5)].map(n=>( <SkeletonArticle key={n+1} />)) 
        }
    </div>
  )
}

export default Articles