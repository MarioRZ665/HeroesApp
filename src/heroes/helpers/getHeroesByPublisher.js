import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) =>{

    const validPublishers = ['DC Comics','Marvel Comics'];
    if ( !validPublishers.includes( publisher ) ) {
		console.log('Error');
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}