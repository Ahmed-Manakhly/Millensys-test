/* eslint-disable react/prop-types */
import classes from './MainNav.module.scss' ;
import {useState , useRef ,useEffect} from 'react' ;
import img from "../../assets/millensys-logo2019_200-cmyk.png" ;
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom' ;
import { TbSelect } from "react-icons/tb";
//--------------------/update
const MainNav = ({scroll})=>{
    const [openMenu, setOpenMenu] = useState(false) ;
    const [openSelectMenu, setOpenSelectMenu] = useState(false) ;
    const [openSelectMenu2, setOpenSelectMenu2] = useState(false) ;
    const [openSelectMenu3, setOpenSelectMenu3] = useState(false) ;
    //----------------
    const refMenu = useRef();
    const refMenu_ = useRef();
    const refMenu__ = useRef();
    useEffect(()=>{
        let handler = (e)=>{
            if(!refMenu.current.contains(e.target)){
                setOpenSelectMenu(false);
            }
        }
        document.addEventListener('mousedown' , handler);
        return ()=>{
            document.removeEventListener('mousedown' , handler);
        }
    })
    //-------------------------
    useEffect(()=>{
        let handler = (e)=>{
            if(!refMenu_.current.contains(e.target)){
                setOpenSelectMenu2(false);
            }
        }
        document.addEventListener('mousedown' , handler);
        return ()=>{
            document.removeEventListener('mousedown' , handler);
        }
    })
    //-------------------------
    useEffect(()=>{
        let handler = (e)=>{
            if(!refMenu__.current.contains(e.target)){
                setOpenSelectMenu3(false);
            }
        }
        document.addEventListener('mousedown' , handler);
        return ()=>{
            document.removeEventListener('mousedown' , handler);
        }
    })
    //-------------------------
    const openHandler = ()=>{setOpenMenu(true)} ;
    const closeHandler = ()=>{setOpenMenu(false)} ;
    const toggleSelectedMenu =()=> {
        setOpenSelectMenu(prev =>!prev)
    }
    const toggleSelectedMenu2 =()=> {
        setOpenSelectMenu2(prev =>!prev)
    }
    const toggleSelectedMenu3 =()=> {
        setOpenSelectMenu3(prev =>!prev)
    }
    return (
        <nav className={`${scroll && classes['window-scroll']} ${openMenu ? classes.openMenu : classes.closeMenu}`}>
            <ul className={classes["nav__container__1"]}>
            <Link to="/" className={classes['logo_1']} >
                    <img src={img} alt="MILLENSYS Logo - 200px - Unified Healthcare Management Software Platform"/>
                </Link>
                <li><Link to='/'><FaHome /></Link></li>
                <li><Link to="">EN</Link></li>
                <li><Link to="">AR</Link></li>
                <li className={classes["contact__us"]} ><Link to="">Contact Us</Link></li>
            </ul>
            <div className={`${classes["nav__container"]} container`}>
                <ul className={classes["nav__menu"]}>
                    <li onClick={toggleSelectedMenu} ref={refMenu}className={`${classes.openSelectMenu}`}><Link to="">Products<span><TbSelect /></span></Link>
                        {openSelectMenu && <ul>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                        </ul>}
                    </li>
                    <li onClick={toggleSelectedMenu2} ref={refMenu_}className={`${classes.openSelectMenu}`}><Link to="/">Support<span><TbSelect /></span></Link>
                    {openSelectMenu2 && <ul>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                        </ul>}
                    </li>
                    <li className={`${classes.openSelectMenu}`} ><Link to="/purchase">Purchase</Link></li>
                    <li onClick={toggleSelectedMenu3} ref={refMenu__}className={`${classes.openSelectMenu}`}><Link to="/">Media<span><TbSelect /></span></Link>
                    {openSelectMenu3 && <ul>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                            <li className={classes.nested} ><Link className={classes.item} >1-one</Link></li>
                        </ul>}
                    </li>
                </ul>
                <div className={`${classes.search}`}>
                    <span>
                        <FaSearch />
                    </span>
                    <input type="search" placeholder={'Search'} />
                </div>
                <button className={classes["open__menu__btn"]} onClick={openHandler}><i className="uil uil-bars"></i></button>
                <button className={classes["close__menu__btn"]}onClick={closeHandler}><i className="uil uil-multiply"></i></button>
            </div>
        </nav>
    )
} ;
export default MainNav