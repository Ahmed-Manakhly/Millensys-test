/* eslint-disable react/prop-types */
import {menus} from './SliderData' ;
import {Link} from 'react-router-dom';

const Card = ({title , overview, description , secImg})=>{
    return(
    <article className="category">
    <div className="box">
        <div className="face front">
            <span className="category__icon"><img src={secImg} alt="section image" /></span>
            <h5>{title}</h5>
            <p>{overview}</p>
        </div>
        <div className="face back">
            <p>{description}</p>
        </div>
    </div>
</article>
    )
}

function About() {
  return (<>
    <section className="categories">
        <div className="container categories___container">
            <div className="categories___left">
                <h1>About Us</h1>
                <p>
                    {`"MILLENSYS is a pioneering leader in healthcare software and IT solutions, dedicated to delivering innovative solutions that empower 
                    healthcare service providers to optimize their daily operations swiftly, securely, and efficiently. Our mission is to enable operational 
                    excellence, enhance patient and stakeholder satisfaction,
                    elevate service quality, and drive profitability within the healthcare industry.`}
                </p>
                <Link to="#" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="categories___right">
                {/*here*/}
                {menus.map((ele,i)=>{return((<Card  key={i} title={ele.slideTitle} secImg={ele.secImg} overview={ele.slideTitle} description={ele.slideDescription}/>))})}
            </div>
        </div>
    </section>
    </>
  )
}

export default About
