import Home from "./pages/Home";
import { useEffect } from "react";
import {Route, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Layout from "./components/Layout";
import SignUpForm from './components/SignUp'
import SignInForm from "./components/SignIn";
import AddPost from "./pages/AddPostPage";
import history from "./browserHistory";
import { getMeRequest } from "./actions/actionCreator";

function App(props) {

  useEffect(() => {
      props.getMeRequest()
  }, [])

  return (
    <HistoryRouter history={history}>
    <Layout>
    <Routes>
        <Route element={<Home/>} path={'/'}/>
        <Route element={<SignUpForm/>} path={'/signUp'}/>
        <Route element={<SignInForm/>} path={'/signIn'}/>
        <Route element={<AddPost/>} path={'/addPost'}/>
    </Routes>
    </Layout>
    </HistoryRouter>
  );
}

const mapStateToProps= (state) =>{
  return state.user
}

const mapDispatchToProps = {
  getMeRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
