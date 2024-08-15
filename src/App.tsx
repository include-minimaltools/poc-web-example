import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useAccount } from "./hooks";
import { MainLayout } from "./layout";
import { OrganizationPage } from "./pages";
import LoginPage from "./pages/login/LoginPage";

const App = () => {
  const { isAuth } = useAccount();

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route element={<MainLayout />}>
            <Route
              path='/'
              element={<Link to='/organization'>sdfasdfsadfsadfasdf</Link>}
            />
            <Route path='/organization' element={<OrganizationPage />} />
          </Route>
          <Route
            path='*'
            element={
              <>
                404<Link to={"/"}>Volver</Link>
              </>
            }
          />
        </>
      ) : (
        <>
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<Navigate to={"/login"} />} />
        </>
      )}
    </Routes>
  );
};

export default App;
