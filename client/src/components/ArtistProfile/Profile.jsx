import React from 'react';

const Profile = () => {
  return (
    <div>
      <div className="profileGreyBar"></div>
      <div id="profilecontainer">
        <div id="profilecircle"></div>
        <div id="profilename">
          <p>ARTIST NAME</p>
        </div>
        <div className="profileButtons">
          <button className="profileButton" id="musicbutton">
            MUSIC
          </button>
          <button className="profileButton" id="videosbutton">
            VIDEOS
          </button>
        </div>
        <div id="profilebio">
          <p>
            Ozzy is a music producer and up-and-coming artist. He enjoys
            networking within...
          </p>
        </div>
        <div className="biolinks">
          <a href="www.soundcloud.com">
            <img
              className="profileicons"
              src="https://i1.wp.com/www.playwrightslocal.org/wp-content/uploads/2018/04/icon-soundcloud.png?fit=1024%2C1024"
              alt="cloudicon"
            />
          </a>
          <a href="www.instagram.com">
            <img
              className="profileicons"
              src="https://www.pinclipart.com/picdir/big/83-831769_tonka-turkey-trot-on-instagram-ig-circle-logo.png"
              alt="insta"
            />
          </a>
          <a href="www.spotifiy.com">
            <img
              className="profileicons"
              src="https://www.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png"
              alt="spotifu"
            />
          </a>
          <a href="www.youtube.com">
            <img
              className="profileicons"
              src="https://www.pinclipart.com/picdir/middle/232-2328226_youtube-icon-circle-clipart-youtube-computer-icons-png.png"
              alt="youtube"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
