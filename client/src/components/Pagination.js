import { PaginationContainer, PrevPageButton, NextPageButton } from "./styles/Pagination.styled";

export default function Pagination({ typeChoice, page, pageUp, pageDown}) {

  return (
    <>
      {typeChoice &&
      <PaginationContainer>
        <PrevPageButton onClick={() => (page > 1) ? pageDown() : ''}/>
        {page}
        <NextPageButton onClick={() => pageUp()}/>
      </PaginationContainer>
      }
    </>
  )
}