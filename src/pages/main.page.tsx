import {Helmet} from 'react-helmet-async';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import LoginForm from '../components/login-form/login-form';
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
            <LoginForm />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default MainPage;
