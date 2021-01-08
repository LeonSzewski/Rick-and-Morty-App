import { gql, useQuery } from "@apollo/client";
import CharacterItem from "./CharacterItem";
import { CharacterTypes } from "./types";
import Pagination from "../../components/Pagination";
import { useState } from "react";

type CharacterDataTypes = { id: string } & CharacterTypes;

const charactersQuery = gql`
  query($page: Int!) {
    characters(page: $page, filter: {}) {
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
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(charactersQuery, {
    variables: { page: page },
  });

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>Not found</div>;

  const { results, info } = data.characters;
  const goPrevPage = () => setPage(info.prev);
  const goNextPage = () => setPage(info.next);

  return (
    <div>
      <div>lista postaci</div>
      {results.map(({ id, ...rest }: CharacterDataTypes) => (
        <CharacterItem key={id} {...rest} />
      ))}
      <Pagination prevPage={goPrevPage} nextPage={goNextPage} />
    </div>
  );
};

export default CharactersList;
