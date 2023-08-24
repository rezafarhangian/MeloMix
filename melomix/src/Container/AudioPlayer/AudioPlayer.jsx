import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import {
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
} from "react-icons/tb";
// import ahang from "../../../public/Music/roodkhane.mp3";
import "./AudioPlayer.scss";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"



function formatTime(time) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function AudioPlayer({setIsPlayinggg, musicsrc, coverMusic ,SongName , Singer}) {



  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Default to full volume
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(1);
  // const [isMutedIconLocked, setIsMutedIconLocked] = useState(false);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);
  const [isEnded, setIsEnded] = useState(false); // New state for track end
  const [isTogglingMute, setIsTogglingMute] = useState(false); // New state for mute toggle
  const audioRef = useRef();
  

  const [openPlayerMobile, setOpenPlayerMobile] = useState(false);

  // useEffect(() => {
  //   audioRef.current.addEventListener("loadedmetadata", () => {
  //     setDuration(audioRef.current.duration);
  //   });
  // }, []);

  const handleAudio = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      setIsEnded(false); // Reset isEnded when audio playback starts
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsEnded(true); // Set isEnded to true when audio ends
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSkipForward = () => {
    const newTime = Math.min(audioRef.current.currentTime + 8, duration);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSkipBackward = () => {
    const newTime = Math.max(audioRef.current.currentTime - 8, 0);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    setPrevVolume(newVolume);

    if (newVolume === 0) {
      setIsTogglingMute(true);
    } else {
      setIsTogglingMute(false);
    }
  };

  const handleToggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = prevVolume;
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(audioRef.current.volume);
      audioRef.current.volume = 0;
      setIsMuted(true);
      setVolume(0);
    }
  };

  const handleSliderMouseDown = () => {
    setIsDraggingSlider(true);
  };

  const handleSliderMouseUp = () => {
    setIsDraggingSlider(false);
    if (isDraggingSlider && audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });
    handleAudio()
  }, []);


  return (
    <>
        
      
      <div className="d-md-flex  justify-content-around px-2 w-100 h-100 align-items-center audio-player d-none">
        <button onClick={() => setIsPlayinggg(false)}  className="close-player">
          <AiFillCloseCircle />
        </button>

        <div className="audio-details position-relative  h-100 ">
          <audio
            ref={audioRef}
            src={musicsrc}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            volume={volume}
          />
          <p className="position-absolute currentTime ">
            {formatTime(currentTime)}
          </p>

          <div className="d-flex align-items-center w-100 mt-5  position-relative ">
          



            <div className="d-flex align-items-center position-absolute btn-play-puase ">
              <button
                className="btn-SkipBackward me-2"
                onClick={handleSkipBackward}
              >
                <TbPlayerSkipBackFilled />
              </button>
              <button
                className="bg-transparent border-0 btn-play-pause"
                onClick={handleAudio}
              >
                {isPlaying ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
              </button>
              <button
                className="btn-SkipForward ms-2"
                onClick={handleSkipForward}
              >
                <TbPlayerSkipForwardFilled />
              </button>
            </div>

            <div className="w-100  m-3 position-relative">
            <p className="position-absolute duration ">{formatTime(duration)}</p>
            <input
              type="range"
              min="0"
              max={duration}
              value={isEnded ? 0 : isDraggingSlider ? currentTime : currentTime}
              onChange={handleSeek}
              onMouseDown={handleSliderMouseDown}
              onMouseUp={handleSliderMouseUp}
              className="e-range w-100 m-auto "
            />
            </div>

            <div className=" d-flex align-items-center justify-content-center">
              <button className="btn-volume " onClick={handleToggleMute}>
                {isMuted || isTogglingMute ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="e-volume mb-1 "
              />
            </div>
          </div>
        </div>

        <div className="player-details d-flex  align-items-center me-1 ">
          <div className="me-2 text-end">
            <span className="d-block song-name">{SongName}</span>
            <span className="d-block singer-name">{Singer}</span>
          </div>
          <img
            src={coverMusic}
            alt=""
          />
        </div>
      </div>

      {/* *********************************************************************************************** */}
      <div className="d-flex flex-column d-md-none audio-player-mobile w-100">
      <button onClick={() => setOpenPlayerMobile(false)} className={`${openPlayerMobile ? "d-block" : "d-none"} open-player m-auto d-md-none d-flex justify-content-center align-items-center border-0`}><IoIosArrowDown/></button>
      <button onClick={() => setOpenPlayerMobile(true)} className={` ${openPlayerMobile ? "d-none" : "d-block"} open-player m-auto d-md-none d-flex justify-content-center align-items-center border-0`}><IoIosArrowUp/></button>
        <div className={`mt-3 ${openPlayerMobile ? "d-block" : "d-none"}`}>
        <div className="player-details-2 d-flex flex-column align-items-center me-1 ">
          <img
            src={coverMusic}
            alt=""
          />
          <div className="me-2 text-end">
            <span className="d-block song-name mt-2">{SongName}</span>
            <span className="d-block singer-name">{Singer}</span>
          </div>
        </div>
        </div>
        <div className={`${openPlayerMobile ? "d-block" : "d-none"} input-range-mobile position-relative mt-3`}>
        <p className="position-absolute currentTime-2 ">
            {formatTime(currentTime)}
          </p>
          <p className="position-absolute duration-2 ">{formatTime(duration)}</p>
        <input
              type="range"
              min="0"
              max={duration}
              value={isEnded ? 0 : isDraggingSlider ? currentTime : currentTime}
              onChange={handleSeek}
              onMouseDown={handleSliderMouseDown}
              onMouseUp={handleSliderMouseUp}
              className="e-range w-100 m-0"
            />
        </div>
        <div className=" d-flex justify-content-center mt-3">
          <div className="d-flex align-items-center btn-play-puase">
            <button
              className="btn-SkipBackward me-2"
              onClick={handleSkipBackward}
            >
              <TbPlayerSkipBackFilled />
            </button>
            <button
              className="bg-transparent border-0 btn-play-pause"
              onClick={handleAudio}
            >
              {isPlaying ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
            </button>
            <button
              className="btn-SkipForward ms-2"
              onClick={handleSkipForward}
            >
              <TbPlayerSkipForwardFilled />
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between px-2 mt-3 mb-3">
          <button onClick={() => setIsPlayinggg(false)} className="close-player">
            <AiFillCloseCircle />
          </button>
          <div className=" d-flex align-items-center justify-content-center ">
            <button className="btn-volume " onClick={handleToggleMute}>
              {isMuted || isTogglingMute ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="e-volume mb-1 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
