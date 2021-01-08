import ReactPaginate from "react-paginate";

interface PaginationTypes {
  onPageChange: (page: number) => void;
  pages: number;
}

const Pagination = ({ onPageChange, pages }: PaginationTypes) => {
  const onChange = ({ selected }: { selected: number }) =>
    onPageChange(selected + 1);

  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
