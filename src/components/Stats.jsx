import React from "react";
import stats from "../data/stats";

import "../styles/Stats.css";

function Stats() {
    return (
        <section className="d-none d-sm-block container py-5 my-4">
            <div className="stats-card">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`stat ${
                            index !== stats.length - 1
                                ? "border-end"
                                : ""
                        }`}
                    >
                        <h1>{item.number}</h1>

                        <p>{item.title}</p>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default Stats;