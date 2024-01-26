import { useSelector } from "react-redux";
import { AppState } from "../../redux/rootReducer";
// import { UserResponseDto } from "../../api";
import { Navigate, Outlet } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";

const AuthRoute = ({role, specificCondition}: any) => {
    const isLoggedIn = useSelector((state: AppState) => !!state.auth.accessToken);
 
    if(!isLoggedIn){
      return (
        <Outlet />
      )
    }else {
      return <Navigate to="/" />;
    }
}

export default AuthRoute;