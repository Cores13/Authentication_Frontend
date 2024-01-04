import { useSelector } from "react-redux";
import { AppState } from "../../redux/rootReducer";
// import { UserResponseDto } from "../../api";
import { Navigate, Outlet } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";

const PrivateRoute = ({role, specificCondition}: any) => {
  const auth = useSelector((state: AppState) => state.auth);
  const isLoggedIn = !!auth.token;
  const userRole = auth.user?.role;

  const validRole = role ? role === userRole : true;
  const passedCondition =
    specificCondition !== undefined
      ? specificCondition(auth.user as any)
    //   ? specificCondition(auth.user as UserResponseDto)
      : true;

  return isLoggedIn && validRole && passedCondition ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout> 
    ) : 
    <Navigate to="/login" />;
}

export default PrivateRoute;