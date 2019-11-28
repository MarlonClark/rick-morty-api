import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPortrait } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <section className="section has-background-grey-dark">
      {/* <!-- Main container --> */}
      <nav className="level is-desktop">
        {/* <!-- Left side --> */}
        <div className="level-left">
          <div className="level-item">
            <a
              href="https://marlonclark.me"
              className="title is-3 has-text-primary"
            >
              {"<M/C>"}
            </a>
          </div>
          <div className="level-item">
            <a href="/" className="title is-4 has-text-white">
              {`Characters `}
              <FontAwesomeIcon icon={faPortrait} />
            </a>
          </div>
          <div className="level-item">
            <a href="/about" className="title is-4 has-text-white">
              {`Info `}
              <FontAwesomeIcon icon={faInfoCircle} />
            </a>
          </div>
        </div>

        {/* <!-- Right side --> */}
        <div className="level-right">
          <div className="level-item">
            <h1 className="title main-heading has-text-primary">
              Rick and Morty
            </h1>
          </div>
        </div>
      </nav>
    </section>
  );
}
