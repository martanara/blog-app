import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Post from './components/pages/Post';
import PostEdit from './components/pages/PostEdit';
import PostAdd from './components/pages/PostAdd';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </main>
  );
}

export default App;
