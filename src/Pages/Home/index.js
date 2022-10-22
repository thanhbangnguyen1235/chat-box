import React from "react";
import Card from "../../Components/Card";

export default function HomePage() {
  return (
    <section id="main">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Card></Card>
          </div>
        </div>
      </div>
    </section>
  );
}
