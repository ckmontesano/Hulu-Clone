
import './MediaScroller.css';

/* Christmas Imports */
import ChristmasImage1 from '../Resources/Images/Show Thumbnails/Christmas Movies/christmas-carol.webp';
import ChristmasImage2 from '../Resources/Images/Show Thumbnails/Christmas Movies/christmas-perfection.webp';
import ChristmasImage3 from '../Resources/Images/Show Thumbnails/Christmas Movies/happiest-season.webp';
import ChristmasImage4 from '../Resources/Images/Show Thumbnails/Christmas Movies/jingle-all-the-way.webp';
import ChristmasImage5 from '../Resources/Images/Show Thumbnails/Christmas Movies/the-holiday.webp';

/* For the Kids Imports */
import KidsImage1 from '../Resources/Images/Show Thumbnails/For the Kids/curious-george.webp';
import KidsImage2 from '../Resources/Images/Show Thumbnails/For the Kids/drake-and-josh.webp';
import KidsImage3 from '../Resources/Images/Show Thumbnails/For the Kids/regular-show.webp';
import KidsImage4 from '../Resources/Images/Show Thumbnails/For the Kids/shrek.webp';
import KidsImage5 from '../Resources/Images/Show Thumbnails/For the Kids/train-dragon.webp';

/* Picked for You Imports */
import ForYouImage1 from '../Resources/Images/Show Thumbnails/Picked for You/castle-rock.webp';
import ForYouImage2 from '../Resources/Images/Show Thumbnails/Picked for You/deadpool.webp';
import ForYouImage3 from '../Resources/Images/Show Thumbnails/Picked for You/dopesick.webp';
import ForYouImage4 from '../Resources/Images/Show Thumbnails/Picked for You/matrix.webp';
import ForYouImage5 from '../Resources/Images/Show Thumbnails/Picked for You/world-war-z.webp';

import RightArrow from '../Resources/Icons/right-arrow.png';
import ThreeDotsIcon from '../Resources/Icons/three-dots.png';

export default function MediaScroller(props) {

    let category = props.category;
    let prefix;
    let shows = [];

    if ( category === "Christmas Movies" ) {
        shows.push(ChristmasImage1);
        shows.push(ChristmasImage2);
        shows.push(ChristmasImage3);
        shows.push(ChristmasImage4);
        shows.push(ChristmasImage5);
    }
    else if ( category === "For the Kids" ) {
        shows.push(KidsImage1);
        shows.push(KidsImage2);
        shows.push(KidsImage3);
        shows.push(KidsImage4);
        shows.push(KidsImage5);
    }
    else {
        shows.push(ForYouImage1);
        shows.push(ForYouImage2);
        shows.push(ForYouImage3);
        shows.push(ForYouImage4);
        shows.push(ForYouImage5);
    }

    return (
        <div className="media-scroller">
            <h2>{category}</h2>
            <div className="slider">
                {
                    // load all shows into slider
                    shows.map( (imageName, i) => {

                        console.log(imageName);

                        return (
                            <div className="slider-item" key={i}>
                                <img className="three-dots" src={ThreeDotsIcon} alt="More Options" />
                                <div className="slider-content">
                                    <div className="right-arrow">
                                        <img src={RightArrow} alt="Watch Show" />
                                    </div>
                                </div>
                                <div className="slider-backdrop">
                                    <img src={imageName} alt="Show Backdrop" />
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}