import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {NavBar, Feed, VideoDetails, ChannelDetails, SearchFeed, Trending} from './components/pages'

function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/nav' element={<NavBar/>}/>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
        <Route path='/channel/:id' element={<ChannelDetails/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        <Route path='/trend' element={<Trending/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
