import React from 'react';
import MovieImg from "../utils/images/Beekeeper.jpg";
import PlayBtn from "../utils/images/play-button.png"
import ForwardBtn from "../utils/images/next-button.png";
import RewindBtn from "../utils/images/back-button.png";
import PauseBtn from "../utils/images/pause.png";

const VideoCard = () => {
    const imageStyle = {
        width: '100%',
        maxHeight: '250px',
        objectFit: 'fill',
    };
  return (
    <div className="card-preview bg-black m-3 max-w-sm">
        <div className="video-img overflow-hidden">
            <img src={MovieImg} alt="Movie Image" style={imageStyle} />
        </div>
        <div className="video-content bg-gray-900 text-white m-0">
            <div className="video-controls flex justify-evenly items-center p-4 mr-2 ml-2">
                <img src={PlayBtn} alt="Play Button" className="w-12 h-12" />
                <img src={ForwardBtn} alt="Forward Button" className="w-12 h-12" />
                <img src={RewindBtn} alt="Rewind Button" className="w-12 h-12" />
                <img src={PauseBtn} alt="Pause Button" className="w-12 h-12" />
            </div>
            <div className="ratings-duration p-2 mr-4 ml-4">
                <p className="inline-block text-green-500">97% Match</p>
                <p className="inline-block ml-5">1h 45m</p>
            </div>
            <div className="genre p-2">
                <ul className="list-none pl-4 pb-2">
                    <li className="inline-block">Action</li>
                    <li className="inline-block ml-2">Thriller</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default VideoCard;