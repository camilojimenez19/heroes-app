import { HeroList } from "../components/HeroList"
import { VALID_PUBLISHERS } from "../constant"


const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroList publisher={VALID_PUBLISHERS.dcComics} />
    </>
  )
}

export default DcPage