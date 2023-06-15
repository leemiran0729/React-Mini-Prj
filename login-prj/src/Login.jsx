import React, { useState, useEffect } from "react";

const User = {
  email: "miran@miran.miran",
  pw: "miran123!!",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleLogin = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인 성공!");
    } else {
      alert("로그인 실패!");
    }
  };

  return (
    <div className="page">
      <div className="title">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>
      <div className="content">
        <div className="emailLabel">이메일 주소</div>
        <div className="emailInput">
          <input
            type="text"
            className="input"
            placeholder="test@test.test"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <p className="error">
          {!emailValid && email.length > 0 && `올바른 이메일을 입력해주세요`}
        </p>

        <div className="pwLabel" style={{ marginTop: "26px" }}>
          비밀번호
        </div>
        <div className="pwInput">
          <input
            type="password"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <p className="error">
          {!pwValid &&
            pw.length > 0 &&
            `영문, 숫자, 특수문자 포함 8자 이상을 입력해주세요 `}
        </p>
      </div>
      <button
        className="bottomButton"
        disabled={disabled}
        onClick={handleLogin}
      >
        확인
      </button>
    </div>
  );
};

export default Login;
