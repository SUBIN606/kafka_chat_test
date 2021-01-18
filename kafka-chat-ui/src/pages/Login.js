import React, { useState } from "react";

function Login({ handleOnSubmit }) {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    handleOnSubmit(name);
  };

  return (
    <div className="login-container">
      <h1>Kafka CHAT</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder="사용할 닉네임을 입력하세요."
          value={name}
          onChange={handleOnChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />

        <button type="submit">Go!</button>
      </form>
    </div>
  );
}

export default Login;
