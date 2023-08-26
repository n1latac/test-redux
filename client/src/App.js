import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout";
import SignUpForm from './components/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route element={<Home/>} path={'/'}/>
        <Route element={<SignUpForm/>} path={'/signUp'}/>
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
