import { FormEvent, ChangeEvent, useState } from "react";
import "./styles.scss";

interface SearchTypes {
  submit: (query: string) => void;
}

const Search = ({ submit }: SearchTypes) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(query);
  };

  return (
    <div className="search">
      <form role="search" onSubmit={submitSearch}>
        <input
          type="search"
          placeholder="Znajdź postać ..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
