
import { useNavigate, useParams } from "react-router"
import { Navigate } from "react-router";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
	const { heroeId } = useParams();
	const navigate = useNavigate();

	const heroe = getHeroeById(heroeId);

	const onNavigateBack = () => {
		navigate(-1);
	}


	if (!heroe) {
		return <Navigate to="/marvel" />
	}
	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={`/assets/heroes/${heroeId}.jpg`}
					alt={heroe.superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>
			<div className="col-8">
				<h1>{heroe.superhero}</h1>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"> <b>Alter ego:</b> {heroe.alter_ego} </li>
					<li className="list-group-item"> <b>Publisher:</b> {heroe.publisher} </li>
					<li className="list-group-item"> <b>First appearance:</b> {heroe.first_appearance} </li>
				</ul>

				<h5 className="mt-3"> Characters </h5>
				<p>{heroe.characters}</p>
				<button
					className="btn btn-outline-primary"
					onClick={onNavigateBack}
				>
					Regresar
				</button>
			</div>
		</div>
	)
}
