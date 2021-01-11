import { useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import CharacterItem from "./CharacterItem";
import { useStore, useDispatch } from "react-redux";
import { CharacterTypes } from "./types";
import Pagination from "../../components/Pagination";
import Search from "../../containers/Search";
import WithLoader from "../../containers/WithLoader";
import Image from "../../components/Image";
import { setActivePage } from "../../redux/actions/listing";
import background from "./background.png";
import "./styles.scss";

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
  const myRef = useRef<HTMLDivElement>(null!);
  const {
    listing: { activePage },
  } = useStore().getState();
  const dispatch = useDispatch();

  const { loading, error, data, refetch } = useQuery(charactersQuery, {
    notifyOnNetworkStatusChange: true,
    variables: { page: activePage, name: "" },
  });

  const submitSearch = (query: string) => {
    refetch({ name: query });
  };

  const scrollToList = () => {
    if (myRef) {
      myRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const onPageChange = (page: number) => {
    dispatch(setActivePage(page));
    scrollToList();
    refetch({ page: page });
  };

  return (
    <div>
      <div className="main-header">
        <div className="main-header__background">
          <Image src={background} />
        </div>
        <div className="main-header__scrollTo">
          <div className="arrow bounce"></div>
        </div>
      </div>
      <div className="character-list__container container" ref={myRef}>
        <div className="main-header__search">
          <Search submit={submitSearch} />
        </div>
        <WithLoader pending={loading}>
          {data && !error ? (
            <>
              <ul className="character-list">
                {data.characters.results.map((result: CharacterTypes) => (
                  <CharacterItem key={result.id} {...result} />
                ))}
              </ul>
              <Pagination
                onPageChange={onPageChange}
                pages={data.characters.info.pages}
                activePage={activePage}
              />
            </>
          ) : (
            <h3 className="character-list__not-found">Nic nie znaleziono</h3>
          )}
        </WithLoader>
      </div>
    </div>
  );
};

export default CharactersList;
