import { useEffect, useRef, useState } from 'react';
import musicFile from '../assets/song/rizzup.wav'; // Your audio file path

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5;
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!hasStarted) {
      // First user interaction - allow browser to play
      audio.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(err => {
        console.error("Autoplay blocked:", err);
      });
      return;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={musicFile} />
      <div
        onClick={toggleMusic}
        className={`fixed top-20 right-5 w-16 h-16 rounded-full bg-black flex items-center justify-center cursor-pointer z-50 shadow-lg transition-transform ${
          isPlaying ? 'animate-spin-slow' : ''
        }`}
        title={isPlaying ? 'Click to pause' : 'Click to play'}
      >
        <div className="w-5 h-5 bg-white rounded-full" />
      </div>
    </>
  );
}
