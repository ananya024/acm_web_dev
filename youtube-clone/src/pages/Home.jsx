// import { useEffect, useState } from "react";
// import { fetchPopularVideos } from "../services/api";

// function Home() {
//   useEffect(() => {
//     fetchPopularVideos().then((data) => {
//       console.log(data);
//     });
//   }, []);

//   return <div>Home</div>;
// }
// export default Home;

import { useEffect, useState } from "react";
import { fetchPopularVideos } from "../services/api";
import VideoCard from "../components/VideoCard";
import videos from "../data/videos";

function Home() {
  //NOT DOING API NOW
  
  // const [videos, setVideos] = useState([]);
  // // useeffect works AFTER getting data, sath me "fetch" all
  // useEffect(() => {
  //   async function loadData() {
  //     const videos = await fetchPopularVideos();
  //     console.log(videos);
  //     setVideos(videos); //abhi videos has the video list sent from the api
  //   }
  //   loadData();
  //   console.log("videos:", videos);
  // }, []);


  return (
    <div className="video-grid">
      {videos.map((item) => ( //“For every video in the videos array, create some JSX.”
      //its like on a look where "item" id each element/vid of videos walal list
        <VideoCard key={item.id} video={item}/> 
        // <VideoCard key={item.id} video={item}> 
        // {/* ye DIV se VIDEOCARD me changeeee */}
        //    <h2>{item.snippet.title}</h2> 
        //   <p>{item.snippet.description}</p> 
        //  </VideoCard> 
      ))}
      
    </div>
  );
}
export default Home;

// in my code, videos represents the list of videos 
// and the item in the map line represents each element in it, 
// its like a loop
