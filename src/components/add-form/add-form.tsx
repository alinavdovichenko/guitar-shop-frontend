import { Link } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { AppRoute, GUITAR_TYPES, CountStrut, FormFieldName } from '../../consts';

function AddForm(): JSX.Element {
  const [guitarTypeState, setGuitarTypeState] = useState('');

  const [countStrutState, setCountStrutState] = useState('');

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      title: formData.get(FormFieldName.title),
      description: formData.get(FormFieldName.description),
      createdAt: formData.get(FormFieldName.createdAt),
      article: formData.get(FormFieldName.article),
      price: Number(formData.get(FormFieldName.price)),
    };

    /*
      dispatch(
        addProductAction({
          data,
          guitarTypeState,
          countStrutState,
        })
      );
    */
    return data;
  };

  return (
    <form
      action="#"
      className="add-item__form"
      method="get"
      onSubmit={submitHandle}
    >
      <div className="add-item__form-left">
        <div className="edit-item-image add-item__form-image">
          <div className="edit-item-image__image-wrap">
          </div>
          <div className="edit-item-image__btn-wrap">
            <button className="button button--small button--black-border edit-item-image__btn">
              Добавить
            </button>
            <button className="button button--small button--black-border edit-item-image__btn">
              Удалить
            </button>
          </div>
        </div>
        <div className="input-radio add-item__form-radio">
          <span>
            Выберите тип товара
          </span>
          {GUITAR_TYPES.map((type) => (
            <>
              <input
                type="radio"
                id={type.value}
                name="item-type"
                defaultValue={type.value}
                onClick={() => setGuitarTypeState(type.value)}
                checked={guitarTypeState === type.value}
              />
              <label htmlFor={type.value}>{type.title}</label>
            </>
          )
          )}
        </div>
        <div className="input-radio add-item__form-radio">
          <span>
            Количество струн
          </span>
          {Object.values(CountStrut).map((strut) => (
            <>
              <input
                type="radio"
                id={`string-qty-${strut}`}
                name="string-qty"
                value={strut}
                onClick={() => setCountStrutState(strut)}
                checked={+countStrutState === +strut}
              />
              <label htmlFor={`string-qty-${strut}`}>{strut}</label>
            </>
          )
          )}
        </div>
      </div>
      <div className="add-item__form-right">
        <div className="custom-input add-item__form-input">
          <label>
            <span>
              Дата добавления товара
            </span>
            <input
              defaultValue=""
              name={FormFieldName.createdAt}
              placeholder="Дата в формате 00.00.0000"
              readOnly
              type="text"
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
        <div className="custom-input add-item__form-input">
          <label>
            <span>
              Введите наименование товара
            </span>
            <input
              defaultValue=""
              name={FormFieldName.title}
              placeholder="Наименование"
              type="text"
              minLength={10}
              maxLength={100}
              required
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
        <div className="custom-input add-item__form-input add-item__form-input--price is-placeholder">
          <label>
            <span>
              Введите цену товара
            </span>
            <input
              defaultValue=""
              name={FormFieldName.price}
              placeholder="Цена в формате 00 000"
              type="text"
              min={100}
              max={1000000}
              required
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
        <div className="custom-input add-item__form-input">
          <label>
            <span>
              Введите артикул товара
            </span>
            <input
              defaultValue=""
              name={FormFieldName.article}
              placeholder="Артикул товара"
              type="text"
              minLength={15}
              maxLength={40}
              required
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
        <div className="custom-textarea add-item__form-textarea">
          <label>
            <span>
              Введите описание товара
            </span>
            <textarea
              name={FormFieldName.description}
              placeholder=""
              defaultValue=""
              minLength={20}
              maxLength={1024}
              required
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
      </div>
      <div className="add-item__form-buttons-wrap">
        <button
          className="button button--small add-item__form-button"
          type="submit"
        >
          Сохранить изменения
        </button>
        <Link to={AppRoute.Catalog}>
          <button
            className="button button--small add-item__form-button"
            type="button"
          >
            Вернуться к списку товаров
          </button>
        </Link>
      </div>
    </form>
  );
}

export default AddForm;
