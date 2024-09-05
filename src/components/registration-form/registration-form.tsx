import { User } from '../../types/user';
import { useState, ChangeEvent } from 'react';

const validateName = (name: string): boolean =>
  /^[A-zА-ЯЁ]{1,15}$/i.test(name);

const validateEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const validatePassword = (password: string): boolean =>
  /^[A-Z0-9А-ЯЁ_]{6,12}$/i.test(password);

const validate = (formData: User): boolean => {
  if (!validateName(formData.name)) {
    return false;
  }

  if (!validateEmail(formData.email)) {
    return false;
  }

  if (!validatePassword(formData.password)) {
    return false;
  }

  return true;
};

function RegistrationForm(): JSX.Element {
  const [isSubmitButtonOk, setIsSubmitButtonOk] = useState(false);
  const [formData, setFormData] = useState<User>({
    name: '',
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
        <label htmlFor="name">Введите имя</label>
        <input
          onChange={handleTextChange}
          value={formData.name}
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          required
        />
        <p className="input-login__error">{!validateName(formData.name) ? 'Заполните поле' : ''}</p>
      </div>
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
        <label htmlFor="password">Придумайте пароль</label>
        <span>
          <input
            onChange={handleTextChange}
            value={formData.password}
            type="password"
            placeholder="• • • • • • • • • • • •"
            id="password" name="password"
            autoComplete="off"
            required
          />
          <button className="input-login__button-eye" type="button">
            <svg width="14" height="8" aria-hidden="true">
              <use xlinkHref="#icon-eye"></use>
            </svg>
          </button>
        </span>
        <p className="input-login__error">{!validatePassword(formData.password) ? 'Заполните поле' : ''}</p>
      </div>
      <button className="button login__button button--medium" type="submit" disabled={!isSubmitButtonOk}>Зарегистрироваться</button>
    </form>
  );
}

export default RegistrationForm;
