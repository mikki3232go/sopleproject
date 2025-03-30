import React, { useState } from "react";

function ProfileForm() {
  const [user, setUser] = useState({
    profile: {
      name: "",
      email: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((currentUser) => ({
      ...currentUser,
      profile: {
        ...currentUser.profile,
        [name]: value,
      },
    }));
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "400px",
        margin: "40px auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>프로필 수정</h2>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>이름</label>
          <input
            type="text"
            name="name"
            value={user.profile.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>이메일</label>
          <input
            type="email"
            name="email"
            value={user.profile.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <h3 style={{ marginBottom: "10px" }}>입력 결과</h3>
      <p>
        <strong>이름:</strong> {user.profile.name || "(미입력)"}
      </p>
      <p>
        <strong>이메일:</strong> {user.profile.email || "(미입력)"}
      </p>
    </div>
  );
}

export default ProfileForm;
