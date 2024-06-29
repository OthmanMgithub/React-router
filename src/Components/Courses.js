import Navbar from './Navbar'


const Courses =() => {
    return <div>
        <Navbar />
        <section className="categories d-flex flex-column align-items-center justify-content-center">
            <h1 data-aos="fade-down" data-aos-duration="1200">Courses Categories</h1>
            <p className="text-muted mb-5" data-aos="fade-up" data-aos-duration="1200">Provide most popular courses that your want to join and lets start the course for the most simply way in here</p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        <div className="mb-3 border">
                            <img src="Design.png" alt=""/>
                        </div>
                        <h6>Design</h6>
                        <p className="text-muted fSize">course:18</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                        <div className="mb-3 border">
                            <img src="Development.png" alt=""/>
                        </div>
                        <h6>Development</h6>
                        <p className="text-muted fSize">Course:18</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="mb-3 border">
                            <img src="Marketing.png" alt=""/>
                        </div>
                        <h6>Marketing</h6>
                        <p className="text-muted fSize">Course:18</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        <div className="mb-3 border">
                            <img src="Personal Development.png" alt=""/>
                        </div>
                        <h6>Personal Development</h6>
                        <p className="text-muted fSize">Course:18</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
};

export default Courses;