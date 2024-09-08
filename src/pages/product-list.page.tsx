import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Cards from '../components/cards/cards';
import Sort from '../components/sort/sort';
import FilterForm from '../components/filter-form/filter-form';
import { Product } from '../types/product';
import { AppRoute } from '../consts';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

type ProductListPageProps = {
  products: Product[];
}

function ProductListPage({products}: ProductListPageProps): JSX.Element {

  return (
    <div className="wrapper">
      <Helmet>
        <title>Страница «Список товаров».</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <section className="product-list">
          <div className="container">
            <h1 className="product-list__title">Список товаров</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Main}>Вход</Link>
              </li>
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Catalog}>Товары</Link>
              </li>
            </ul>
            <div className="catalog">
              <FilterForm />
              <Sort />
              <Cards cards = {products} />
            </div>
            <Link className="button product-list__button button--red button--big" to={AppRoute.Add} aria-label="Добавить новый товар">Добавить новый товар</Link>
            <div className="pagination product-list__pagination">
              <ul className="pagination__list">
                <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
                </li>
                <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductListPage;
