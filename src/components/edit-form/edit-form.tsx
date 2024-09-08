import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { useState, ChangeEvent, FormEvent } from 'react';
import dayjs from 'dayjs';
import { AppRoute, GUITAR_TYPES, CountStrut } from '../../consts';

type EditFormProps = {
    product: Product;
}


function EditForm({product}: EditFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    titleField: product.title,
    descriptionField: product.description,
    dateField: dayjs(product.createdAt).format('DD.MM.YYYY'),
    productPhotoField: product.productPhoto,
    articleField: product.article,
    priceField: product.price,
  });

  const [guitarTypeState, setGuitarTypeState] = useState(product.guitarType);

  const [countStrutState, setCountStrutState] = useState(product.countStrut);

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const resetForm = () => {
    setGuitarTypeState(product.guitarType);
    setCountStrutState(product.countStrut);
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    /*
      dispatch(
        submitUpdateProductAction({
          id: product.id,
          formData,
          guitarTypeState,
          countStrutState: Number(countStrutState),
        })
      );
    */
    resetForm();
  };

  return (
    <form
      action="#"
      className="edit-item__form"
      method="get"
      onSubmit={submitHandle}
    >
      <div className="edit-item__form-left">
        <div className="edit-item-image edit-item__form-image">
          <div className="edit-item-image__image-wrap">
            <img
              alt="СURT Z30 Plus"
              className="edit-item-image__image"
              height="332"
              src={`img/content/add-item-${product.id}.png`}
              srcSet={`img/content/add-item-${product.id}@2x.png 2x`}
              width="133"
            />
          </div>
          <div className="edit-item-image__btn-wrap">
            <button className="button button--small button--black-border edit-item-image__btn">
              Заменить
            </button>
            <button className="button button--small button--black-border edit-item-image__btn">
              Удалить
            </button>
          </div>
        </div>
        <div className="input-radio edit-item__form-radio">
          <span>
            Тип товара
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
        <div className="input-radio edit-item__form-radio">
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
      <div className="edit-item__form-right">
        <div className="custom-input edit-item__form-input">
          <label>
            <span>
              Дата добавления товара
            </span>
            <input
              onChange={fieldChangeHandle}
              defaultValue={formData.dateField}
              name="date"
              placeholder="Дата в формате 00.00.0000"
              readOnly
              type="text"
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
        <div className="custom-input edit-item__form-input">
          <label>
            <span>
              Наименование товара
            </span>
            <input
              onChange={fieldChangeHandle}
              defaultValue={formData.titleField}
              name="title"
              placeholder="Наименование"
              type="text"
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
        <div className="custom-input edit-item__form-input edit-item__form-input--price">
          <label>
            <span>
              Цена товара
            </span>
            <input
              onChange={fieldChangeHandle}
              defaultValue={formData.priceField}
              name="price"
              placeholder="Цена в формате 00 000"
              type="text"
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
        <div className="custom-input edit-item__form-input">
          <label>
            <span>
              Артикул товара
            </span>
            <input
              onChange={fieldChangeHandle}
              defaultValue={formData.articleField}
              name="sku"
              placeholder="Артикул товара"
              type="text"
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
        <div className="custom-textarea edit-item__form-textarea">
          <label>
            <span>
              Описание товара
            </span>
            <textarea
              onChange={fieldChangeHandle}
              defaultValue={formData.descriptionField}
              name="description"
              placeholder=""
            />
          </label>
          <p>
            Заполните поле
          </p>
        </div>
      </div>
      <div className="edit-item__form-buttons-wrap">
        <button
          className="button button--small edit-item__form-button"
          type="submit"
        >
          Сохранить изменения
        </button>
        <Link to={AppRoute.Catalog}>
          <button
            className="button button--small edit-item__form-button"
            type="button"
          >
            Вернуться к списку товаров
          </button>
        </Link>
      </div>
    </form>
  );
}

export default EditForm;
