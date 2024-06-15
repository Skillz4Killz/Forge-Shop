"use client";
import React, { useState } from "react";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import BlueprintCard from "../components/BlueprintCard";
import { Fab } from "@mui/material";

const weapons = [
  "Axe",
  "Bow",
  "Crossbow",
  "Dagger",
  "Gun",
  "Mace",
  "Shield",
  "Spear",
  "Staff",
  "Sword",
  "Wand",
];
const armor = ["Gauntlet", "Heavy Armor", "Heavy Footwear", "Helmet"];
const lightarmor = [
  "Amulet",
  "Clothe",
  "Glove",
  "Light Armor",
  "Light Footwear",
  "Magician Hat",
  "Ring",
  "Rogue Hat",
];
const items = [
  "Enchantment",
  "Herbal Medicine",
  "Potion",
  "Runestone",
  "Spell",
];

const BlueprintOverview = (props: any) => {
  const [value, setValue] = useState(0);
  const [tier, setTier] = useState(0);

  const handleTierFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTier(parseInt(event.currentTarget.innerText, 10));
  };

  const makeTab = (array: string[]) => {
    return Object.values(props.blueprints)
      .filter((b: any) => array.includes(b[0].Type))
      .map((blueprints: any, index: number) => (
        <React.Fragment key={index}>
          <div className="Selectan">
            <h1 className="text-red-500">{blueprints[0].Type}s</h1>
          </div>
          <div className="CardboxGroupScroll">
            <div className="CardboxGroup">
              {blueprints
                .filter(
                  (blueprint: any) =>
                    !tier || blueprint.Tier.toString() === tier.toString()
                )
                .sort((a: any, b: any) => b.Tier - a.Tier)
                .map((blueprint: any, printIndex: number) => (
                  <BlueprintCard
                    details={blueprint}
                    key={printIndex}
                  ></BlueprintCard>
                ))}
            </div>
          </div>
        </React.Fragment>
      ));
  };

  return (
    <div>
      <div className="text-center mb-2.5">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((tier) => (
          <Fab
            key={tier}
            size="small"
            variant="extended"
            color="primary"
            className="text-xs shadow-none mr-1.25 bg-red-500"
            onClick={handleTierFilter}
          >
            {tier}
          </Fab>
        ))}
      </div>
      <div className="relative w-max mx-auto shadow-none">
        <Tabs
          defaultValue={0}
          value={value}
          onChange={(event, newValue) => {
            setValue(Number(newValue) ?? 0);
          }}
        >
          <TabsList>
            {["Weapons", "Heavy", "Light", "Items"].map((name, index) => (
              <Tab
                key={index}
                className={`button ${value === index ? "bg-blue-500" : ""}`}
                style={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  fontSize: "12px",
                  marginRight: "16px",
                }}
              >
                {name}
              </Tab>
            ))}
          </TabsList>
          <TabPanel value={0}>{makeTab(weapons)}</TabPanel>
          <TabPanel value={1}>{makeTab(armor)}</TabPanel>
          <TabPanel value={2}>{makeTab(lightarmor)}</TabPanel>
          <TabPanel value={3}>{makeTab(items)}</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BlueprintOverview;
