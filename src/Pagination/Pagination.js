import React, { useState } from "react";
import { Box } from "@mui/material";
import { Pagination as PaginationComponent } from "@mui/material";
import posts from "../Data/posts";

export const Pagination = ({ elementCount, postsPerPage = 3 }) => {
  const pageCount = Math.ceil(elementCount / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <Box>
      <PaginationComponent
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
      />
    </Box>
  );
};
