/* eslint-disable react/prop-types */
import {menus} from './SliderData' ;
import {Link} from 'react-router-dom';

const Card = ({title , overview , secImg}) =>{
    return (
        <article className="course">
        <div className="course__img">
            <img src={secImg} alt="section image" />
        </div>
        <div className="course__info">
        <h4>{title}</h4>
            <p>{overview}</p>
            <Link to="#" className="btn btn-primary">Learn More</Link>
        </div>
    </article>
    )
}

function Service() {
    return (
        <section className="courses">
            <h2>Our Popular services</h2>
            <div className="container courses__container">
                {menus.map((ele,i)=>{return((<Card  key={i} title={ele.slideTitle} secImg={ele.secImg} overview={ele.slideTitle}/>))})}
            </div>
        </section>
    )
}

export default Service
