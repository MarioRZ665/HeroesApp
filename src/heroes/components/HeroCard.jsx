import { Link } from "react-router-dom";

// Componente que muestra los personajes si no son iguales al alter ego
const CharactersByHero = ({ alter_ego, characters }) => {
	if (alter_ego === characters) return null;
	return <p>{characters}</p>;
};

export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImageURL = `/assets/heroes/${id}.jpg`;

	return (
		<div className="col animate__animated animate__fateIn" >
			<div className="card">
				<div className="row no-gutters">
					<div className="col-4 ">
						<img src={heroImageURL} className="card-img" alt={superhero} />
					</div>
					<div className="col-8">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>
							<CharactersByHero characters={characters} alter_ego={alter_ego} />
							<p className="card-text">
								<small className="text-muted">{first_appearance}</small>
							</p>
							<Link to={`/heroe/${id}`} className="btn btn-primary">
								Más..
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
