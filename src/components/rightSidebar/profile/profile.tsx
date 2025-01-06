import { useState } from "react";
import { UilUsersAlt, UilSignOutAlt,UilUserCircle } from "@iconscout/react-unicons";
import './profile.css'

interface ProfileProps {
    username?: string;  // Optional string
}

const Profile = ({ username }: ProfileProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option: "Profile" | "Settings" | "Log Out") => {
    console.log(`${option} clicked`);
    setShowDropdown(false); // Close dropdown after an option is selected
  };
  
  return (
    <div className="Profile">
      {username ? (
        <div className="ProfileWithUsername">
          <div className="UsernameSection" onClick={toggleDropdown}>
            <UilUserCircle />
            <span className="Username">{username}</span>
          </div>
          {showDropdown && (
            <div className="Dropdown">
              <div onClick={() => handleOptionClick("Profile")}>Profile</div>
              <div onClick={() => handleOptionClick("Settings")}>Settings</div>
              <div onClick={() => handleOptionClick("Log Out")}>Log Out</div>
            </div>
          )}
        </div>
      ) : (
        <div className="AuthButtons">
          <button className="SignInButton">
            <UilUsersAlt />
            Sign In
          </button>
          <div className="AuthButtons">
          <button className="SignUpButton">
            <UilSignOutAlt />
            Sign Up
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
