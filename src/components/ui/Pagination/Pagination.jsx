import { useState, useEffect, useCallback } from "react";

const Pagination = ({ data, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (data) {
      const total = Math.ceil(data.length / itemsPerPage);
      setTotalPages(total);
    }
  }, [data, itemsPerPage]);

  const handlePageData = useCallback(() => {
    if (data) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = data.slice(startIndex, endIndex);
      onPageChange(paginatedData);
    }
  }, [currentPage, data, itemsPerPage, onPageChange]);

  useEffect(() => {
    handlePageData();
  }, [currentPage, data, itemsPerPage, handlePageData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <div className="page-controls">
        <span>
          Page {currentPage} from {totalPages}
        </span>
        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
          &laquo;
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lsaquo;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &rsaquo;
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;