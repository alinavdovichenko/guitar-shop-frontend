import {Helmet} from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { Product } from '../types/product';
import NotFoundPage from './not-found.page';
import EditForm from '../components/edit-form/edit-form';
import { AppRoute } from '../consts';

type ProductListPageProps = {
  products: Product[];
}


function EditItemPage({products}: ProductListPageProps): JSX.Element {

  const params = useParams();

  const selectedProduct = products.find((product) => product.id === Number(params.id));

  if (!selectedProduct) {
    return (<NotFoundPage />);
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Страница «Редактирование товара».</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <section className="edit-item">
          <div className="container">
            <h1 className="edit-item__title">{selectedProduct.title}</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Main}>Вход</Link>
              </li>
              <li className="breadcrumbs__item"><a className="link" href={AppRoute.Catalog}>Товары</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href={`/product/${selectedProduct.id}`}>{selectedProduct.title}</a>
              </li>
            </ul>
            <EditForm product={selectedProduct} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default EditItemPage;
