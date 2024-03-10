import { userLogout } from "../../infra/users";

export default function Logout({user, setUser}) {

    function handleClick() {
        userLogout(user, setUser);
    }

    return (
        <div className="container">
            <form className="flex justify-between">
                <div className="ml-2">
                    Login: <b>{user.email}</b>
                </div>
                <div className="mr-2">
                    <input type="button" value="Logout" onClick={handleClick} />
                </div>
            </form>
        </div>
    )
}
