import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthLayout from "./layouts/authLayout";
import DashboardLayout from "./layouts/dashboardLayout";

import "antd/dist/reset.css";
import "./assets/css/styles.css";
function App() {
  const { isUser } = useSelector((state) => state.authReducer);

  return (
    <div>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout />} />
        <Route path="/user" render={(props) => <DashboardLayout />} />

        {isUser === null ? (
          <Redirect from="*" to="/auth/sign-in" />
        ) : (
          <Redirect from="*" to="/user/dashboard" />
        )}
      </Switch>
    </div>
  );
}

export default App;
