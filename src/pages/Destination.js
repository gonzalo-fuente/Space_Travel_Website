import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../data.json";

const Destination = ({ setLocation }) => {
  const { destinations } = data;
  const [destination, setDestination] = useState(destinations[0]);

  const location = useLocation();
  useEffect(() => {
    setLocation(location.pathname);
  }, []);

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>

      <img src={destination.images.png} alt={`The ${destination.name}`} />

      <div className="tab-list underline-indicators flex">
        <button
          aria-selected={(destination.name === "Moon").toString()}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => setDestination(destinations[0])}
        >
          Moon
        </button>
        <button
          aria-selected={(destination.name === "Mars").toString()}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => setDestination(destinations[1])}
        >
          Mars
        </button>
        <button
          aria-selected={(destination.name === "Europa").toString()}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => setDestination(destinations[2])}
        >
          Europa
        </button>
        <button
          aria-selected={(destination.name === "Titan").toString()}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => setDestination(destinations[3])}
        >
          Titan
        </button>
      </div>

      <article className="destination-info flow">
        <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>

        <p>{destination.description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{destination.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{destination.travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Destination;
