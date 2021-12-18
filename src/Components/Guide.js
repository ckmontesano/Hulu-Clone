
import './Guide.css';

import MediaScroller from "./MediaScroller";

import FeatureBannerText from '../Resources/Images/feature-banner-text.png';
import RightArrowCircle from '../Resources/Icons/right-arrow-circle.png';

export default function Guide() {

    return (
        <div className="guide">
            <MediaScroller category="Christmas Movies" />
            <div className="feature-banner">
                <div className="feature-banner-content">
                    <img src={FeatureBannerText} alt="Feature Banner Text" />
                    <img className="right-arrow-circle" src={RightArrowCircle} alt="Continue to Holiday Movies" />
                </div>
            </div>
            <MediaScroller category="For the Kids" />
            <MediaScroller category="Picked for You" />
        </div>
    )
}