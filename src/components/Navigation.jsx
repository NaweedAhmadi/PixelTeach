import React from "react";

function Navigation() {
  return (
    <div class="nav">
      <div>
        <img class="course-image" src="images/intro.jpg" alt="" />
      </div>

      <div class="course-progress">
        <p><b>Introduction To Google Apps Script</b></p>
        <div class="progress-bar">
          <div class="progress-percentage"></div>
        </div>
        <p><b>33% <span style={{fontSize: "14px"}}>COMPLETE</span></b></p>
      </div>

      <hr class="nav-hr" />

      <div class="nav-items">
        <div class="curriculum">
          <p><b><i class="fa-solid fa-list" style={{width: "25px"}}></i>Course Curriculum</b></p>
        </div>

        <div class="instructor">
          <p><i class="fa-solid fa-user" style={{width: "25px"}}></i>Your Instructor</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;