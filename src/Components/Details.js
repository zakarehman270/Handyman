import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { Player } from "video-react";
import {} from "../../node_modules/video-react/dist/video-react.css";
const Details = (props) => {
	const [DetailName, setDetailName] = useState("");
	const location = useLocation();
	let Split = location.pathname.split("/");
	const { state } = useLocation();
	useEffect(() => {
		setDetailName(Split[Split.length - 1]);
	}, []);

	return (
		<div className="backgroundColor-grey">
			<Header />
			<img
				src={state.details.bannerImage}
				alt="teamwork"
				style={{ width: "100%" }}
			/>
			<div className="outerWrapperContentDetail">
				<Container className="pt-5 pb-5">
					<div className="d-flex justify-content-center align-items-center Gap pb-3">
						<p className="PrimaryColor HeadingOurServices">{DetailName}</p>
					</div>
					<Row>
						<Col>
							<h3>{state.details.upperLeftDetail.heading}</h3>
							<p className="ParagraphFeedBackBox">
								{state.details.upperLeftDetail.details}
							</p>
						</Col>
						<Col>
							<h3>{state.details.upperRightDetail.heading}</h3>
							<p className="ParagraphFeedBackBox">
								{state.details.upperRightDetail.details}
							</p>
						</Col>
					</Row>
				</Container>
				<hr />
				<Container className="pt-5 pb-5">
					<Row>
						<Col md={6}>
							<Player>
								<source src={state.details.midDetail.video} />
							</Player>
						</Col>
						<Col md={6}>
							<h3>{state.details.midDetail.heading}</h3>
							<p className="ParagraphFeedBackBox">
								{state.details.midDetail.details}
							</p>
						</Col>
					</Row>
				</Container>
				<hr />
				<Container className="pt-5 pb-5">
					<Row>
						<Col>
							<h3>{state.details.lowerLeftDetail.heading}</h3>
							<p className="ParagraphFeedBackBox">
								{state.details.lowerLeftDetail.details}
							</p>
						</Col>
						<Col>
							<h3>{state.details.lowerCenterDetail.heading}</h3>
							<p className="ParagraphFeedBackBox">
								{state.details.lowerCenterDetail.details}
							</p>
						</Col>
						<Col>
							<h3>{state.details.lowerRightDetail.heading}</h3>
							<p className="ParagraphFeedBackBox">
								{state.details.lowerRightDetail.details}
							</p>
						</Col>
					</Row>
				</Container>
			</div>

			<Footer />
		</div>
	);
};

export default Details;
