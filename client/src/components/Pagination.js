import { PaginationContainer, PrevPageButton, NextPageButton } from "./styles/Pagination.styled";

export default function Pagination({ typeChoice, currentPage, totalPages, pageUp, pageDown}) {

  return (
    <>
      {typeChoice &&
      <PaginationContainer>
        <PrevPageButton hide={currentPage === 1} onClick={() => pageDown()} />
        {`${currentPage} / ${totalPages}`}
        <NextPageButton hide={currentPage === totalPages} onClick={() => pageUp()} />
      </PaginationContainer>
      }
    </>
  )
}