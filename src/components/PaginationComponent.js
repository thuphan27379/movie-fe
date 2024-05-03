import * as React from "react";
import Pagination from "@mui/material/Pagination";
// import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSearchParams } from "react-router-dom";

//
export default function PaginationComponent({ totalPage }) {
  const [page, setPage] = React.useState(1);
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChangePage = (event, value) => {
    setPage(value);
    setSearchParams({ page: value });
  };

  // custom css
  // .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root {}
  return (
    <Stack spacing={2}>
      <Pagination
        sx={{
          "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root": {
            color: "white",
            // minWidth: "100px",
          },
          "& .css-1v2lvtn-MuiPaginationItem-root": {
            color: "white",
          },
          "& .css-1ijdzd6-MuiPagination-root": {
            minWidth: "100px",
          },

          minWidth: "100px",
        }}
        size="medium"
        variant="text"
        color="primary"
        count={totalPage}
        page={page}
        onChange={handleChangePage}
      />
    </Stack>
  );
}
