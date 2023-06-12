import { VALID_PUBLISHERS } from '../constant';
import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const isValidPublisher = Object.keys(VALID_PUBLISHERS).includes(publisher)

    if (isValidPublisher)
        throw new Error(`${ publisher } is not a valid publisher`)

    return heroes.filter( hero => hero.publisher === publisher)
}