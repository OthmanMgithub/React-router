import Navbar from './Navbar'


const AboutUs = () => {
    return <div>
        <Navbar />
        <section className="d-flex flex-column justify-content-center align-items-center chooseSection">
            <h1 className="mb-5" data-aos="fade-up">Why Choose Us</h1>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="900" data-aos-delay="100">
                        <img src="Group.png" alt="" className="mb-2"/>
                        <h4 className="mb-3">Learn from anywhere</h4>
                        <p className="text-muted">Ecolabs’s online learning platform empowers you to learn new skills and accomplish real growth.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                        <img src="Layer 2.png" alt="" className="mb-2"/>
                        <h4 className="mb-3">Courses taught by real experts</h4>
                        <p className="text-muted">Our teachers are experts excited to share their wisdom, experience, & trusted tools with you.</p>
                    </div>
                    <div className="col-lg-4 col-sm-12" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="350">
                        <img src="Skills.png" alt="" className="mb-2"/>
                        <h4 className="mb-3">Learn in-demand skills</h4>
                        <p className="text-muted">Explore demanded skills, deepen existing passions, and get lost in creativity.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
};

export default AboutUs ;