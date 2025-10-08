import { useRoutes } from "react-router-dom";
import routes from './routes/routes';
import './global.css';

function App() {
  const routing = useRoutes(routes)
  return (
    <>
      {routing}
    </>
  )
}

export default App
