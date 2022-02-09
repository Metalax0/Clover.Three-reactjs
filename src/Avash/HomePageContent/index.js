const HomePageContent = () => {
  return (
    <div className="Main-Container">
      <section>
        {/* Upper Container */}
        <div className="Home-MainContent-Upper">
          <h1 className="main-title">
            <span className="text-color">CL0</span>
            <span className="text-no-color">VER</span>
          </h1>

          <h2 className="main-sub-title">
            <span className="text-no-color">TH</span>
            <span className="text-color">REE </span>
          </h2>

          <p className="description">
            Three leaves of a clover, three empty canvases, three novice
            developers, three curious minds. Welcome to project <b> THREE. </b>A
            project set up by three Computing students who have no clue of what
            they are doing, that are working together to build a
            <span className="text-strike">
              <b> simple</b>
            </span>{" "}
            front end oriented website.
          </p>
        </div>

        {/* Bottom Container  */}
        <div className="Home-MainContent-Lower">
          {/* Label for "Scroll down" */}
          <label className = "label-ScrollDown">Scroll Down</label>
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;
