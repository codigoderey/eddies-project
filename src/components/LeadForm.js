"use client";
import { useState, useContext } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Textarea } from "@headlessui/react";
import Link from "next/link";
import { FirebaseContext } from "@/context/FirebaseContext";
import axios from "axios";
import baseURL from "@/utils/baseUrl";
import { TailSpin } from "react-loader-spinner";

export default function LeadForm() {
  const { addNewCandidate, loading, setLoading } = useContext(FirebaseContext);

  let [isOpen, setIsOpen] = useState(false);

  const [projectType, setProjectType] = useState([]);

  const [errors, setErrors] = useState({});

  const [candidate, setCandidate] = useState({
    First: "",
    Last: "",
    Email: "",
    Phone: "",
    Street: "",
    City: "",
    State: "",
    Zip: "",
    ProjectType: projectType,
    ProjectEstimateTimeframe: "",
    ProjectWorkDoneTimeframe: "",
    Comments: "",
  });

  const handleProjectTypeChange = (e) => {
    if (e.target.checked) {
      setProjectType([...projectType, e.target.value]);
    } else {
      setProjectType(projectType.filter((item) => item !== e.target.value));
    }
  };

  const handleChange = (e) => {
    setCandidate({
      ...candidate,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (candidate.First === "") tempErrors.First = "First name is required.";
    if (candidate.Last === "") tempErrors.Last = "Last name is required.";
    if (candidate.Email === "") tempErrors.Email = "Email is required.";
    if (candidate.Phone === "") tempErrors.Phone = "Phone is required.";
    if (candidate.Street === "") tempErrors.Street = "Street is required.";
    if (candidate.City === "") tempErrors.City = "City is required.";
    if (candidate.State === "") tempErrors.State = "State is required.";
    if (candidate.Zip === "") tempErrors.Zip = "Zip is required.";
    if (projectType.length === 0)
      tempErrors.ProjectType = "Project type is required.";
    if (candidate.ProjectEstimateTimeframe === "")
      tempErrors.ProjectEstimateTimeframe = "Estimate timeframe is required.";
    if (candidate.ProjectWorkDoneTimeframe === "")
      tempErrors.ProjectWorkDoneTimeframe = "Work done timeframe is required.";

    setErrors(tempErrors);

    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
  
    try {
      const validationErrors = validateForm();
  
      console.log(validateForm);
  
      candidate.ProjectType = projectType.toString();
  
      if (Object.keys(validationErrors).length === 0) {
        await axios.post(`${baseURL}/api/leads`, candidate);
  
        await addNewCandidate(candidate);
  
        setProjectType([]);
  
        document.querySelectorAll("input").forEach((input) => {
          if (input.type === "checkbox" || input.type === "radio") {
            input.checked = false;
            input.classList.remove("ring-2", "ring-red-500");
          } else {
            input.value = "";
            input.classList.remove("ring-2", "ring-red-500");
          }
        });
  
        setCandidate({
          First: "",
          Last: "",
          Email: "",
          Phone: "",
          Street: "",
          City: "",
          State: "",
          Zip: "",
          ProjectType: projectType,
          ProjectEstimateTimeframe: "",
          ProjectWorkDoneTimeframe: "",
          Comments: "",
        });
      } else {
        window.scrollTo(0, 0);
  
        setIsOpen(true);
  
        document.querySelectorAll("input").forEach((input) => {
          console.log(input.value);
          if (input.type === "checkbox" || input.type === "radio") {
            if (!input.checked && input.value === "") {
              input.classList.add("ring-2", "ring-red-500");
            } else {
              input.classList.remove("ring-2", "ring-red-500");
            }
          } else {
            if (input.value === "") {
              input.classList.add("ring-2", "ring-red-500");
            } else {
              input.classList.remove("ring-2", "ring-red-500");
            }
          }
        });
  
        // Additional validation for ProjectType
        if (projectType.length === 0) {
          document.querySelectorAll("input[name='ProjectType']").forEach((input) => {
            input.classList.add("ring-2", "ring-red-500");
          });
        }
  
        // Additional validation for ProjectEstimateTimeframe
        if (candidate.ProjectEstimateTimeframe === "") {
          document.querySelectorAll("input[name='ProjectEstimateTimeframe']").forEach((input) => {
            input.classList.add("ring-2", "ring-red-500");
          });
        }
  
        // Additional validation for ProjectWorkDoneTimeframe
        if (candidate.ProjectWorkDoneTimeframe === "") {
          document.querySelectorAll("input[name='ProjectWorkDoneTimeframe']").forEach((input) => {
            input.classList.add("ring-2", "ring-red-500");
          });
        }
  
        return;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className="border p-5 rounded -mt-16">
        <div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please fill the information below to proceed.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="First"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={candidate.First}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="Last"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={candidate.Last}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={candidate.Email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="Phone"
                    type="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={candidate.Phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="Street"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={candidate.Street}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="City"
                    type="text"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={candidate.City}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    id="region"
                    name="State"
                    type="text"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={candidate.State}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    id="postal-code"
                    name="Zip"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={candidate.Zip}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Project Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Let us know what you are looking to get done the right way.
            </p>

            <div className="mt-10 space-y-10">
              <div className="project-information p-2 border rounded">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Type of project
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Feel free to add in the comments if you don't see what you
                    are looking for.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="bathroom"
                          name="ProjectType"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                          value="Bathroom"
                          onChange={handleProjectTypeChange}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="bathroom"
                          className="font-medium text-gray-900"
                        >
                          Bathroom
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="decking"
                          name="ProjectType"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                          value="Decking"
                          onChange={handleProjectTypeChange}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="decking"
                          className="font-medium text-gray-900"
                        >
                          Decking
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="flooring"
                          name="ProjectType"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                          value="Flooring"
                          onChange={handleProjectTypeChange}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="flooring"
                          className="font-medium text-gray-900"
                        >
                          Flooring
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="painting"
                          name="ProjectType"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                          value="Painting"
                          onChange={handleProjectTypeChange}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="painting"
                          className="font-medium text-gray-900"
                        >
                          Painting
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="roofing"
                          name="ProjectType"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                          value="Roofing"
                          onChange={handleProjectTypeChange}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="roofing"
                          className="font-medium text-gray-900"
                        >
                          Roofing
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="chimmey"
                          name="ProjectType"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                          value="Chimmey"
                          onChange={handleProjectTypeChange}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="chimmey"
                          className="font-medium text-gray-900"
                        >
                          Chimmey
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="windows"
                          name="ProjectType"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                          value="Windows and Doors"
                          onChange={handleProjectTypeChange}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="windows"
                          className="font-medium text-gray-900"
                        >
                          Windows and Doors
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="project-information p-2 border rounded">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Estimate timeframe
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Let us know when do you want your estimate.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="ProjectEstimateTimeframe"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                        value="1-2 weeks"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        1-2 weeks
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="ProjectEstimateTimeframe"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                        value="2-3 weeks"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        2-3 weeks
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="ProjectEstimateTimeframe"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                        value="1 month or later"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        1 month or later
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="project-information p-2 border rounded">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Work done timeframe
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Let us know when do you want your work done.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="ProjectWorkDoneTimeframe"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                        value="1-3 weeks"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        1-3 weeks
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="ProjectWorkDoneTimeframe"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                        value="1-2 months"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        1-2 months
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="ProjectWorkDoneTimeframe"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                        value="3-6 months"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        3-6 months
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Comments
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Any additional information you want to share with us.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="gap-x-3">
                    <Textarea
                      rows={6}
                      id="comments"
                      name="Comments"
                      className="w-full border rounded p-3 text-black focus:ring-amber-600"
                      value={candidate.Comments}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="w-20 h-auto flex justify-center rounded-md bg-amber-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 transition-all"
          >
            {loading ? (
              <TailSpin
                visible={true}
                height="16"
                width="16"
                color="#ffffff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              /> 
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="border border-red-500 w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-red-500"
              >
                <strong>Missing required fields...</strong>
              </DialogTitle>
              <ul className="mt-2 text-sm/6 text-black">
                {Object.keys(errors).map((key) => {
                  return (
                    <li key={key} className="text-sm text-red-500">
                      {errors[key]}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-amber-950 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-amber-800 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-amber-800 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Ok
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
