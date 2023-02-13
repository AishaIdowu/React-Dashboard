import React from "react";
import "./Homepage.css";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { Icon } from "@iconify/react";

function Homepage() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="Homepage">
      {/* sidebar */}
      <Sidebar className="Sidebar">
        <Icon
          icon="ic:round-keyboard-double-arrow-left"
          onClick={() => collapseSidebar()}
        />

        <Menu className="menu">
          <div className="super menu_item">
            <div className="author">
              <div>
                <Icon
                  icon="emojione:letter-a"
                  width="36"
                  height="36"
                  className="a_icon"
                />{" "}
              </div>
              <div>
                {" "}
                <h4>
                  Aisha Idowu <br />{" "}
                </h4>{" "}
                <span className="super_text">SUPER_AUTHOR</span>{" "}
              </div>
            </div>
          </div>
          <h5>GENERAL</h5>
          <MenuItem className="menu_item">
            <div>App</div>
          </MenuItem>
          <h5>MANAGEMENT CONSOLE</h5>
          <SubMenu></SubMenu>
          <MenuItem className="menu_item">
            {" "}
            <Icon
              icon="material-symbols:person"
              width="24"
              height="24"
              color="gray"
              className="sidebar_icon"
            />{" "}
            Author{" "}
            <Icon
              icon="material-symbols:arrow-forward-ios-rounded"
              width="14"
              height="14"
            />
          </MenuItem>
          
          <MenuItem className="menu_item">
            {" "}
            <Icon
              icon="bxs:book-heart"
              width="24"
              height="24"
              color="gray"
              className="sidebar_icon"
            />
            Content Creation{" "}
            <Icon
              icon="material-symbols:arrow-forward-ios-rounded"
              width="14"
              height="14"
            />
          </MenuItem>
          <button className="logout">Log out</button>
        </Menu>
      </Sidebar>

      <main>
        <div className="nav">
          <Icon icon="ic:twotone-search" />
          <Icon icon="emojione:letter-a" width="33" height="33" />
        </div>
        <div className="mainview">
          <h1>
            Welcome back, <br />
            Aisha Idowu! <Icon icon="twemoji:waving-hand" />
          </h1>

          <div className="box">
            <div className="total_users users_box">
              <Icon
                icon="game-icons:ringing-bell"
                width="24"
                height="24"
                className="box_icon"
              />
              <h2 className="user_num">10</h2>
              <span className="user_text">Total Users</span>
            </div>

            <div className="subscribed_users users_box">
              <Icon
                icon="ion:basket-sharp"
                width="24"
                height="24"
                className="box_icon"
              />
              <h2 className="user_num">5</h2>
              <span className="user_text">Total Subscribed Users</span>
            </div>
          </div>
        </div>
      </main>
    </div>
    // <div>Homepage</div>
  );
}

export default Homepage;
