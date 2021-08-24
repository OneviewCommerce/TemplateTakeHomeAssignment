// ROUTES EXPORTER

import { routeType } from "../types";
const Route: routeType[] = [...require("./user").default, ...require("./main").default];

export default Route;
