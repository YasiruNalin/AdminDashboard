import React, { useState } from "react";
import "./Organization.css";

const Organization = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [organizationData, setOrganizationData] = useState({
    name: "Zasti",
    address: "20116 Ashbrook Pl Ste 130, Ashburn VA 20147",
    email: "krish@zasti.ai",
    website: "https://zasti.ai",
  });

  const [logo, setLogo] = useState<string | null>("/src/assets/logo.png");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setOrganizationData({
        name: "Zasti",
        address: "20116 Ashbrook Pl Ste 130, Ashburn VA 20147",
        email: "krish@zasti.ai",
        website: "https://zasti.ai",
      })
      setLogo("/src/assets/logo.png")
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setOrganizationData({ ...organizationData, [name]: value });
    
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div className="Organization">
      <h1>Organization</h1>
      <div className="OrganizationCard">
      <div className="CardScrollContainer">
        <div className="CardHeader">
          <div>
            {logo ? (
              <img
                src={logo}
                alt="Organization Logo"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            ) : (
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  background: "#ddd",
                  borderRadius: "50%",
                }}
              ></div>
            )}
          </div>
          {isEditing && (
            <input type="file" accept="image/*" onChange={handleLogoChange} />
          )}
        </div>
        <div className="CardBody">
          <label>Organization Name:</label>
          <input
            type="text"
            name="name"
            value={organizationData.name}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <label>Organization Address:</label>
          <textarea
            name="address"
            value={organizationData.address}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={organizationData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <label>Website:</label>
          <input
            type="url"
            name="website"
            value={organizationData.website}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="CardFooter">
          {!isEditing ? (
            <button onClick={handleEditClick}>Edit</button>
          ) : (
            <>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Organization;
