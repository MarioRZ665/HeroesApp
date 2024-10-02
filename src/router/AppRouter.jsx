import {Route, Routes } from "react-router";
import {HeroesRouters } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="*" element={
					<PrivateRoute>
						<HeroesRouters />
					</PrivateRoute>
				} />
				{/*<Route path="/*" element={<HeroesRouters />} />*/}
			</Routes>
		</>
	);
}