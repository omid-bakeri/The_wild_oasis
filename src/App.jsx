import GlobalStyles from "./styles/Global Styles/GlobalStyles.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Account from "./pages/Account.jsx";
import Bookings from "./pages/Bookings.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Cabins from "./pages/Cabins.jsx";
import Login from "./pages/Login.jsx";
import Settings from "./pages/Settings.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Users from "./pages/Users.jsx";
import AppLayout from "./ui/AppLayout.jsx";

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route index element={<Navigate replace to='dashboard'/>}/>
                        <Route path="account" element={<Account/>}/>
                        <Route path="bookings" element={<Bookings/>}/>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="cabins" element={<Cabins/>}/>
                        <Route path="users" element={<Users/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Route>

                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<PageNotFound/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;