import journeyData from "../data/journeyData";
import JourneyCard from "../components/JourneyCard";

const Journey = () => {
  return (
    <section className=" d-none d-md-block container py-5">

      <div className="timeline">

        <div className="timeline-line"></div>

        <div className="row">

          {journeyData.map((item) => (

            <div className="col-md-4 text-center" key={item.id}>

              <div className={`year-badge ${item.glow}`}>
                {item.year}
              </div>

            </div>

          ))}

        </div>

      </div>

      <div className="row mt-5 g-4">

        {journeyData.map((item) => (

          <div className="col-lg-4" key={item.id}>

            <JourneyCard {...item}/>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Journey;