import React from 'react'
import Styles from '../Restaurant Component/Shimmer.module.css'

function Shimmer() {
  return (
    <div className={Styles.shimmercontainer}>
        <div className={Styles.shimmercard}></div>
        <div className={Styles.shimmercard}></div>
        <div className={Styles.shimmercard}></div>

    </div>
  )
}

export default Shimmer;