import Home from "./pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Route, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Layout from "./components/Layout";
import SignUpForm from './components/SignUp'
import SignInForm from "./components/SignIn";
import history from "./browserHistory";
import { getMeRequest } from "./actions/actionCreator";

function App(props) {
  const dispatch = useDispatch()

  useEffect(() => {
      props.getMeRequest()
  }, [dispatch])

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

const mapDispatchToProps = {
  getMeRequest
}

export default connect(null, mapDispatchToProps)(App);
