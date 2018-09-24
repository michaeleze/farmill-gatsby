import React from 'react'
import './footer.scss'
import { Icon } from 'react-icons-kit'
import {instagram} from 'react-icons-kit/fa/instagram'
import {facebookF} from 'react-icons-kit/fa/facebookF'
import {twitter} from 'react-icons-kit/fa/twitter'

const Footer = () =>

<div className='footer'>
    <div>
      <ul>
          <li><a> <div style={{ color: 'white' }}> <Icon size={32} icon={instagram}/></div></a></li>
          <li><a>   <div style={{ color: '#fff' }}><Icon size={32} icon={facebookF}/></div></a></li>
          <li><a>   <div style={{ color: '#fff' }}><Icon size={32} icon={twitter}/></div></a></li>
      </ul>
</div>

<div className='copyright'>{new Date().getFullYear()} Farmill Ltd </div>
      
      </div>

export default Footer