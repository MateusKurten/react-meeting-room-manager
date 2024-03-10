import { Outlet, Link } from "react-router-dom";
import Header from "../componentes/partials/Header";
import Footer from "../componentes/partials/Footer";
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Layout() {

    const [user, setUser] = useState({id:"", email:"", password:""});

    return (
        <div style={{ position: 'absolute', top: '10px' }}>
            <Header user={user} setUser={setUser} />
            <div className="ml-2">
                {user.id &&
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Outlet context={[user, setUser]} />
                        </LocalizationProvider>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
};
