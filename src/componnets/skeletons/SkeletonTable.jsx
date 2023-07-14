import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonTable = ({theme}) => {
    const themeClass= theme || 'light'

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-table">
       
         <SkeletonElement type='title' >
         <SkeletonElement type='text' />
            </SkeletonElement>
         <SkeletonElement type='title' >
         <SkeletonElement type='text' />
            </SkeletonElement>
     
         <SkeletonElement type='title' >
         <SkeletonElement type='text' />
            </SkeletonElement>
    
        </div>
        <Shimmer />
    </div>
  )
}

export default SkeletonTable