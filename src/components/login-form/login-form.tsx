import { AuthData } from '../../types/auth-data';
import { useState, ChangeEvent } from 'react';

const validateEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const validatePassword = (password: string): boolean =>
  /^[A-za-z0-9_]{6,12}$/.test(password);

const validate = (formData: AuthData): boolean => {
  if (!validateEmail(formData.email)) {
    return false;
  }

  if (!validatePassword(formData.password)) {
    return false;
  }

  return true;
};

function LoginForm(): JSX.Element {
  const [isSubmitButtonOk, setIsSubmitButtonOk] = useState(false);
  const [formData, setFormData] = useState<AuthData>({
    email: '',
    password: '',
  });

  const handleTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    if (validate({ ...formData, [name]: value })) {
      setIsSubmitButtonOk(true);
    } else {
      setIsSubmitButtonOk(false);
    }
  };

  return (
    <form method="post" action="/">
      <div className="input-login">
        <label htmlFor="email">Введите e-mail</label>
        <input
          onChange={handleTextChange}
          value={formData.email}
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          required
        />
        <p className="input-login__error">{!validateEmail(formData.email) ? 'Заполните поле' : ''}</p>
      </div>
      <div className="input-login">
        <label htmlFor="passwordLogin">Введите пароль</label>
        <span>
          <input
            onChange={handleTextChange}
            value={formData.password}
            type="password"
            placeholder="• • • • • • • • • • • •"
            id="passwordLogin"
            name="password"
            autoComplete="off"
            required
          />
          <button
            className="input-login__button-eye"
            type="button"
          >
            <svg width="14" height="8" aria-hidden="true">
              <use xlinkHref="#icon-eye"></use>
            </svg>
          </button>
        </span>
        <p className="input-login__error">{!validatePassword(formData.password) ? 'Заполните поле' : ''}</p>
      </div>
      <button
        className="button login__button button--medium"
        type="submit"
        disabled={!isSubmitButtonOk}
      >Войти
      </button>
    </form>
  );
}

export default LoginForm;
