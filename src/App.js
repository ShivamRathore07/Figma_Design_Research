import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menutabs from "./components/Menutabs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Peoples from "./components/Peoples";
import Dashboard from "./components/Dashboard";
import Research from "./components/Research";
import Articles from "./components/Articles";
import AddArticles from "./components/AddArticles";
import Blogs from "./components/Blogs";
import AddBlogs from "./components/AddBlogs";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/peoples" element={<Peoples />} />
        <Route
          exact
          path="/dashboard"
          element={<Menutabs props={<Dashboard />} />}
        />
        <Route
          exact
          path="/research"
          element={<Menutabs props={<Research />} />}
        />
        <Route
          exact
          path="/articles"
          element={<Menutabs props={<Articles />} />}
        />
        <Route
          exact
          path="/articles/add"
          element={<Menutabs props={<AddArticles />} />}
        />
        <Route exact path="/blogs" element={<Menutabs props={<Blogs />} />} />
        <Route
          exact
          path="/blogs/write"
          element={<Menutabs props={<AddBlogs />} />}
        />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
