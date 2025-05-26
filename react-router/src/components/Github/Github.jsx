import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./github.css";

const Github = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // Fetch follower count from GitHub API
  //   const fetchFollowerCount = async () => {
  //     const response = await fetch("https://api.github.com/users/simran224023");
  //     const data = await response.json();
  //     setData(data);
  //   };
  //   fetchFollowerCount();
  // }, []);
  const data = useLoaderData();
  return (
    <div className="github">
      <div className="github-stats">
        <span className="github-label">Follower Count: </span>
        <span className="github-followers">{data?.followers}</span>
      </div>
      <img src={data?.avatar_url} alt="Git Image" className="github-avatar" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/simran224023");
  return response.json();
};
