const author = "Krishna";
const description =
	"Software developer from Delhi, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://krishnasinghbhainsora.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://krishnasinghbhainsora.netlify.app"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Full Stack Developer",
		"Frontend developer",
		"React Native developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://res.cloudinary.com/dsq1kewrn/image/upload/v1729329967/uploads/zgvix1od1agdphslrxld.png",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://res.cloudinary.com/dsq1kewrn/image/upload/v1729329970/uploads/nmz0uutcive4uhnakx4t.png",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
