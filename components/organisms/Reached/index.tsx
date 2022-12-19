import ReachedItems from "../../molecules/ReachedItems";

export default function Reached(){
  return(
    <section className="reached pt-50 pb-50">
    <div className="container-fluid">
      <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
        <ReachedItems title="290m+" desc1="Player Top Up" />
       <ReachedItems title="12.500" desc1="Games Available" />
       <ReachedItems title="99,9%" desc1="Happy Players"/>
       <ReachedItems title="4.8" desc1="Rating WorldWide" />
      </div>
    </div>
  </section>
  )
}