import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/LandingPage'
import { Navbar, BigSidebar, SmallSidebar } from '../../components'
const SharedLayout = () => {
    return (
        <Wrapper>
            <main style={{"display": "flex"}} className='dashboard'>
                <div>
                    <SmallSidebar />
                    <BigSidebar />
                </div>
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    )
}

export default SharedLayout