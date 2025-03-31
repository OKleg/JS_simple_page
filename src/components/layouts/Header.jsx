// import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../reducers/authSlice';

const Header = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    // const [count, setCount] = useState(0)
    // const nav = useNavigate()
    return (
      <header>
        <div className={styles.header}>
            <div className={styles.header_left}>
                <a className='logo'></a>

                <a href='/'>На главную</a>
                <a href='/movies'>Фильмы</a>
            </div>
            <div className={styles.header_left}>
                <a href='/profile'>Профиль</a>
                {isAuthenticated?(
                    <button onClick={() => dispatch(logout())}>Выйти</button>
                ):<></>}
            </div>
        </div>
      </header>
    )
  }
  
  export default Header
  