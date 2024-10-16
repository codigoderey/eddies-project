import { useContext, useState } from "react";
import { FirebaseContext } from "@/context/FirebaseContext";
import { toast } from "react-toastify";

export const imageCategories = [
	"bathroom",
	"decking",
	"flooring",
	"painting",
	"roofing",
	"chimney",
	"windows and doors",
	"pressure washing"
];

export default function ImagesHandler() {
	const { uploadFileAndGetDownloadURL, addShowCaseImageData } =
		useContext(FirebaseContext);

	const [loading, setLoading] = useState(false);

	const [imageData, setImageData] = useState({
		File: null,
		Preview: null,
		ImageUrl: null,
		Description: "",
		Category: ""
	});

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		// Create a FileReader to read the file
		const reader = new FileReader();
		reader.onloadend = () => {
			setImageData({
				...imageData,
				File: file,
				Preview: reader.result // This is the base64 URL for preview
			});
		};
		// Read the file as a data URL (base64)
		reader.readAsDataURL(file);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setImageData({
			...imageData,
			[name]: value
		});
	};

	const handleImageUpload = (e) => {
		e.preventDefault();

		try {
			if (
				!imageData.File ||
				imageData.Category == "" ||
				imageData.Description == ""
			)
				return toast.error(
					"Please select a file, category and description before uploading...",
					{
						autoClose: 8000
					}
				);

			setLoading(true);

			imageData.Category = imageData.Category.toLowerCase();

			uploadFileAndGetDownloadURL(imageData.File, "images").then((url) => {
				console.log(url);

				setImageData({
					...imageData,
					ImageUrl: url
				});

				const imageDataObject = {
					Category: imageData.Category,
					Description: imageData.Description,
					ImageUrl: url
				};

				if (url != null) {
					addShowCaseImageData(imageDataObject);

					toast.success("Image uploaded successfully");

					setImageData({
						File: null,
						Preview: null,
						ImageUrl: null,
						Description: "",
						Category: ""
					});
				}
			});
		} catch (error) {
			console.error("Error uploading image: ", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section>
			<form onSubmit={handleImageUpload} className="border p-5 rounded">
				<div>
					<div className="pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Image upload
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Upload your project images to showcase in the gallery. Images
							should be in
							<code>.jpg</code> or <code>.png</code> format. Maximum file size
							is 1MB.
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label
									htmlFor="Category"
									className="block text-sm font-medium leading-6 text-gray-900">
									Select image category
								</label>
								<div className="mt-2">
									<select
										id="Category"
										name="Category"
										className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
										value={imageData.Category}
										onChange={handleInputChange}>
										{imageCategories.map((category) => (
											<option key={category} value={category}>
												{category}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="sm:col-span-3">
								<label
									htmlFor="Description"
									className="block text-sm font-medium leading-6 text-gray-900">
									Describe your image
								</label>
								<div className="mt-2">
									<textarea
										id="Description"
										name="Description"
										className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
										value={imageData.Description}
										onChange={handleInputChange}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex items-start justify-between">
					<div className="flex items-center">
						<input type="file" onChange={handleImageChange} />
						<button
							onClick={handleImageUpload}
							type="submit"
							className="w-20 h-auto flex justify-center rounded-md bg-amber-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 transition-all">
							{loading ? "Uploading..." : "Upload"}
						</button>
					</div>
					{imageData.preview && (
						<div>
							<img
								className="w-80"
								src={imageData.preview}
								alt="Preview image before upload"
							/>
						</div>
					)}
				</div>
			</form>
		</section>
	);
}
