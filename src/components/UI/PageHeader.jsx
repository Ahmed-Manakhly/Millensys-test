import img from "../../assets/BG-1.jpg" ;
import img__2 from '../../assets/header-bg.png'
import {Link} from 'react-router-dom' ;
function PageHeader() {
    //------------------------
    return (
        <header style={{backgroundImage: `url(${img})`}} >
            <div className="rootCon">
                <div className="container header__container">
                    <div className="header__lef">
                        <h1>Unified e-Health Platform</h1>
                        <p>Achieve Healthcare Operational Excellence with an All-in-One EHR / VNA / ERP platform</p>
                        <Link to="/" className="btn btn-primary" >Read More</Link>
                    </div>
                    <div className="header__right">
                        <div className="header__right__image">
                            <img src={img__2} alt="section image"/>
                        </div>
                    </div>
                </div>
            </div>
    </header>
    )
}

export default PageHeader
