import React from "react";

function LessonTitle(props) {
    const duration = props.duration === '';

    // function clickHandler() {
    //     return (
    //         props.lesson;
    //     )
    // }

    return (
        <tr class="tr-lesson">
            <td class="td-check">
                <i class="fa-regular fa-circle"></i>
            </td>
            <td class="td-lesson">
                <i class={duration ? "fa-solid fa-align-justify" : "fa-brands fa-youtube"} style={{ width: "30px", fontSize: "20px", verticalAlign: "middle" }}></i>
                {props.lesson} {duration ? null : "(" + props.duration + ")"}
            </td>
            <td onClick class="td-start"><p class="start-btn">Start</p></td>
        </tr>
    )
}

export default LessonTitle;