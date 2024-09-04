import {Helmet} from 'react-helmet-async';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import RegistrationForm from '../components/registration-form/registration-form';
import { AppRoute } from '../consts';
import { Link } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Главная страница. Вход.</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Войти</h1>
            <p className="login__text">Hовый пользователь? <Link className="login__link"to={AppRoute.Register}>Зарегистрируйтесь</Link> прямо сейчас</p>
            <RegistrationForm />
          </section>
          <br></br>
          <h1>Список страниц</h1>
          <ol>
            <li>
              <Link className="login__link" to={AppRoute.Product}>Товар — product</Link>
            </li>
            <li>
              <Link className="login__link" to={AppRoute.Catalog}>Просмотр товаров — product-list</Link>
            </li>
            <li>
              <Link className="login__link" to={AppRoute.Register}>Регистрация — registration</Link>
            </li>
            <li>
              <Link className="login__link" to={AppRoute.Login}>Вход — login</Link>
            </li>
            <li>
              <Link className="login__link" to={AppRoute.Add}>Добавление товара — add-item</Link>
            </li>
            <li>
              <Link className="login__link" to={AppRoute.Edit}>Редактирование товара — edit-item</Link>
            </li>
            <li>
              <Link className="login__link" to={AppRoute.NotFound}>404 — error-404</Link>
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
