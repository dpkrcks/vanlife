import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id} className="van--container">
        <img src={van.imageUrl} className="van--img" alt="van-selected" />
        <div className="van--details">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van--type ${van.type} selected`}>{van.type}</i>
      </div>
    );
  });

  return (
    <div className="van--elements--container">
      <div className="van--elements">{vanElements}</div>
    </div>
  );
}
