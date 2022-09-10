import { useState } from "react";
import openNotificationWithIcon from "../notification";
function Login({ callback }) {
  const [name, setName] = useState("");
  const handleClick = () => {
    if (name) {
      callback(name);
    } else {
      openNotificationWithIcon("error", "Please enter your name");
    }
  };
  return (
    <div>
      <h1>Football player pick</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        style={{
          padding: "10px",
          border: "none",
          outline: "none",
          borderBottomLeftRadius: "4px",
          borderTopLeftRadius: "4px",
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          outline: "none",
          border: "none",
          borderBottomRightRadius: "4px",
          borderTopRightRadius: "4px",
          cursor: "pointer",
        }}
      >
        Play now
      </button>
    </div>
  );
}

export default Login;
