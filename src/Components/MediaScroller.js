
import './MediaScroller.css';

export default function MediaScroller(props) {

    let category = props.category;

    return (
        <div className="media-scroller">
            <h2>{category}</h2>
        </div>
    )
}