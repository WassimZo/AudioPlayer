import playIcon from "../../assets/play-icon.svg";
import pauseIcon from "../../assets/pause-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleLecture } from "../../features/playlist";

export default function PlayButton() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  return (
    <button
      onClick={() => dispatch(toggleLecture())}
      className="bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center outline-none"
    >
      <img
        src={playlist.play ? pauseIcon : playIcon}
        className="w-20 h-20"
        alt=""
      />
    </button>
  );
}
