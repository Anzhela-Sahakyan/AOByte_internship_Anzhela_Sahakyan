import React from "react";
import { Box } from "@mui/material";
import { Pagination as PaginationComponent } from "@mui/material";

export const Pagination = ({ elementCount, postsPerPage = 5 }) => {
  const pageCount = Math.ceil(elementCount / postsPerPage);
  return (
    <Box>
      <PaginationComponent count={pageCount} />
    </Box>
  );
};
