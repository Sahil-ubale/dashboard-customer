import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        {/* <div className="logo">
          <span className="material-icons-outlined">storefront</span>
        </div>
        <h1 className="logo-text">MUNCHO</h1> */}
        <img src="src/assets/Union.png" alt="" />
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <span className="material-icons-outlined">menu_book</span>
            <span>Menu</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">trending_up</span>
            <span>Upselling</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">view_carousel</span>
            <span>Banners</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">palette</span>
            <span>Appearance</span>
          </li>
          <li className="nav-item active">
            <span className="material-icons-outlined">people</span>
            <span>Customers</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">rate_review</span>
            <span>Reviews</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">person_outline</span>
            <span>Staff</span>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item">
          <span className="material-icons-outlined">settings</span>
          <span>Settings</span>
        </div>
        <div className="nav-item">
          <span className="material-icons-outlined">logout</span>
          <span>Log out</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;