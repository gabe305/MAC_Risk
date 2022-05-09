import React from "react";
import "./testimonials.scss";

function testimonials() {
  return (
    <div className="testimonials">
      <section className="testimonials__bigBox">
        <div className="testimonials__title">
          <h2>Testimonials</h2>
          <p>
            A summary of what it means to become a client of MAC Risk Services
          </p>
        </div>

        <div className="testimonials__client">
          <div className="testimonials__client--indi">
            <h3>Tim Allen</h3>
            <h6>Job Title</h6>

            <p className="testimonials__para">
              Raving reviews about how much MAC Risk Serivices has helped him
              and his company
            </p>
          </div>
          <div className="testimonials__client--indi">
            <h3>Tito Puente</h3>
            <h6>Job Title</h6>
            <p className="testimonials__para">
              Raving reviews about how much MAC Risk Serivices has helped him
              and his company
            </p>
          </div>
          <div className="testimonials__client--indi__last">
            <h3>WIllie Colon</h3>
            <h6>Job Title</h6>
            <p className="testimonials__para">
              Raving reviews about how much MAC Risk Serivices has helped him
              and his company
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default testimonials;
