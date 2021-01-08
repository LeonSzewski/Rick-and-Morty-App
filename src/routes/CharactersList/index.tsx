import { gql, useQuery } from "@apollo/client";
import CharacterItem from "./CharacterItem";
import { CharacterTypes } from "./types";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { BrowserRouter } from "react-router-dom";

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
  const { loading, error, data, refetch } = useQuery(charactersQuery, {
    variables: { page: 1, name: "" },
  });

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>Not found</div>;

  const { results, info } = data.characters;
  const goPrevPage = () => refetch({ page: info.prev });
  const goNextPage = () => refetch({ page: info.next });

  const submitSearch = (query: string) => {
    refetch({ name: query });
  };

  return (
    <div>
      <div>lista postaci</div>
      <Search submit={submitSearch} />
      {results.map((result: CharacterTypes) => (
        <CharacterItem key={result.id} {...result} />
      ))}
      <Pagination prevPage={goPrevPage} nextPage={goNextPage} />
    </div>
  );
};

export default CharactersList;
