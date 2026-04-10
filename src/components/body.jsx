import { useEffect, useState } from "react";
import useFetch from "../useFetch";

function Body() {
  const {
    generateProfile,
    numberofProfile,
    showAccount,
    setNumberofProfile,
    profile,
    searchname,
  } = useFetch();
  return (
    <div className="butt">
      <input
        type="number"
        className="input"
        placeholder="Enter number of profiles to load"
        value={numberofProfile}
        onChange={(e) => setNumberofProfile(e.target.value)}
      />

      <button onClick={() => generateProfile(Number(numberofProfile))}>
        Load Profiles
      </button>

      <input
        type="text"
        placeholder="Enter username"
        value={searchname}
        onChange={(e) => setSearchProfile(e.target.value)}
      />

      <button onClick={() => showAccount(searchname)}>Search User</button>

      <div className="profile">
        {profile.map((value) => (
          <div key={value.id} className="cards">
            <img src={value.avatar_url} alt={value.login} />
            <h2 className="name">{value.login}</h2>
            <a href={value.html_url} target="_blank">
              Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
