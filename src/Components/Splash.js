
import './Splash.css';
import TedBundyTitle from '../Resources/Images/tedbundy-title.png';
import TedBundy from '../Resources/Images/tedbundy-desktop.webp';
import ThreeDotsIcon from '../Resources/Icons/three-dots.png';

export default function Splash() {

    return (
        <div className="splash">
            <div className="splash-content">
                <div className="splash-content-details">
                    <h3>New on Hulu</h3>
                    <img src={TedBundyTitle} alt="Ted Bundy Show Title" draggable="false" />
                    <p className="description">
                        A specter roams the highways of a gritty 1970s America, his name is Ted Bundy. Hunting him are intrepid FBI agents Kathleen McChesney and Robert Ressler, organizers of the largest manhunt in history to apprehend America's most infamous serial killer
                    </p>
                    <div className="action-buttons">
                        <button>
                            &#9654; Play
                        </button>
                        <button>
                            Details
                        </button>
                        <img src={ThreeDotsIcon} alt="More Options" />
                    </div>
                </div>
            </div>
            <div className="splash-backdrop">
                <img src={TedBundy} alt="Ted Bundy Show" />
            </div>
        </div>
    )
}