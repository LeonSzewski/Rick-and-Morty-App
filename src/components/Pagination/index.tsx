import ReactPaginate from "react-paginate";
import "./styles.scss";

interface PaginationTypes {
  onPageChange: (page: number) => void;
  pages: number;
  activePage: number;
}

const Pagination = ({ onPageChange, pages, activePage }: PaginationTypes) => {
  const onChange = ({ selected }: { selected: number }) =>
    onPageChange(selected + 1);

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pages}
      marginPagesDisplayed={2}
      initialPage={activePage - 1}
      pageRangeDisplayed={3}
      onPageChange={onChange}
      containerClassName={"pagination"}
      activeClassName={"pagination__active"}
      disableInitialCallback
    />
  );
};

export default Pagination;
