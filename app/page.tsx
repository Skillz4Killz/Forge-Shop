import React from "react";
import BlueprintOverview from "../components/BlueprintOverview";
import { blueprints } from "../constants/blueprints";

export default function IndexPage() {
  const relevantBlueprints = blueprints.reduce(
    (acc: Record<string, any[]>, blueprint) => {
      const { Type } = blueprint;
      if (!acc[Type]) {
        acc[Type] = [blueprint];
      } else {
        acc[Type].push(blueprint);
      }
      return acc;
    },
    {}
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative text-center text-white">
        <div className="bg-cover h-300 w-full relative"></div>
        <div className="HeroGroup">
          <h1 className="text-3xl font-bold">Blueprints Overview</h1>
        </div>
      </div>
      <BlueprintOverview blueprints={relevantBlueprints} />
    </div>
  );
}
