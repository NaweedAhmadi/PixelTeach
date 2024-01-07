import React from "react";
import LessonTitle from "./LessonTitle";
import courseStructure from "../Topics";

function Main() {
    return (
        <div class="course-layout">
            <div>
                <p style={{fontSize: "25px", fontWeight: "bold"}}>Course Curriculum</p>
            </div>

            <div class="next-lecture">
                <div class="next-lecture-btn">
                    <p>Start next lecture<i class="fa-solid fa-chevron-right" style={{ paddingLeft: "9px", verticalAlign: "middle" }}></i></p>
                </div>
            </div>

            {courseStructure.map((chapter) => (
                <div class="chapter">
                    <p class="chapter-title"><b>{chapter.chapterTitle}</b></p>
                    <div class="lesson">
                        <table class="table-content">
                            {chapter.lessons.map((lesson) => (
                                <LessonTitle lesson={lesson.lessonTitle} duration={lesson.duration} status={lesson.status} type={lesson.type} />
                            ))}
                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Main;