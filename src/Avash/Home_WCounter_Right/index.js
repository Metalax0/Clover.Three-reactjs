const Home_WCounter_Right = () => {
    return (
        <>
            {/* Right Column Container */}
            <div className="column-right">
                <h1 className="sub-heading">
                    <span className="heading-no-color">Word Counter</span>
                    <br />
                    <span className="heading-color">AND</span>
                    <span className="heading-no-color">Coin Flip</span>
                </h1>

                <p className="title-description">
                    <br />
                    The Word Counter program takes in user's input in a text field and gives out word count, letter count and sentence count as a result.
                    The Coin Flip program, on a click of a button will give the output of either heads or tails along with their occurance frequency.
                    These programs are present in <b>Dr.Senior</b> page of the project.
                </p>
            </div>
        </>
    );
}

export default Home_WCounter_Right;