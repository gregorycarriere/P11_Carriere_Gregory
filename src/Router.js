import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Accommodation from "./pages/Accommodation/Accommodation";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/accommodation/:id" element={<Accommodation />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}
