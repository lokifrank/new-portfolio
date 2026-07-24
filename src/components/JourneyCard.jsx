const JourneyCard = ({
  icon,
  title,
  description,
  tags,
  glow
}) => {

  return (

    <div className={`journey-card ${glow}`}>

      <div className="journey-icon">

        <i className={icon}></i>

      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="d-flex justify-content-center flex-wrap gap-2">

        {tags.map((tag,index)=>(

          <span
            key={index}
            className="tag"
            style={{
              color:tag.color,
              background:tag.bg,
              border:`1px solid ${tag.border}`
            }}
          >
            {tag.name}
          </span>

        ))}

      </div>

    </div>

  );

};

export default JourneyCard;