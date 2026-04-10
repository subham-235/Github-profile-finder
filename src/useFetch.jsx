import { useState,useEffect } from "react";



function useFetch(){
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

    return {
        generateProfile,numberofProfile,showAccount,setNumberofProfile,setSearchProfile,profile,searchname,name
    }

}

export default useFetch;