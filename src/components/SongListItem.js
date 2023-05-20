import "./SongListItem.css";

export function SongListItem({ song, isCurrent, onSelect }) {
  const handleClick = () => onSelect(song);
  return (
    <li
      className={`SongListItem ${isCurrent ? "selected" : ""}`}
      onClick={handleClick}
    >
      {song.title} by {song.artist}
    </li>
  );
}
