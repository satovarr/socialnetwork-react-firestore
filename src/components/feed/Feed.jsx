import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

const Feed = ({user}) => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share user={user} />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Feed;
