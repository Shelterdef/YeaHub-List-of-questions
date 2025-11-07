import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { GlobalLoader } from "@/shared/ui/";
import { routes } from "./routing/routes";
import "@/shared/assets/styles/normalize.scss";

function App() {
  const routing = useRoutes(routes);

  return <Suspense fallback={<GlobalLoader />}>{routing}</Suspense>;
}

export default App;
