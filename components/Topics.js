import { useState, useEffect } from "react";
import styles from "../styles/Topics.module.css";
function Topics() {
  const [pixelProgressNum, setPixelProgressNum] = useState(50);
  const [cProgressNum, setCProgressNum] = useState(20);
  const [frontendProgressNum, setFrontendProgressNum] = useState(60);
  const [musicprodProgressNum, setMusicprodProgressNum] = useState(80);
  const minValue = 0;
  const maxValue = 100;

  return (
    <div className={styles.container}>
      <ul>
        <li>Pixel-Art</li>
        <progress id="file" value={pixelProgressNum} max="100"></progress>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => setPixelProgressNum(pixelProgressNum + 2)}
          >
            Increment
          </button>
          <button
            className={styles.button}
            onClick={() => setPixelProgressNum(pixelProgressNum - 2)}
          >
            Decrement
          </button>
        </div>
        <li>C++</li>
        <progress id="file" value={cProgressNum} max="100"></progress>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => setCProgressNum(cProgressNum + 2)}
          >
            Increment
          </button>
          <button
            className={styles.button}
            onClick={() => setCProgressNum(cProgressNum - 2)}
          >
            Decrement
          </button>
        </div>
        <li>Front End</li>
        <progress id="file" value={frontendProgressNum} max="100"></progress>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => setFrontendProgressNum(frontendProgressNum + 2)}
          >
            Increment
          </button>
          <button
            className={styles.button}
            onClick={() => setFrontendProgressNum(frontendProgressNum - 2)}
          >
            Decrement
          </button>
        </div>
        <li>Music Production</li>
        <progress id="file" value={musicprodProgressNum} max="100"></progress>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => setMusicprodProgressNum(musicprodProgressNum + 2)}
          >
            Increment
          </button>
          <button
            className={styles.button}
            onClick={() => setMusicprodProgressNum(musicprodProgressNum - 2)}
          >
            Decrement
          </button>
        </div>
        <li>{pixelProgressNum}</li>
      </ul>
    </div>
  );
}

export default Topics;
