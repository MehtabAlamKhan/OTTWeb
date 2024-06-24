import React from "react";

function UserScore({ score }) {
  function percentage() {
    // console.log(Math.floor((116 / 10) * score));
    return Math.floor((116 / 10) * score);
  }

  function color() {
    if (score >= 8.5) {
      return "#31f031";
    } else if (score >= 8 && score < 8.5) {
      return "#b7f031";
    } else if (score >= 7 && score < 8) {
      return "#edf031";
    } else if (score >= 6 && score < 7) {
      return "#f0c331";
    } else if (score >= 4 && score < 6) {
      return "#f07731";
    } else {
      return "#dd2121";
    }
  }

  return (
    <div className="user-score-cont">
      <div className="user-svg-cont">
        <svg id="circle">
          <circle
            r="25"
            cx="50%"
            cy="50%"
            stroke="gray"
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${score === 0 ? "116" : "0"}, 660`}
          ></circle>
          <circle
            id="success-value"
            r="25"
            cx="50%"
            cy="50%"
            stroke={color()}
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${percentage()},660`}
          ></circle>
        </svg>
        <div style={{ position: "absolute" }}>
          <div id="circle-percentage">{score === 0 ? "NA" : `${parseFloat(score).toFixed(1)}`}</div>
        </div>
      </div>
      <div className="user-score-t">User Score</div>
    </div>
  );
}

export default UserScore;
