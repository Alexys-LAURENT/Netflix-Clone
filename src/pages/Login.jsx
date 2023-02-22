import '../css/Login.css'
import { useState } from 'react';
import users from '../data/users.json';
import { useNavigate } from 'react-router-dom';
function Login({ setUserLoged }) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Login() {
        let user = users.find(user => user.email === email && user.mdp === password)
        if (user) {
            setUserLoged(user);
            navigate('/Home');
        } else {
            alert('Email ou mot de passe incorrect')
        }
    }

    return (
        <div className="Main">
            <div className='body-login'>
                <div className="Form">
                    <h1>LOGIN</h1>
                    <form>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br />
                        <p>Mot de passe oublié ?</p>
                        <button type="submit" onClick={() => Login()}>Login</button>
                    </form>
                    <div className='Register-switch'>
                        <p>Pas encore de compte ?</p>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login