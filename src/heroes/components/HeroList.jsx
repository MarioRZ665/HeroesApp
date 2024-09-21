import { getHeroesByPublisher } from "../helpers"

export const HeroresList = ({ publisher }) => {

	const heroes = getHeroesByPublisher(publisher)
	return (
		<lu>
			{
				heroes.map(heroe =>(
					<li key={heroe.id}>
						{heroe.superhero}
					</li>
				))
			}
		</lu>
	)
}
