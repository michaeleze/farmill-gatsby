import React from 'react'
import Link from 'gatsby-link'

const HomeStyles = {
    home:{
      display:"flex",
      width:"100%",
      height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    homeImg:{
        width:"100%",
        height:"100%"
    },
    imgCover:{
        minWidth:"33.33%",
        height:"50%",
    }
}

const IndexPage = () => (
  <div Id='home'>
    <div className={HomeStyles.home}>
        <div className={HomeStyles.imgCover}>
        <img src='/static/image/alicia_vikander_lara_croft_tomb_raider_4k-wide.jpg' className={HomeStyles.homeImg}/>
        </div>
    </div>
  </div>
)

export default IndexPage
