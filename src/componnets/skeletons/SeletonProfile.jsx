import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SeletonProfile = ({theme}) => {
    const themeClass= theme || 'light'

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-profile">
            <div className="">

         <SkeletonElement type='avatar' />
            </div>
            <div className="">

         <SkeletonElement type='title' />
         <SkeletonElement type='text' />
         <SkeletonElement type='text' />
            </div>


        </div>
        <Shimmer />
    </div>
  )
}

export default SeletonProfile