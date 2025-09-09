import React, { useEffect } from "react"
import madridTowers from "../assets/img/madridTowers.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../styles/home.css";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}
	useEffect(() => {
		loadMessage()
	}, [])



	return (
		<div className="container-fluid">
			<header className="text-center mt-0">
				<div className="row">
					<div className="col-6">	

					</div>
					<div className="col-6">
						<div className="hero-banner">
							<img src={madridTowers} className="img-fluid hero-img" alt="Madrid Towers" />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}; 