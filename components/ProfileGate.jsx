"use client";

import { NETFLIX_DATA } from "../lib/data";

export default function ProfileGate({ onSelectProfile }) {
  return (
    <div className="profile-gate-screen">
      <header className="gate-header">
        <div className="logo">
          <div className="hubplay-logo">
            <span className="hub-tag">HUB</span>
            <span className="play-tag">PLAY</span>
            <i className="fa-solid fa-play play-icon-badge"></i>
          </div>
        </div>
      </header>

      <div className="gate-content">
        <h1 className="gate-title">Kim izliyor?</h1>
        <div className="profile-list">
          {NETFLIX_DATA.userProfiles.map((profile) => (
            <div
              key={profile.id}
              className="profile-tile"
              onClick={() => onSelectProfile(profile)}
            >
              <div className="profile-avatar-box">
                <img src={profile.avatar} alt={profile.name} />
              </div>
              <span className="profile-name">{profile.name}</span>
            </div>
          ))}
        </div>
        <button className="manage-profiles-btn">Profil Yönetimi</button>
      </div>
    </div>
  );
}
