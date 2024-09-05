import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import RegistrationForm from '../components/registration-form/registration-form';
import {Helmet} from 'react-helmet-async';

function RegistrationPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Страница «Регистрация».</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Регистрация</h1>
            <RegistrationForm />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RegistrationPage;
