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
import OwnPostPage from "./pages/OwnPostPage";

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
        <Route element={<OwnPostPage/>} path={'/ownPosts'}/>
    </Routes>
    </Layout>
    </HistoryRouter>
  );
}

const mapStateToProps= (state) =>{
  return state.userStore
}

const mapDispatchToProps = {
  getMeRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
