const API_KEY = "YOUR_API_KEY_HERE";

export async function fetchPopularVideos() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=10&key=${API_KEY}`
  );

  const data = await response.json();
  // return data;
  return data.items; //helps later in Home.jsx
}