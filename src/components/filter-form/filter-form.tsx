import {CountStrut, FILTER_GUITAR_TYPES} from '../../consts';
function FilterForm(): JSX.Element {

  return (
    <form className="catalog-filter" action="#" method="post">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        {FILTER_GUITAR_TYPES.map((type) => (
          <div key={type.value} className="form-checkbox catalog-filter__block-item">
            <input
              className="visually-hidden"
              type="checkbox"
              id={type.value}
              name={type.value}
            />
            <label htmlFor={type.value}>{type.title}</label>
          </div>
        )
        )}
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        {Object.values(CountStrut).map((strut) => (
          <div key={strut} className="form-checkbox catalog-filter__block-item">
            <input
              className="visually-hidden"
              type="checkbox"
              id={`${strut}-strings`}
              name={`${strut}-strings`}
            />
            <label htmlFor={`${strut}-strings`}>{strut}</label>
          </div>
        )
        )}
      </fieldset>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
    </form>
  );
}

export default FilterForm;
