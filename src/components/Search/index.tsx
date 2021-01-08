import { FormEvent, ChangeEvent, useState } from "react";

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
    <form onSubmit={submitSearch}>
      <input
        type="text"
        placeholder="Search for..."
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Search;
