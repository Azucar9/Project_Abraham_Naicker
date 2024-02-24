import React, { useState } from 'react';
import Bell from "../utils/images/Bell_Icon.png";
import Number from "../utils/images/Number.png";
import Profile from "../utils/images/Profiles.png";
import Logo from "../utils/images/CoderFlix.png";

const Header = () => {
  const toggleDropDown = () => {
    const dropDown = document.getElementById("drop-down-content");
    dropDown.classList.toggle("hidden");
  }
  return (
    <header className="bg-black">
      <nav className="flex justify-between items-center h-16">
        <div className="left_container flex items-center ml-8">
          <h1 className="text-red-500 text-2xl font-semibold font-sans mr-5">CODERFLIX</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Tv Shows</a></li>
            <li><a href="#" className="text-white">Movies</a></li>
            <li><a href="#" className="text-white">New & Popular</a></li>
            <li><a href="#" className="text-white">My List</a></li>
            <li><a href="#" className="text-white">Browse by Language</a></li>
          </ul>
        </div>
        <div className="right_container flex items-center space-x-6 mr-8">
          <div className="search flex items-center border-white border">
            <label htmlFor="search-box" className="p-2">
              <svg class="search-icon w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"/>
              </svg>
            </label>
            <input type="text" placeholder="Titles, people, genres" id="search-box" className="bg-black text-white p-2"/>
          </div>
          <p className="text-white">Children</p>
          <div className="icons flex space-x-6">
            <div className="notif-icon relative flex items-center">
              <img src={Bell} alt="Bell Icon" />
              <div className="notif-count absolute -top-1 -right-2">
                <img src={Number} alt="Number" />
              </div>
            </div>
            <div className="drop-down relative flex items-center" >
              <div className="profile-img">
                <img src={Profile} alt="Profile" />
              </div>
              <button className="drop-down-btn text-white" onClick={toggleDropDown}>&#9662;</button>
              <div id="drop-down-content" className="hidden absolute bg-opacity-90 bg-black min-w-40 shadow-md z-10 transform origin-top top-10 -right-4 border-gray-700 rounded">
                <a href="#" className="block px-4 py-2 text-white">Profile</a>
                <a href="#" className="block px-4 py-2 text-white">Settings</a>
                <a href="#" className="block px-4 py-2 text-white">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;