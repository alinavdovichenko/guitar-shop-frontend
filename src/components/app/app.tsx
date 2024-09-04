import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../../pages/main.page';
import { AppRoute } from '../../consts';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
