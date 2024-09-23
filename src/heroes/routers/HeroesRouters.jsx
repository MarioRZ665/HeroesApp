import { Navigate, Route, Routes } from "react-router"
import { Navbar } from "../../ui"
import { MarvelPage, DCPage, SearchPage, HeroPage } from "../../heroes"
export const HeroesRouters = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DCPage />} />
					<Route path="search" element={<SearchPage />} />
					<Route path="heroe/:heroeId" element={<HeroPage />} />
					<Route path="/" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	);
}
