import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import type { RootState,AppDispatch } from '../redux/store/store';
import { loginMethod } from '../redux/reducer/loginDetail';
import validateInfo from '../utilities/validation';
import CryptoAES from 'crypto-js/aes';

function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const loginCredentials:any = useSelector((state: RootState) => state.loginDetail.loginDetail);

  const initialState = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateInfo({values});
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const encryptedPassword = CryptoAES.encrypt(values.password, 'your-secret-key').toString();
      dispatch(loginMethod({ ...values, password: encryptedPassword }));
      setValues(initialState);
    }
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div>
          <form className='outerForm' onSubmit={handleLogin}>
            <div className="grid xl:grid-cols-1">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  placeholder="Please enter a valid email address in the format: name@example.com"
                  onChange={handleChange}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Please enter a valid password, such as 12345678"
                  onChange={handleChange}
                />
                {errors.password && <p className='error'>{errors.password}</p>}
              </div>
              <div>
                <button type='submit'>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
