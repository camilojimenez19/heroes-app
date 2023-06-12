import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  firstAppearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  const charactersByHero = alterEgo !== characters && <p>{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 animate">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alterEgo}</p>

              {charactersByHero}

              <p className="card-text">
                <small className="text-muted">{firstAppearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More Info...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
