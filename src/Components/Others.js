import Navbar from "./Navbar";

const Others = () => {
    return<div>
        <Navbar />
        <div className="container footerSection d-flex flex-column justify-content-center" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="row firstChild">
                <h1 className="mb-5" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="900">Get the best sent to your <br/> <span className="h1Span">inbox, every month</span></h1>
            </div>
            <div className="row secondChild">
                <form action="">
                    <input type="text" placeholder="olivia@untitledui.com" id="input" data-aos="fade-right" data-aos-delay="900" data-aos-duration="900"/>
                    <button type="submit" className="btn subscribeBtn" id="sButton" data-aos="fade-left" data-aos-delay="900" data-aos-duration="900"><span className="subscribeSpan subscribeBtn">Subscribe</span></button>
                </form>
            </div>
            <div className="blueDiv" data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000"></div>
            <div className="yellowDiv" data-aos="fade-down-right" data-aos-duration="600" data-aos-delay="1100"></div>
            <div className="whiteDiv" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600"></div>
        </div>
    </div>
};

export default Others ;