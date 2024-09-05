import { useParams, Link } from 'react-router-dom';
import { Product } from '../types/product';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import NotFoundPage from './not-found.page';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../consts';

type ProductPageProps = {
  products: Product[];
}

function ProductPage({products}: ProductPageProps): JSX.Element {
  const params = useParams();
  const selectedProduct = products.find((product) => product.id === Number(params.id));
  if (!selectedProduct) {
    return (<NotFoundPage />);
  }
  return (
    <div className="wrapper">
      <Helmet>
        <title>Страница «Карточка товара».</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Товар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Main}>Главная</Link>
            </li>
            <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Catalog}>Каталог</Link>
            </li>
            <li className="breadcrumbs__item"><Link className="link" to={`/products/${selectedProduct.id}`}>Товар</Link>
            </li>
          </ul>
          <div className="product-container"><img className="product-container__img" src={selectedProduct.productPhoto} srcSet={`${selectedProduct.productPhoto}@2x.png 2x`} width="90" height="235" alt="Картинка гитары" />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{selectedProduct.title}</h2>
              <br/>
              <br/>
              <div className="tabs"><a className="button button--medium tabs__button" href="#characteristics">Характеристики</a><a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
                <div className="tabs__content" id="characteristics">
                  <table className="tabs__table">
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Артикул:</td>
                      <td className="tabs__value">{selectedProduct.article}</td>
                    </tr>
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Тип:</td>
                      <td className="tabs__value">{selectedProduct.guitarType}</td>
                    </tr>
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Количество струн:</td>
                      <td className="tabs__value">{selectedProduct.countStrut} струнная</td>
                    </tr>
                  </table>
                  <p className="tabs__product-description hidden">{selectedProduct.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
