import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import "./index.css";

export default function Profile() {
  const [profile, setProfile] = useState({});

  const getProfileUserAPI = useCallback(async () => {
    const res = await axios.get("https://api.github.com/users/fajriputra");

    setProfile(res.data);
  }, []);

  useEffect(() => {
    getProfileUserAPI();
  }, [getProfileUserAPI]);

  return (
    <aside className="profile">
      <figure className="profile-image">
        <img src={profile.avatar_url} alt={profile.login} />
      </figure>

      <div style={{ margin: "16px auto" }}>
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-username">{profile.login}</p>
      </div>

      <button className="btn-follow">Follow</button>

      <div className="info-follower">
        <p className="followers">
          {profile.followers} <span className="span-follow">followers</span>
        </p>
        <p className="following">
          {profile.following} <span className="span-follow">following</span>
        </p>
      </div>

      <span className="location">{profile.location}</span>
    </aside>
  );
}
