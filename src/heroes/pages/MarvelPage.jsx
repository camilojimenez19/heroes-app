import { HeroList } from "../components/HeroList"
import { VALID_PUBLISHERS } from "../constant"

const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher={VALID_PUBLISHERS.marvelComics} />
    </>
  )
}

export default MarvelPage