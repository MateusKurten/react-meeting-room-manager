import { useState } from "react";
import { createAccount } from "../../infra/users";

export default function SignUp({user, setUser}) {

    const [dadosForm, setDadosForm] = useState({ email: "", password: "", confirm: "" });

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setDadosForm((obj) => {
            return { ...obj, [fieldName]: fieldValue }
        });
    };

    const handleClick = (event) => {
        if (dadosForm.password === dadosForm.confirm) {
            setUser((obj) => {
                const r = {
                    ...obj,
                    ["email"]: dadosForm.email,
                    ["password"]: dadosForm.password,
                };
                return r;
            });
            createAccount(user, setUser);
        } else {
            alert("Please check your password confirmation.");
        }
    }

    return (
        <div className="container">
            <h3>Sign Up</h3>
            <form>
                <label htmlFor="email">Email:</label><br></br>
                <input type="text" name="email" value={dadosForm.email} onChange={handleChange} />
                <br />
                <label htmlFor="password">Password:</label><br></br>
                <input type="password" name="password" value={dadosForm.password} onChange={handleChange}  />
                <br />
                <label htmlFor="confirm">Confirm password:</label><br></br>
                <input type="password" name="confirm" value={dadosForm.confirm} onChange={handleChange}  />
                <br /><br />
                <input type="button" value="Create Account" onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
            </form>
        </div>
    )
}
