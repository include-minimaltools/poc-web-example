import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAccount } from "./hooks";
import { MainLayout } from "./layout";
import { OrganizationPage } from "./pages";

const App = () => {
  const navigate = useNavigate();
  const { isAuth, login } = useAccount();

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
          <Route
            path='/login'
            element={
              <button
                className='btn'
                onClick={() => {
                  login();
                  navigate("/");
                }}
              >
                Iniciar sesion
              </button>
            }
          />
          <Route path='*' element={<Navigate to={"/login"} />} />
        </>
      )}
    </Routes>
  );
};

export default App;
