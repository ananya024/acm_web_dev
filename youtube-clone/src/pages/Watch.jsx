import { useParams } from "react-router-dom";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

function Watch() {
  const { id } = useParams();
// With useParams, your component finds out  what URL it is on.
// For the React components to know:
//  /  or   /watch/1  or  /watch/react-basics

  const video = videos.find((v) => v.id === id);

  if (!video) {
    return <h1>Video not found</h1>;
  }

return (
  <div className="watch-page"> {/* 2 col, left vid, right orthrcards */}
    <div className="watch-view"> {/* left side, main vid, an dbelow that uski details, as if in a column*/}
      {/* grid for left n right in watch-page, 2D 
      and flex-col in left for a col view, one below the other*/}
      <div className="watch-player"> {/* for the vid player */}
        <iframe
          src={video.videoUrl}
          title={video.title}
          allowFullScreen
        />
      </div>
      <div className="watch-title">{video.title}</div>
      <div className="watch-meta"> {/*flex use hua yaha for ide by side */}
        <span>1.2M views</span>
        <span>👍 25K</span>
        <span>🔗 Share</span>
      </div>
      <div className="watch-description">
        {video.description}
      </div>
    </div>


    <div className="watch-view"> {/*again flex col for all vid cards in a col */}
      <h3>More you might like  :D</h3>
      {videos
        .filter(v => v.id !== id)
        .map(v => (
          <VideoCard key={v.id} video={v} />
        ))}
    </div>
  </div>
);

}
export default Watch;

// Correct flow (this is the truth)
// Initial load
// App loads
// Intro video plays
// isIntroDone = true
// Router loads
// Default route is /
// Home page is shown
// Video cards are visible
// Nothing jumps anywhere.
// When you click a VideoCard
// You click a card
// handleClick() runs inside VideoCard
// navigate("/watch/<id>") is called
// URL changes
// Router switches from Home → Watch
// Home disappears
// Watch page appears
// This is 100% intentional, not automatic.
