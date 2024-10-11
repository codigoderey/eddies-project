let devUrl = "http://localhost:3000"
let prodUrl = "https://4zimprov.com";

export const baseURL =
	process.env.NODE_ENV === "development"
		? devUrl
		: prodUrl;

export default baseURL;
