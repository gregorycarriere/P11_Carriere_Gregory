import { Route, Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}
