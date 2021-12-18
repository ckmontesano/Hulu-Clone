
import './Guide.css';
import MediaScroller from "./MediaScroller";

export default function Guide() {

    return (
        <div className="guide">
            <MediaScroller category="TV For You" />
            <div className="feature-banner">
                HOLIDAYS
            </div>
            <MediaScroller category="Movies For You" />
        </div>
    )
}