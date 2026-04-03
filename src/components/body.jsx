import { useEffect, useState } from "react";

function Body() {

    const [profile, setProfile] = useState([]);
    const [numberofProfile, setNumberofProfile] = useState("");
    const [searchname, setSearchProfile] = useState("");

    async function generateProfile(count) {
        const ran = Math.floor(Math.random() * 10000 + 1);
        const response = await fetch(
            `https://api.github.com/users?since=${ran}&per_page=${count}`
        );
        const data = await response.json();
        setProfile(data);
    }

    async function showAccount(name) {

        const response = await fetch(
            `https://api.github.com/users/${name}`
        );
        const data = await response.json();

        setProfile([data]); 
    }

    useEffect(() => {
        generateProfile(12);
    }, []);

    return (
        <div className="butt">
            <input
                type="number"
                className="input"
                placeholder="Enter number of profiles"
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

            <button onClick={() => showAccount(searchname)}>
                Search User
            </button>

            <div className="profile">
                {
                    profile.map((value) => (
                        <div key={value.id} className="cards">
                            <img src={value.avatar_url} alt={value.login} />
                            <h2 className="name">{value.login}</h2>
                            <a
                                href={value.html_url}
                                target="_blank"
                            >
                                Profile
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;