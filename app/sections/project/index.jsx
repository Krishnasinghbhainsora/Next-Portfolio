import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

// Dummy URL and data to replace environment variables
const projects = [
	{
		id: 1,
		title: "Project 1",
		description:
		"Developed a comprehensive website for ModaTemps, a fashion and lifestyle brand, with a focus on responsiveness, interactivity, and user engagement. Tech Stack: React, Bootstrap, CSS, React Router, React Icons, React Toast, React Bootstrap, Node.js, Express, MongoDB. Forms and Authentication: Developed sign-in and sign-up forms with OTP veriﬁcation, connected to backend APIs for secure authentication. Backend Integration: Built backend with Node.js, Express, and MongoDB",
		images: [
			"https://res.cloudinary.com/dq7ttfnfb/image/upload/v1729493915/Screenshot_from_2024-10-19_14-44-15_vjdmok.png"
		],
		liveUrl: "https://www.modatemps.com/",
		repoUrl: "https://github.com/example/repo2",
		stack: ["React", "Express", "Node.js"]
	},
	{
		id: 2,
		title: "Project 2",
		description:
			"Frontend Technologies:- React: Utilized for building dynamic and responsive user interfaces. Bootstrap: Employed for styling and ensuring a consistent look and feel across different devices.Backend Technologies:- Express: Used to develop server-side logic andmanage routes for handling API requests. Database Management:- MongoDB: Implemented for storing and retrieving application data with a NoSQL database. Deployment:- Hostinger: Deployed applications to a live server using Hostinger for hosting and managing web services.",
		images: [
			"https://res.cloudinary.com/dq7ttfnfb/image/upload/v1729493918/Screenshot_from_2024-10-19_14-41-56_sgpkxg.png"
		],
		liveUrl: "https://holyvrindavantour.net/",
		repoUrl: "https://github.com/example/repo1",
		stack: ["React", "Express", "Node.js"]
	},
	{
		id: 3,
		title: "Project 3",
		description:
			"I successfully designed and developed the official Zwolf Consultancy Services website, significantly enhancing the company’s online presence and user engagement. The website features a modern and intuitive interface, ensuring seamless navigation and an enjoyable user experience. Utilizing responsive design principles, I ensured optimal functionality across various devices, from desktops to mobile phones. The integration of vibrant visuals and informative content showcases the company’s services effectively, attracting potential clients and improving overall brand visibility. Additionally, I implemented SEO best practices to boost search engine rankings, contributing to increased traffic and visibility for the consultancy in a competitive market.",
		images: [
			"https://res.cloudinary.com/dq7ttfnfb/image/upload/v1729493953/ZCS_u1p8tk.png"
		],
		liveUrl: "https://www.zwolfconsultancyservice.com/",
		repoUrl: "https://github.com/example/repo1",
		stack: ["React"]
	},
	
	{
		id: 4,
		title: "Project 4",
		description:
			"Currently building web applications using React , Node.js , Express , and Bootstrap . Actively developing RESTful APIs using Express for smooth data ﬂow between frontend and backend. Implemented ﬁlter functionality for users to search properties by location, price, and type. Managing dynamic state with React hooks and improving frontend functionality.",
		images: [
			"https://res.cloudinary.com/dq7ttfnfb/image/upload/v1729493954/zwolf_fno0b2.png"
		],
		liveUrl: "https://example.com/live2",
		repoUrl: "https://github.com/example/repo2",
		stack: ["React", "Express", "Node.js"]
	},
	
];

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	// Fetching from the dummy URL
	//   const { data, error } = useSWR(url, fetcher);

	// Fallback if data isn't available yet
	//   const projects = data ? data.slice(0, 6) : [];

	//   if (error) {
	//     return <p>Error loading projects.</p>; // Graceful error message
	//   }

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest Projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							{projects.length > 0 ? (
								<Projects projects={projects} />
							) : (
								<p>No projects available.</p> // Handle empty state gracefully
							)}
						</ErrorBoundary>
					</Suspense>

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: isBtnInView ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="See more projects">More projects</button>
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
}
