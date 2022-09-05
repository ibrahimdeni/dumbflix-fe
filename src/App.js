import './App.css';
import Layout from './widgets/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
// import Profile from './pages/Profile';
// import Payment from './pages/Payment';
// import VideoDetail from './pages/VideoDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <>
      <Route />
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />

        <Route path='/movies' element={
          <Layout>
            <Movies />
          </Layout>
        }/>

        <Route path='/tvshows' element={
          <Layout>
            <TvShows />
          </Layout>
        }/>
{/*   
    
  
        <Route path='/video' element={
          <Layout>
            <VideoDetail />
          </Layout>
        }/>
  
        <Route path='/profile' element={
          <Layout>
            <Profile />
          </Layout>
        }/>
  
        <Route path='/payment' element={
          <Layout>
            <Payment />
          </Layout>
        }/> */}
        </>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
