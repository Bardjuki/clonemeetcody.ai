import { Route, Routes } from 'react-router-dom';
import HomeRouter from './HomeRouter';
import Layout from '../Layouts';

function MainRouter() {

  const allRouter = [
    ...HomeRouter,
  ];

  return (
    <Routes>
      {allRouter.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            element={<Layout>{item.element}</Layout>}
          />
        );
      })}
    </Routes>
  );
}

export default MainRouter;
