import {Helmet} from 'react-helmet-async';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import RegistrationForm from '../components/registration-form/registration-form';
import { AppRoute } from '../consts';
import { Link } from 'react-router-dom';

function LoginPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Страница «Вход».</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Войти</h1>
            <p className="login__text">Hовый пользователь? <Link className="login__link"to={AppRoute.Register}>Зарегистрируйтесь</Link> прямо сейчас</p>
            <RegistrationForm />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
