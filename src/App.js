import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage";
import UserPostPage from "./Components/UserPostPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="userPost/:id" element={<UserPostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
