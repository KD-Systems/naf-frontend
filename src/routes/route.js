import { Route } from "react-router-dom";
import routes from "./main";

function nestedParse(routes) {
  return routes.map((route, i) => {
    if (route.component) return <Route path={route.path} element={route.component} />;

    if (route.routes) return nestedParse(route.routes);
  });
}

let RouteParser = routes.map((route, i) => {
  if (route.component) return <Route path={route.path} element={route.component} />;

  if (route.routes) return nestedParse(route.routes);
});

RouteParser = RouteParser.flat(Infinity);

export default RouteParser;
