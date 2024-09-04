
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { AppRoute } from '../consts';
import { Link } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <h1>Список страниц</h1>
          <ol>
            <li>
              <Link className="login__link" to={AppRoute.Product}>Товар — product</Link>
            </li>
            <li>
              <Link className="login__link" to={AppRoute.Catalog}>Просмотр товаров — product-list</Link>
            </li>
            <li>
              <a href="registration.html">Регистрация — registration.html</a>
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
