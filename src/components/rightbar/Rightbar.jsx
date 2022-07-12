import "./rightbar.css";

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText"> Changes this with some <b>event</b> or else</span>
                </div>
                <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle"> Trendy Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/3.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Cena</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;
