import React from "react";

function Header() {
  return (
    <div class="header">
      <div class="left-arrow">
        <i class="fa-solid fa-chevron-left back-arrow"></i>
      </div>

      <div class="profile-img">
        <img
          src="https://s.gravatar.com/avatar/cc989c08148f52dbd0fe7f1ab830e7f4?d=mm"
          alt="profile-img"
          class="avatar"
        />
      </div>
    </div>
  );
}

export default Header;
