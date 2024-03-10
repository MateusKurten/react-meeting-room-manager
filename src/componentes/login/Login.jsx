import { userLogin } from "../../infra/users";

export default function Login({ user, setUser }) {

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setUser((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        });
    };

    const handleLogin = (event) => {
        userLogin(user, setUser);
    }

    return (
        <div className="container">
            <h3>Login</h3>
            <form>
                <label htmlFor="user">Email:</label>
                <br />
                <input type="text" name="email" value={user.email} onChange={handleChange} />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" name="password" value={user.password} onChange={handleChange} />
                <br /><br />
                <input type="button" value="Login" onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>

            </form>
        </div>
    )
}

