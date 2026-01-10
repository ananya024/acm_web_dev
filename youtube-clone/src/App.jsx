import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { useState } from "react";
import youtube from "./assets/youtube.mp4";
import Header from "./components/Header";

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);
  return (
    <>
      {!isIntroDone && <video
                        src={youtube}
                        autoPlay
                        muted
                        playsInline
                        onEnded={() => setIsIntroDone(true)}
                        style={{
                          objectFit: 'cover',
                          position: 'fixed',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: 9999
                        }}
                        />}
      {isIntroDone && <BrowserRouter>
                        <Header /> {/* this means header never disappears */}
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/watch/:id" element={<Watch />} />
                        </Routes>
                      </BrowserRouter>}
    </>
  );
}
export default App;


// // In the && version:
// // The intro video is an overlay
// // The rest of the app is always mounted
// // App (router + pages) is always rendered
// // Intro video is rendered on top only while !isIntroDone
// // When video ends:
// // isIntroDone = true
// // intro <div> unmounts completely
// // app is already there → instantly visible

// // The ternary was not conceptually wrong
// // The real issue was video had position fixed
// // video created a stacking context
// // router DOM was mounted after intro
// // browser sometimes kept layout/paint issues
