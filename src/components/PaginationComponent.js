import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//
export default function PaginationComponent({ totalPage }) {
  const handleChangePage = (item) => {
    console.log(item, "item");
  };

  //
  return (
    <Stack spacing={0}>
      <Pagination
        color="secondary"
        count={totalPage}
        renderItem={(item) => (
          <PaginationItem
            onClick={() => handleChangePage(item)}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
