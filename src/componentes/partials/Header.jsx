import Menu from "./Menu";
import UserBar from "../login/UserBar"

export default function Header({user, setUser}) {

    return (
        <div >
            <UserBar user={user} setUser={setUser} />
            {
                user.id && 
                <Menu></Menu>
            }
        </div>
    );
}