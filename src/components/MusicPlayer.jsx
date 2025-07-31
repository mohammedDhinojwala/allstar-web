import { useEffect, useRef, useState } from 'react';
import musicFile from '../assets/song/rizzup.wav';
import discImage from '../assets/images/musicDisk.png'; // Your image

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
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch((err) => {
          console.error('Autoplay blocked:', err);
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
        className="fixed top-20 right-5 w-20 h-20 rounded-full bg-black flex items-center justify-center cursor-pointer z-50 shadow-lg"
        title={isPlaying ? 'Click to pause' : 'Click to play'}
      >
        <img
          src={discImage}
          alt="Music Disc"
          className={`w-full h-full object-cover rounded-full transition-transform duration-500 ${
            isPlaying ? 'animate-spin' : ''
          }`}
        />
      </div>
    </>
  );
}
