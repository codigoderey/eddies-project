let devUrl;
let prodUrl = "https://4zimprov.com";


if(window?.location?.href?.includes("localhost")) {
	devUrl = "http://localhost:3000";
} else {
	devUrl = "https://eddies-project.vercel.app";
}

console.log(devUrl, prodUrl);

export const baseURL =
	process.env.NODE_ENV === "development"
		? devUrl
		: prodUrl;

export default baseURL;
