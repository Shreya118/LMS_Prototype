import React, { useRef, useState } from "react";
import "./Pre_test.css";

const Video = ({ onFinish }) => {
  const videoRef = useRef(null);   
  const [ended, setEnded] = useState(false);

  return (
    <div className="container">
      <div
        className="video"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <video width="650" height="550" controls onEnded={() => setEnded(true)}>
            <source
                src={`${import.meta.env.BASE_URL}sql.mp4`}
                type="video/mp4"
            />
        </video>


        <button
          onClick={onFinish}
          disabled={!ended}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: ended ? "pointer" : "not-allowed",
            opacity: ended ? 1 : 0.5,
          }}
        >
          Answer the Post Test
        </button>
      </div>
    </div>
  );
};

export default Video;
