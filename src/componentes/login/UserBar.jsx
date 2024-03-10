import SignUp from "./SignUp";
import Login from "./Login";
import Logout from "./Logout";
import logo from "./logo.png"

export default function UserBar({ user, setUser }) {
    if (user.id) {
      return <Logout user={user} setUser={setUser} />;
    } else {
      return (
        <div className="flex">
            <div>
              <Login user={user} setUser={setUser} />
              <SignUp user={user} setUser={setUser} />
            </div>
  
            <div className="flex flex-auto justify-center ml-8">
              <img src={logo} alt="Logo" className="h-96 w-96 self-center" />
            </div>
        </div>
      );
    }
  }
