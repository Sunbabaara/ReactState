import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

const App=()=>{

    const [writers, setWriters]=useState([])
    const [loading, setLoading]=useState(false)

 function handleClick() {
    setLoading(true);
    setTimeout(async () => {
      // fetch is a JavaScript API for getting information over the internet
      let resp = await fetch("/writers.json");
      let result = await resp.json();
      setWriters(result);
      setLoading(false)
    }, 3500);
  }

    if (loading) {
      return (
        <div>
          <h1> Writer Profiles </h1>
          <div className="container">
            <div className="card action">
              <p className="infoText"> Loading... </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1> Writer Profiles </h1>
        <div className="container">
          {writers.length === 0 ? (
            <div className="card action">
              <p className="infoText"> Oops... no writer profile found</p>
              <button className="actionBtn" onClick={handleClick}>
                Get Writers
              </button>
            </div>
          ) : (
            writers.map((writer) => (
              <ProfileCard key={writer.id} writer={writer} />
            ))
          )}
        </div>
      </div>
    );
}

export default App;