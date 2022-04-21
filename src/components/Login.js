import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(false);
  const Navigate = useNavigate();
  const handleClick = (e) => {
    const txt = e.target.value;
    if (
      txt.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      ) != null
    ) {
      setLogin(!login);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (login) {
      Navigate("/ticket");
    } else {
      alert(
        "Your password must have one capital and small letter and one number and one special character"
      );
    }
  };
  return (
    <div className="row">
      <h1 className="display-2 text-center">Login Form</h1>

      <div className="col-md-7 shadow mx-auto p-5 m-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="UserName"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="Password"
              placeholder="Password"
              className="form-control"
              required
              onChange={handleClick}
            />
          </div>

          <div className="form-group m-1">
            <input type="Submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
