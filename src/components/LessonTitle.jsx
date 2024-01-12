import React, {useState} from "react";

function LessonTitle(props) {
    const hasDuration = props.duration !== undefined && props.duration !== null && props.duration !== '';

    const [isLessonDone, setIsLessonDone] = useState(false);
    const [startBtnText, setStartBtnText] = useState("Start");
    const [lessonRowColor, setLessonRowColor] = useState("tr-lesson");
    const [statusBox, setStatusBox] = useState("fa-regular fa-circle");
    const [buttonVisibility, setButtonVisibility] = useState(true);

    function clickHandler() {
        if (isLessonDone) {
            // Toggle back to initial state
            setIsLessonDone(false);
            setButtonVisibility(false);
            setLessonRowColor("tr-lesson");
            setStatusBox("fa-solid fa-circle-check");
        } else {
            // Toggle to "Done" state
            setIsLessonDone(true);
            setStartBtnText("Done");
            setLessonRowColor("tr-lesson-checked");
            setStatusBox("fa-solid fa-circle-half-stroke");
        }
    }

    return (
        <tr className={lessonRowColor}>
            <td className="td-check">
                <i className={statusBox}></i>
            </td>
            <td className="td-lesson">
                <i className={hasDuration ? "fa-brands fa-youtube" : "fa-solid fa-align-justify"} style={{ width: "30px", fontSize: "20px", verticalAlign: "middle" }}></i>
                {props.lesson} {hasDuration ? `(${props.duration})` : null}
            </td>
            <td onClick={clickHandler} className="td-start">
                {buttonVisibility ? <p className="start-btn">{startBtnText}</p> : null }
            </td>
        </tr>
    );
}

export default LessonTitle;