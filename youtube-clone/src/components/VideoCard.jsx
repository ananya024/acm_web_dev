// Home.jsx: fetches data and updates state
// So it needs useEffect.
// VideoCard.jsx: receives data via props and displays UI
// It does NOT: fetch or update state or talk to external systems
// So it does NOT need useEffect.
// chatgpt
// API
//  ↓
// Home.jsx (useEffect + useState)
//  ↓
// videos array
//  ↓
// .map()
//  ↓
// VideoCard(video)
//  ↓
// JSX

import { useNavigate } from "react-router-dom";

function VideoCard({ video }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/watch/${video.id}`);
  }

  return (
    // api not doing now
    // <div onClick={handleClick}>
    //   <h2>{video.snippet.title}</h2>
    //   <p>{video.snippet.description}</p>
    // </div>
    <div className="video-card" onClick={handleClick}>
      <img src={video.thumbnail} alt={video.title} width="300" />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
}
export default VideoCard;
