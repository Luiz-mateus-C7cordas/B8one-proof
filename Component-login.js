import './App.css';
import Container from './index'

export function Component() {
  return (
    <div className="app__container">
      <header className="header__container">
        <h1 className="header__title" >Academy <span className="header-title__color">Store</span></h1>
      </header>
      <main className="login__container">
        <div className="login-container__content">
          <h2 className="login__title">
            Olá, entre com e-mail e senha
          </h2>
          <div className="login__container">
            <form action="" className="login__form">
              <div className="email-form__container">
                <h4 className="email-form-input__title">Seu e-mail</h4>
                <input type="email" className="email-form__input" placeholder="exemplo@email.com"></ input>
              </div>
              <div className="password-form__container">
                <h4 className="password-form-input__title">Senha</h4>
                <input type="password" className="password-form__input" placeholder="Digite sua senha"></ input>
                <svg className="eye__icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10C1 10 4.63636 2.5 11 2.5C17.3636 2.5 21 10 21 10C21 10 17.3636 17.5 11 17.5C4.63636 17.5 1 10 1 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 12.8123C12.5062 12.8123 13.7273 11.5531 13.7273 9.99976C13.7273 8.44646 12.5062 7.18726 11 7.18726C9.49375 7.18726 8.27271 8.44646 8.27271 9.99976C8.27271 11.5531 9.49375 12.8123 11 12.8123Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="stay-connected__container">
                <input type="checkbox" className="stay-connected"></ input>
                <span className="stay-connected__text">
                  Manter conectado
                </span>
              </div>
              <button className="login__btn">Entrar</button>
            </form>
          </div>
          <div className="not-have-an-account__container">
            <a href="/" className="not-have-an-account__link">Não possui conta? Cadastre-se!</a>
          </div>
        </div>
      </main>
    </div>
  );
}



export default Component;
