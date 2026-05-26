import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

const HomePage = lazy(() => import("./pages/HomePage"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;
