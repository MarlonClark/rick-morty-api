import React from "react";

export default function About() {
  return (
    <section class="section">
      <div class="container">
        <h1 class="title">Info</h1>
        <h2 class="subtitle">Why does this exist?</h2>
        <p className="content">
          Hi, I built this app to practice using <strong>React, Bulma,</strong>{" "}
          and a fun <strong>API</strong>.
        </p>
        <p className="content">
          Hopefully you enjoy the show as much as I do, but no worries if you
          don't! Thanks for checking out this project.
        </p>
        <p className="content is-right"> - Marlon</p>
      </div>
    </section>
  );
}
