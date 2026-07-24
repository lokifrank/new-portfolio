import React from "react";

const SkillCard = ({
  number,
  icon,
  title,
  description,
  tags,
  glow,
}) => {
  return (
    <div className={`skill-card ${glow}`}>
        <span className="card-number">{number}</span>

        <div className="icon-box">
          <i className={icon}></i>
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tags">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{
                color: tag.color,
                background: tag.background,
                border: `1px solid ${tag.border}`,
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>
    </div>
  );
};

export default SkillCard;