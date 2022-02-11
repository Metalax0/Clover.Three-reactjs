import "../index.css";

const DrSeniorWCounterLeft = () => {
    return (
        <>
            {/* Left Container: Description about the project  */}
            <div className="flex-item-left">
                <h1 className="title-heading">
                    Word <span className="heading-color">AND</span> Letter Counter
                </h1>
                <p className="title-heading-description">
                    The Word Counter is a program that counts the total number of letters, words and sentences in a segment. The program takes the user input from the text area and gives out word count, letter count and sentence count as a result. The number of the letters and word will increase and decrease as the user types or deletes in the field. The user can also copy and paste text from some other source into the text area.<br />
                    <span className="heading-color">- Dr. Senior</span>
                </p>
            </div>
        </>
    );
}

export default DrSeniorWCounterLeft;