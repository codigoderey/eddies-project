export const baseURL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://eddies-project.vercel.app/";

export default baseURL;
