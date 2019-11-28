import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkullCrossbones,
  faHeartbeat,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

export default function CharacterCard(props) {
  let status = <FontAwesomeIcon />;
  if (props.status === "Alive") {
    status = <FontAwesomeIcon icon={faHeartbeat} />;
  } else if (props.status === "Dead") {
    status = <FontAwesomeIcon icon={faSkullCrossbones} />;
  } else {
    status = <FontAwesomeIcon icon={faQuestionCircle} />;
  }
  return (
    <div className="card has-background-primary">
      <div className="card-image">
        <figure className="image is-square">
          <img src={props.image} alt={"Image of " + props.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <p className="title is-size-3-desktop">{props.name}</p>
            <p className="subtitle">
              {status}
              {` ${props.status}`}
            </p>
          </div>
        </div>
        <div className="content">
          <p>
            {`${
              props.name
            } is a ${props.gender.toLowerCase()} ${props.species.toLowerCase()} from ${
              props.origin
            } and was introduced in episode ${props.episode}.`}
          </p>
        </div>
      </div>
    </div>
  );
}
