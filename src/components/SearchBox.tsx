import * as React from 'react';

interface ISrchBxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ searchChange }: ISrchBxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;