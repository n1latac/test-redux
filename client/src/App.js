import Home from "./pages/Home";
import {Route, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import Layout from "./components/Layout";
import SignUpForm from './components/SignUp'
import SignInForm from "./components/SignIn";
import history from "./browserHistory";

function App() {
  return (
    <HistoryRouter history={history}>
    <Layout>
    <Routes>
        <Route element={<Home/>} path={'/'}/>
        <Route element={<SignUpForm/>} path={'/signUp'}/>
        <Route element={<SignInForm/>} path={'/signIn'}/>
    </Routes>
    </Layout>
    </HistoryRouter>
  );
}

export default App;
