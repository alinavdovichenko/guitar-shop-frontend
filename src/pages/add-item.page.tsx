import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../consts';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import AddForm from '../components/add-form/add-form';

function AddItemPage(): JSX.Element {
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
            <AddForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AddItemPage;
