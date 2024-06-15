import React from "react";
import { cleanName, calculateCraftTime } from "../utils/util";
import WorkerPackageImage from "./WorkerPackageImage";
import Image from "next/image";
import { workers, stats } from "@/constants/workers";

const WorkerClass: React.FC<{ details: any }> = (props) => {
  let workerLevel = 1;
  let secondWorkerLevel = 1;

  try {
    workerLevel =
      parseInt(
        localStorage.getItem(
          workers
            .find(
              (worker) =>
                worker.title.toLowerCase() ===
                props.details["Required Worker"].toLowerCase()
            )
            ?.name.toLowerCase() ?? ""
        ) ?? "1"
      ) || 1;

    secondWorkerLevel =
      parseInt(
        localStorage.getItem(
          workers
            .find(
              (worker) =>
                worker.title.toLowerCase() ===
                props.details["Required Worker"].toLowerCase()
            )
            ?.name.toLowerCase() ?? ""
        ) ?? "1"
      ) || 1;
  } catch {
    // Ignore: This try-catch is to ignore local storage missing in Gatsby build server-side rendering
  }

  const workerBonus =
    parseInt(
      stats
        .find((stat) => stat.workerLevel === workerLevel)
        ?.craftingSpeedBonus.slice(0, -1) ?? ""
    ) / 100;
  const secondWorkerBonus =
    parseInt(
      stats
        .find((stat) => stat.workerLevel === secondWorkerLevel)
        ?.craftingSpeedBonus.slice(0, -1) ?? ""
    ) / 100;

  return (
    <div className="flex flex-col relative h-367 w-280 border-2 border-gray-300 rounded-lg bg-white shadow-lg ml-16 mt-16 pb-16">
      <div className="absolute top-0 right-0 m-4">
        <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center font-bold rounded-full">
          {props.details.Tier}
        </div>
        {props.details["Unlock Prerequisite"] && (
          <div className="absolute top-16 right-4">
            <WorkerPackageImage>
              <Image
                src={`/images/packages/${cleanName(
                  props.details["Unlock Prerequisite"]
                )}`}
                height={50}
                width={50}
                alt={cleanName(props.details["Unlock Prerequisite"])}
              />
            </WorkerPackageImage>
          </div>
        )}
      </div>

      <div className="m-auto mt-16">
        <div className="w-20 h-20 bg-red-500 rounded-full">
          <WorkerPackageImage>
            <Image
              src={`/images/packages/${cleanName(props.details.Name)}`}
              height={50}
              width={50}
              alt={props.details.Name}
            />
          </WorkerPackageImage>
        </div>
      </div>

      <h1 className="font-bold text-lg text-green-500 text-center mt-4">
        {props.details.Name}
      </h1>

      <h2 className="font-semibold text-base text-blue-700 text-center mt-2">
        {calculateCraftTime(
          props.details["Crafting Time (seconds)"],
          workerBonus,
          secondWorkerBonus
        )}
      </h2>

      <h2 className="font-bold text-lg text-blue-700 text-center mt-2">
        Requirements:
      </h2>

      <div className="flex justify-center">
        {/* Energy requirement icons go here */}
      </div>

      <h2 className="font-bold text-lg text-blue-700 text-center mt-2">
        Stats:
      </h2>
      <p className="text-base text-blue-700 text-center mt-1">
        <strong>Worker XP:</strong> {props.details["Worker XP"]} |{" "}
        <strong>XP/Second</strong>{" "}
        {(
          props.details["Worker XP"] /
          calculateCraftTime(
            props.details["Crafting Time (seconds)"],
            workerBonus,
            secondWorkerBonus,
            0,
            0,
            false
          )
        ).toFixed(2)}
      </p>
      <p className="text-base text-blue-700 text-center">
        <strong>Merchant XP:</strong> {props.details["Merchant XP"]} |{" "}
        <strong>XP/Second</strong>{" "}
        {(
          parseInt(props.details["Merchant XP"]) /
          calculateCraftTime(
            props.details["Crafting Time (seconds)"],
            workerBonus,
            secondWorkerBonus,
            0,
            0,
            false
          )
        ).toFixed(2)}
      </p>

      {/* Components and gold requirements go here */}
    </div>
  );
};

export default WorkerClass;
