import React, { useEffect, useState } from "react";
import "./App.css";
import PostItem from "./component/PostItem";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setEror] = useState(null);
  const [page, setPage] = useState(1);
  let API_URL =
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page={page}";
  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await fetch(API_URL);
      let finalReaponse = await response.json();
      //console.log(finalReaponse);
      setPosts(finalReaponse);
      setLoading(false);
    } catch (error) {
      setEror("data is not fetched");
    }
  };
  useEffect(
    function () {
      fetchData(page);
    },
    [page]
  );

  return (
    <div>
      <h3>React network request during mount and update phase</h3>
      <button onClick={() => setPage(page - 1)}>PREVIOUS</button>
      <h4>{page}</h4>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
      {loading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <PostItem posts={posts} page={page} />
      )}
    </div>
  );
}

export default App;
