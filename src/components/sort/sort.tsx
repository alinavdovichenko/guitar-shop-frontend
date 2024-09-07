import {SortDirection, SortType} from '../../consts';
import {useState} from 'react';
function Sort(): JSX.Element {

  const [sortTypeState, setSortTypeState] = useState(SortType.Date);
  const [sortDirectionState, setSortDirectionState] = useState(SortDirection.Up);

  // Функции для изменения сортировки при взаимодействии с бэкендом

  /*function handleChangeSorting(item: SortType) {
    dispatch(setSortType(item));
  }
  function handleChangeSortingDirection(item: SortDirection) {
    dispatch(setSortDirection(item));
  }*/

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button className={`catalog-sort__type-button ${sortTypeState === SortType.Date ? 'catalog-sort__type-button--active' : ''}`} aria-label="по цене" onClick={() => setSortTypeState(SortType.Date)}>по дате</button>
        <button className={`catalog-sort__type-button ${sortTypeState === SortType.Price ? 'catalog-sort__type-button--active' : ''}`} aria-label="по цене" onClick={() => setSortTypeState(SortType.Price)}>по цене</button>
      </div>
      <div className="catalog-sort__order">
        <button className={`catalog-sort__order-button catalog-sort__order-button--up ${sortDirectionState === SortDirection.Up ? 'catalog-sort__order-button--active' : ''}`} aria-label="По возрастанию" onClick={() => setSortDirectionState(SortDirection.Up)}></button>
        <button className={`catalog-sort__order-button catalog-sort__order-button--down ${sortDirectionState === SortDirection.Down ? 'catalog-sort__order-button--active' : ''}`} aria-label="По убыванию" onClick={() => setSortDirectionState(SortDirection.Down)}></button>
      </div>
    </div>
  );
}

export default Sort;
