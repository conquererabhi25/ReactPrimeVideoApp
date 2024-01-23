import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  return (
    <div className="popup-conatainer">
      <Popup
        modal
        trigger={
          <button className="trigger-btn" type="button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <div className="video-player">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size="20" color="#000000" />
            </button>
            <div>
              <ReactPlayer
                url={videoUrl}
                controls="true"
                mute="true"
                className="pop-up"
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
