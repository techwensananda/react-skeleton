import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonProductCard = ({theme}) => {
    const themeClass= theme || 'light'

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>

<div className="product-card">
<SkeletonElement type='thumbnail' />
         
          <div className="product-details">
            <h3 className="product-title"> <SkeletonElement type='text' /></h3>
            <p className="product-price"> <SkeletonElement type='text' /> </p>
            <div className="product-rating">
            <SkeletonElement type='text' />
            </div>
            <div className="product-actions grid_skeleton">
            <SkeletonElement type='text' />
            <SkeletonElement type='text' />
            </div>
          </div>
        </div>
     
        <Shimmer />
    </div>
  )
}

export default SkeletonProductCard