import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const FunIndex = lazy(() => import("./pages/index"));
const RecorderAudio = lazy(() => import("./pages/recorderAudio"));
const RecorderScreen = lazy(() => import("./pages/recorderScreen"));
const RecorderVideo = lazy(() => import("./pages/recorderVideo"));
const ShotScreen = lazy(() => import("./pages/shotScreen"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <FunIndex />
          </Suspense>
        }>
        <Route
          path="recorderAudio"
          element={
            <Suspense>
              <RecorderAudio />
            </Suspense>} />
        <Route
          path="recorderScreen"
          element={
            <Suspense>
              <RecorderScreen />
            </Suspense>
          }
        />
        <Route
          path="recorderVideo"
          element={
            <Suspense>
              <RecorderVideo />
            </Suspense>}
        />
        <Route
          path="shotScreen"
          element={
            <Suspense>
              <ShotScreen />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
