import Navbar from './Navbar';



const Home = () => {
    

    return <div>
            <Navbar />
            <div className="container" >
                <div className="row d-flex">
                    <div className="col-md-6 col-sm-12 d-flex column align-items-center">
                        <div>
                            <h1 className="firstText" data-aos="flip-up" data-aos-duration="900" data-aos-delay="400">Explore Live <br/>Creative Classes</h1>
                            <p className="text-muted  firstPara" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Choose from over 2,000+ courses on topics like user interface design, graphic design, front-end development, and much more...</p>
                            <div>
                                <button type="button" className="btn  getstarted" data-aos="fade-up-right" data-aos-duration="900" data-aos-delay="700">Get Started</button>
                                <button type="button" className="btn  learnmore" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="750">Learn More</button>
                            </div>
                            <div className="yellowShape"></div>
                        </div>
                    </div>
                
                    <div className="col-md-6 col-sm-12 photcont">
                        <div className="photo">
                            <img src="image10.png" alt="" data-aos="flip-left" data-aos-duration="1200" data-aos-delay="100"/>
                        </div>
                        <div className="blue"></div>
                    </div>
                </div>
            </div>
        </div>
    
};

export default Home ;