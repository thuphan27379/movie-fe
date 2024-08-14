import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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
  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pagination
        sx={{
          minWidth: "100px",
          display: "flex",
          justifyContent: "center",
          paddingRight: "30px",
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
