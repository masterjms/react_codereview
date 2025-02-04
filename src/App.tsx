import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Main1SidebarOnReviewDetail from "./pages/Main1SidebarOnReviewDetail";
import Loginpage from "./pages/Loginpage";
import Main2SidebarOffSolution from "./pages/Main2SidebarOffSolution";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/main1-sidebaron-reviewdetail":
        title = "";
        metaDescription = "";
        break;
      case "/loginpage":
        title = "";
        metaDescription = "";
        break;
      case "/main2-sidebaroff-solution":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/main1-sidebaron-reviewdetail"
        element={<Main1SidebarOnReviewDetail />}
      />
      <Route path="/loginpage" element={<Loginpage />} />
      <Route
        path="/main2-sidebaroff-solution"
        element={<Main2SidebarOffSolution />}
      />
    </Routes>
  );
}
export default App;
