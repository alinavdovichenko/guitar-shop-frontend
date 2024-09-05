import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/main.page';
import AddItemPage from '../../pages/add-item.page';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../../components/private-route/private-route';
import NotFoundPage from '../../pages/not-found.page';
import EditItemPage from '../../pages/edit-item.page';
import ProductPage from '../../pages/product.page';
import ProductListPage from '../../pages/product-list.page';
import RegistrationPage from '../../pages/registration.page';
import { Product } from '../../types/product';

type AppProps = {
  products: Product[];
}

function App({products}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Register}
            element={<RegistrationPage />}
          />
          <Route
            path={AppRoute.Edit}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <EditItemPage products = {products}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Add}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <AddItemPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Product}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <ProductPage products = {products}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Catalog}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <ProductListPage
                  products = {products}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
