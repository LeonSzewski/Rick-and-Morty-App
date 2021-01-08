interface PaginationTypes {
  prevPage: () => void;
  nextPage: () => void;
}

const Pagination = ({ prevPage, nextPage }: PaginationTypes) => {
  return (
    <div>
      <div onClick={prevPage}>{"<"}</div>
      <div onClick={nextPage}>{">"}</div>
    </div>
  );
};

export default Pagination;
