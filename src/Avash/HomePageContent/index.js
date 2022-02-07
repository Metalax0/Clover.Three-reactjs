const HomePageContent = () => {
    return (
        <>
            <div className="parallax-1">
                <section>
                    {/* Upper Container */}
                    <div className="upper-container-landing">
                        <h1 className="title-heading">
                            <span className="heading-color">CL0</span><span className="heading-no-color">VER</span>
                        </h1>

                        <h2 className="title-sub-heading">
                            <span className="heading-no-color">TH</span><span className="heading-color">REE </span>
                        </h2>

                        <p className="title-description">
                            Three leaves of a clover, three empty canvases, three novice developers, three curious minds. Welcome to project <b> THREE. </b>
                            A project set up by three Computing students who have no clue of what they are doing, that are working together to build a 
                            <span className="text-strike"><b> simple</b></span> front end oriented website.
                        </p>
                    </div>

                    {/* Bottom Container  */}
                    <div className="lower-container-landing">
                        {/* Label for "Scroll down" */}
                        <label>
                            Scroll Down
                        </label>
                    </div>
                </section>
            </div>
        </>
    );
}

export default HomePageContent;