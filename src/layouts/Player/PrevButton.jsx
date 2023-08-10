import prevIcon from "../../assets/prev-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { prevSong } from "../../features/playlist";

export default function PrevButton() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);

  function handleClick() {
    if (playlist.songs) {
      const prevIndex =
        playlist.songs.findIndex(
          (song) => song.id === playlist.currentMusicId
        ) - 1;
      dispatch(prevSong(prevIndex));
    }
  }

  return (
    <button
      onClick={handleClick}
      className="w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center"
    >
      <img src={prevIcon} className="h-5 w-5" alt="" />
    </button>
  );
}
