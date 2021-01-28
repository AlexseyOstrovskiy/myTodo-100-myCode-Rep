import s from './InPrivateAcc.module.css';
import Navigation from '../Navigation/Navigation';

const InPrivateAcc = () => {
    return (
        <div>
            <Navigation />
            <div>Для входа в приватный аккаунт введите логин и пароль!</div>
            <p><strong>Логин:</strong>
                <input maxlength="25" size="40" name="login"></input></p>
            <p><strong>Пароль:</strong>
                <input type="password" maxlength="25" size="40" name="password"></input></p>
                <button>Войти</button>
        </div>
    )
}
export default InPrivateAcc;