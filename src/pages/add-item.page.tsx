import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../consts';
import { useState, ChangeEvent, FormEvent } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import RadioButtons from '../components/radio-buttons/radio-buttons';

function AddItemPage(): JSX.Element {

  const [formData, setFormData] = useState({
    titleField: '',
    descriptionField: '',
    dateField: '',
    articleField: '',
    priceField: '',
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // диспатч

    setFormData({
      titleField: '',
      dateField: '',
      descriptionField: '',
      articleField: '',
      priceField: ''});
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Страница «Добавление нового товара».</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <section className="add-item">
          <div className="container">
            <h1 className="add-item__title">Новый товар</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Main}>Вход</Link>
              </li>
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Catalog}>Товары</Link>
              </li>
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Product}>Новый товар</Link>
              </li>
            </ul>
            <form className="add-item__form" action="#" method="get" onSubmit={submitHandle}>
              <div className="add-item__form-left">
                <div className="edit-item-image add-item__form-image">
                  <div className="edit-item-image__image-wrap">
                  </div>
                  <div className="edit-item-image__btn-wrap">
                    <button className="button button--small button--black-border edit-item-image__btn">Добавить
                    </button>
                    <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
                  </div>
                </div>
                <RadioButtons />
              </div>
              <div className="add-item__form-right">
                <div className="custom-input add-item__form-input">
                  <label><span>Дата добавления товара</span>
                    <input onChange={fieldChangeHandle} type="text" name="date" value={formData.dateField} placeholder="Дата в формате 00.00.0000" readOnly />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input">
                  <label><span>Введите наименование товара</span>
                    <input onChange={fieldChangeHandle} type="text" name="title" value={formData.titleField} placeholder="Наименование" />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input add-item__form-input--price is-placeholder">
                  <label><span>Введите цену товара</span>
                    <input onChange={fieldChangeHandle} type="text" name="price" value={formData.priceField} placeholder="Цена в формате 00 000" />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input">
                  <label><span>Введите артикул товара</span>
                    <input onChange={fieldChangeHandle} type="text" name="sku" value={formData.articleField} placeholder="Артикул товара" />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-textarea add-item__form-textarea">
                  <label><span>Введите описание товара</span>
                    <textarea onChange={fieldChangeHandle} name="description" value={formData.descriptionField} placeholder=""></textarea>
                  </label>
                  <p>Заполните поле</p>
                </div>
              </div>
              <div className="add-item__form-buttons-wrap">
                <button className="button button--small add-item__form-button" type="submit">Сохранить изменения</button>
                <button className="button button--small add-item__form-button" type="button">Вернуться к списку товаров</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AddItemPage;
