import { lazy, Suspense } from "react";
import MainContainer from "../components/MainContainer";

const CharacterModel = lazy(() => import("../components/Character"));

const HomePage = () => (
  <MainContainer>
    <Suspense fallback={<div>Loading...</div>}>
      <CharacterModel />
    </Suspense>
  </MainContainer>
);

export default HomePage;
