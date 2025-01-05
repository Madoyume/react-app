import "./App.css";
import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

function App() {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);

  const onClickCountUp = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const onClickTogle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    console.log("useEffect!");
    if (num % 3 === 0) {
      isShowFace || setIsShowFace(true);
    } else {
      isShowFace && setIsShowFace(false);
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "green" }}>こんにちは！</h1>
      <ColorfulMessage color="red" message="お元気ですか？" />
      <ColorfulMessage color="blue" message="元気です！" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickTogle}>オンオフ</button>
      {isShowFace && <p>(^_-)-☆</p>}
    </React.Fragment>
  );
}

export default App;
