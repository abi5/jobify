import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
  <Wrapper>
<nav>  <img src={logo} alt='jobify'
    className='logo' />
    
</nav>
<div className="container page">
  {/* info */}
<div className="info">
    <h1>
        job <span>tracking</span> app
    </h1>
    <p>
        Hi Everyone Hello jasdjkbasjkdbashsjbashdbajkcas
        jasdjkbasjkdbashsjbashdbajkcasajsdnja
        asndjbashd
    </p>
    <Link to='/register' className='btn btn-hero'>Login/Register </Link>
</div>
<img src={main} alt='job hunt' className='img main-img' />
</div>
  </Wrapper>
  )
}


export default Landing