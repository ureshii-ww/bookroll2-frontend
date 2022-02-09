import React, { FC, Fragment } from 'react';

interface ClubHeaderBookProps {
  book: {
    title: string,
    authors: string[]
  } | null
}

const ClubHeaderBook: FC<ClubHeaderBookProps> = ({ book, ...rest }) => {
  return (
    <div>
      <div>Книга</div>
      {book
        ?
        <Fragment>
          <div>{book.title}</div>
          <div>{book.authors.join(', ')}</div>
        </Fragment>
        :
        <div>Не выбрана</div>}
    </div>
  );
};

export default ClubHeaderBook;