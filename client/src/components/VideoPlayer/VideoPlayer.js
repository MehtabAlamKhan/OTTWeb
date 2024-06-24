import React from "react";

function VideoPlayer({ setShowPlayer }) {
  const style = {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    backgroundColor: "black",
  };

  return (
    <div style={style}>
      <video id="videoPlayer" width="1250" autoPlay>
        <source src="http://localhost:5000/api/video" type="video/mp4" />
      </video>
      <button onClick={() => setShowPlayer(false)}>Close</button>
    </div>
  );
}

export default VideoPlayer;
