import '../../styles/nav.scss';
import Link from 'next/link';
import React,{Component} from 'react';

class Nav extends Component{
 constructor(props){
        super(props)
        this.state = {
            open:false,
            hamburger:"&#9776;",
            navbarWhite:'',
        }
    }

    componentDidMount (){
      window.addEventListener('scroll',()=>{
          window.scrollY > 0  && this.setState({navbarWhite:'white'});
          window.scrollY === 0  && this.setState({navbarWhite:''});
      })

    }


    openNav(e){
       this.setState({open:!this.state.open});
    }
    render(){
        const {open,hamburger,navbarWhite} = this.state;
    return(
    
<div className= 'fm-navbar-menu'>
         <div className={open ? 'bg-white' : ''}>
    <div className={`fm-navbar-body ${navbarWhite}`}>
    <div className='logo'>
        <div className={open ? 'txt-black' : ''}>FARMILL</div>
         <div className='nav-lg'>    
        <div>
      <Link href='/'>
      <a><span> Home</span></a>
      </Link>
      <Link href='/products'>
      <a> <span>Products</span></a>
      </Link>
      <Link href='/about'>
      <a><span> About</span></a>
      </Link>
      <Link href='/contact'>
      <a><span> Contact</span></a>
      </Link>
        </div>
      </div>
        </div>

    <div className='fm-navbar-nav'>
        <div className='bt-menu' onClick={this.openNav.bind(this)}>&#9776;
        </div>
  { open && 
      <div>
      <div className='nav'>    
      <Link href='/'>
      <a><span> Home</span></a>
      </Link>
      <Link href='/products'>
      <a> <span>Products</span></a>
      </Link>
      <Link href='/about'>
      <a><span> About</span></a>
      </Link>
      <Link href='/contact'>
      <a><span> Contact</span></a>
      </Link>
      </div>
   <div className='fm-navbar-social'>
                <ul>
      <li><a><b>Instagram</b></a></li>
      <li><a><b>Facebook</b></a></li>
      <li><a><b>Twitter</b></a></li>
      </ul>
</div>
   </div>
  }
          </div>
</div>

</div>    
    </div>
    )
    
    
}

}

export default Nav