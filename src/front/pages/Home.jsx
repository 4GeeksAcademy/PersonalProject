import React, { useEffect } from "react"
import animalBanner from "../assets/img/animalBanner.jpg"
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
			<header
				className="hero-banner"
				style={{ backgroundImage: `url(${animalBanner})` }}
			>
				<div className="hero-overlay">
					<h1 className="display-4 fw-bold">A worthy tribute for your pet</h1>

					<p className="lead">
						A respectful and personalized cremation service, offering dignity, compassion, and care for your beloved companion
					</p>
					{/* (Opcional) CTA, si luego quieres activarlo */}
					<a href="#contact" className="btn hero-btn">Book a Services</a>
				</div>
			</header>
		</div>
	);
}; 