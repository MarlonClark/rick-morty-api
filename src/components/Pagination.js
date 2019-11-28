import React from "react";

export default function Pagination(props) {
  return (
    <nav
      className="pagination is-centered is-rounded is-medium"
      role="navigation"
      aria-label="pagination"
    >
      <button
        onClick={props.turnPage}
        value="prev"
        className="pagination-previous has-background-white"
      >
        Previous
      </button>
      <button
        onClick={props.turnPage}
        value="next"
        className="pagination-next has-background-white"
      >
        Next page
      </button>
      <ul className="pagination-list">
        <li>
          <button
            onClick={props.turnPage}
            value="first"
            className="pagination-link has-background-white"
            aria-label="Goto the first page"
          >
            First
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <button
            onClick={props.turnPage}
            value="prev"
            className="pagination-link has-background-white"
            aria-label={`Goto page  ${props.page - 1}`}
          >
            {props.page - 1}
          </button>
        </li>
        <li>
          <button
            className="pagination-link is-current"
            aria-label={`Page ${props.page}`}
            aria-current="page"
          >
            {props.page}
          </button>
        </li>
        <li>
          <button
            onClick={props.turnPage}
            value="next"
            className="pagination-link has-background-white"
            aria-label={`Goto page  ${props.page + 1}`}
          >
            {props.page + 1}
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <button
            onClick={props.turnPage}
            value="last"
            className="pagination-link has-background-white"
            aria-label="Goto the last page"
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
}
