import "./Clock.css";

const Clock = ({ hour, minute }: { hour: number; minute: number }) => {
  return (
    <div className="Clock bg-qur-1 w-52 h-52 p-3 mainShadow">
      <div className="outer-clock-face bg-white after:bg-qur-1/50 before:bg-qur-1/50">
        <div className="marking marking-one bg-qur-1/50"></div>
        <div className="marking marking-two bg-qur-1/50"></div>
        <div className="marking marking-three bg-qur-1/50"></div>
        <div className="marking marking-four bg-qur-1/50"></div>
        <div className="inner-clock-face bg-white before:bg-qur-1">
          <div
            className="hand hour-hand bg-qur-1"
            style={{
              transform: `rotate(${
                (hour / 12) * 360 + (minute / 60) * 30 + 90
              }deg)`,
            }}
          ></div>

          <div
            className="hand min-hand bg-qur-1/60"
            style={{
              transform: `rotate(${(minute / 60) * 360 + 90}deg)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
