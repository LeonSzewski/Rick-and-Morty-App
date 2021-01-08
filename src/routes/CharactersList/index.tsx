import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import CharacterItem from "./CharacterItem";
import { useStore, useDispatch } from "react-redux";
import { CharacterTypes } from "./types";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { setActivePage } from "../../redux/actions/listing";

const charactersQuery = gql`
  query($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
      }
    }
  }
`;

const CharactersList = () => {
  const {
    listing: { activePage },
  } = useStore().getState();
  const dispatch = useDispatch();

  console.log(activePage);

  const { loading, error, data, refetch } = useQuery(charactersQuery, {
    variables: { page: activePage, name: "" },
  });

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>Not found</div>;

  const { results, info } = data.characters;
  const submitSearch = (query: string) => {
    refetch({ name: query });
  };

  const onPageChange = (page: number) => {
    dispatch(setActivePage(page));
    refetch({ page });
  };

  return (
    <div>
      <div>lista postaci</div>
      <Search submit={submitSearch} />
      {results.map((result: CharacterTypes) => (
        <CharacterItem key={result.id} {...result} />
      ))}
      <Pagination onPageChange={onPageChange} pages={info.pages} />
    </div>
  );
};

export default CharactersList;
