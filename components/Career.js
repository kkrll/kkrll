import React from "react";
import JOBS from "../content/jobs";

const Career = () => {
  return (
    <section>
      <h2>Career</h2>
      <div className="columns">
        <div className="contents">
          {Object.values(JOBS).map((job) => {
            return <p>{job.company}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
