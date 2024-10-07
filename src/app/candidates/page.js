"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useContext, useEffect, useState } from "react";
import Jumbotron from "@/components/Jumbotron";
import { FirebaseContext } from "@/context/FirebaseContext";

export default function QuotePage() {
  const { getAllCandidates, candidates, loading } = useContext(FirebaseContext);

  useEffect(() => {
    getAllCandidates();
  }, []);

  return (
    <main className="text-black">
      <Jumbotron
        topText="List of candidates"
        mainText="The following list have submitted a request."
        subText="You can view their information and contact them."
      />

      {loading ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p>Loading candidates...</p>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-black">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2"
          >
            {candidates.map((candidate) => (
              <li
                key={candidate.Email}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg"
              >
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${candidate.Email}`}
                      className="relative -mr-px flex flex-col w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <EnvelopeIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      />
                      <small>{candidate.Email}</small>
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:${candidate.Phone}`}
                      className="relative flex flex-col w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <PhoneIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      />
                      <small>{candidate.Phone}</small>
                    </a>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <span>
                      <strong>General Info</strong>
                    </span>
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        {candidate.First} {candidate.Last}
                      </h3>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      <span>{candidate.Street}</span> <br />
                      <span>
                        {candidate.City}, {candidate.State}, {candidate.Zip}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <span>
                      <strong>Request Info</strong>
                    </span>
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        <strong>Project type:</strong> {candidate.ProjectType}
                      </h3>
                    </div>
                    <p className="mt-1 truncate text-sm">
                      <strong>Wants the estimate: </strong>{" "}
                      {candidate.ProjectEstimateTimeframe}
                    </p>
                    <p className="mt-1 truncate text-sm">
                      <strong>Wants the job done: </strong>{" "}
                      {candidate.ProjectWorkDoneTimeframe}
                    </p>
                    <p className="mt-1 truncate text-sm">
                      <strong>Comments: </strong> {candidate.Comments}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
