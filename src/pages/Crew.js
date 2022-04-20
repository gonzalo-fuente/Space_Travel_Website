import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../data.json";

const Crew = ({ setLocation }) => {
  const { crew } = data;
  const [crewMember, setCrewMember] = useState(crew[0]);

  const location = useLocation();
  useEffect(() => {
    setLocation(location.pathname);
  }, []);

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div className="dot-indicators flex">
        <button
          aria-selected={(crewMember.role === "Commander").toString()}
          onClick={() => setCrewMember(crew[0])}
        >
          <span className="sr-only">The commander</span>
        </button>
        <button
          aria-selected={(crewMember.role === "Mission Specialist").toString()}
          onClick={() => setCrewMember(crew[1])}
        >
          <span className="sr-only">The mission specialist</span>
        </button>
        <button
          aria-selected={(crewMember.role === "Pilot").toString()}
          onClick={() => setCrewMember(crew[2])}
        >
          <span className="sr-only">The pilot</span>
        </button>
        <button
          aria-selected={(crewMember.role === "Flight Engineer").toString()}
          onClick={() => setCrewMember(crew[3])}
        >
          <span className="sr-only">The crew engineer</span>
        </button>
      </div>

      <article className="crew-details flow">
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">{crewMember.role}</h2>
          <p className="fs-700 uppercase ff-serif">{crewMember.name}</p>
        </header>
        <p>{crewMember.bio}</p>
      </article>

      <img src={crewMember.images.png} alt={crewMember.name} />
    </main>
  );
};

export default Crew;
