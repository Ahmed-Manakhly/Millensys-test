import {Outlet } from 'react-router-dom' ;
import MainNav from '../components/UI/MainNav.jsx' ;
import Footer from '../components/UI/Footer.jsx' ;
import {useState} from 'react' ;
// import img from '../assets/bg-texture-3.png' ;
// import img from '../assets/bg-texture-2.png' ;


const RootLayout = () => {
    const [scroll,setScroll]=useState(false)
    const scrollHandler =()=>{
        window.scrollY > 90 ? setScroll(true):setScroll(false) ;
    }
    window.addEventListener('scroll', scrollHandler)
    //----------------------------------------
    return (
        // <div style={{backgroundImage: `url(${img})`}} className='page'>
        <div > 
            <MainNav scroll={scroll} />
                <main className='content'>
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    )
} ;
export default RootLayout ;