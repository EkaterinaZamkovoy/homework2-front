import React from 'react';

// добавить в проект иконки и импортировать
import downIcon from './../../assets/icon-down.png';
import upIcon from './../../assets/icon-up.png';
import noneIcon from './../../assets/no-sort.png';

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  return sort === '' ? down : sort === down ? up : '';
  // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = 'hw15',
}) => {
  const up = '0' + value;
  const down = '1' + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + '-sort-' + value} onClick={onChangeCallback}>
      <img
        id={id + '-icon-' + sort}
        src={icon}
        style={{ padding: '6px', display: 'inline-block' }}
      />
    </span>
  );
};

export default SuperSort;
