import React from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q ?? "",
  });

  const messageAlert =
    q === "" ? (
      <div className="alert alert-primary">Search a hero</div>
    ) : (
      !heroes.length && (
        <div className="alert alert-danger">
          {" "}
          No hero with <b>{q}</b>
        </div>
      )
    );

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              className="form-control"
              placeholder="Search a hero"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {messageAlert}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
