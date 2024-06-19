const blueprints = require("./data")
const fs = require("fs")


function convertArrayObjects(array) {
  return array
    .filter(i => i.Name && i.Type)
    .map(item => {
      const result = {
        Name: item["Name"],
        Type: item["Type"],
        "Unlock Prerequisite": item["Item Unlock Prerequisite"] || "---",
        "Research Scrolls":
          item["Research Scrolls"] !== "" ? item["Research Scrolls"] : null,
        Tier: item["Tier"],
        Value: item["Value"] || 0,
        "Crafting Time (seconds)": item["Crafting Time (seconds)"] || 0,
        "Crafting Time (formatted)": "", // Formatting not provided, needs custom logic if required
        "Value / Crafting Time": item["Value / Crafting Time"] || 0,
        "Crafting Time 1st Discount": item["Crafting Time 1st Discount"] || 0,
        "Crafting Time 2nd Discount": item["Crafting Time 2nd Discount"] || 0,
        "Guild Bonus": item["Guild Bonus"] || 0,
        "Discounted Craft Time": item["Discounted Craft Time"] || 0,
        "Value / Discounted Craft Time":
          item["Value / Discounted Craft Time"] || 0,
        "Merchant XP": item["Merchant XP"] || 0,
        "Merchant XP / Crafting Time": item["Merchant XP / Crafting Time"] || 0,
        "Worker XP": item["Worker XP"] || 0,
        "Required Worker": item["Worker 1"] ? item["Worker 1"] : "---",
        "Worker Level": 0, // Needs manual adjustment or additional data
        "Required Worker__1": item["Worker 2"] ? item["Worker 2"] : "---",
        "Worker Level__1": 0, // Needs manual adjustment or additional data
        iron: item["Iron"] || 0,
        wood: item["Wood"] || 0,
        leather: item["Leather"] || 0,
        plastic: item.Plastic || 0,
        steel: item["Steel"] || 0,
        ironwood: item["Ironwood"] || 0,
        fabric: item["Fabric"] || 0,
        oil: item["Petrol"] || 0,
        glass: item.Glass || 0,
        magnet: item.Magnet || 0,
        mana: 0, // Not provided, defaulting to 0
        gems: 0, // Not provided, defaulting to 0
        Component: item["Component"] || "---",
        "Component Quality": item["Component Quality"] || "",
        "Amount Needed": item["Amount Needed"] || 0,
        Component__1: item["Component__1"] || "---",
        "Component Quality__1": item["Component Quality__1"] || "",
        "Amount Needed__1": item["Amount Needed__1"] || 0,
        ATK: item["ATK"] || 0,
        DEF: item["DEF"] || 0,
        HP: item["HP"] || 0,
        EVA: item.EVA || 0,
        CRIT: item.CRIT || 0,
        SPECIAL: item.SPECIAL || 0,
        "Crafting Upgrade 1": "", // Not provided, defaulting to ""
        "Crafts Needed": 0, // Not provided, defaulting to 0
        "Crafting Upgrade 2": "", // Not provided, defaulting to ""
        "Crafts Needed__1": 0, // Not provided, defaulting to 0
        "Crafting Upgrade 3": "", // Not provided, defaulting to ""
        "Crafts Needed__2": 0, // Not provided, defaulting to 0
        "Crafting Upgrade 4": "", // Not provided, defaulting to ""
        "Crafts Needed__3": 0, // Not provided, defaulting to 0
        "Crafting Upgrade 5": "", // Not provided, defaulting to ""
        "Crafts Needed__4": 0, // Not provided, defaulting to 0
        "Ascension Upgrade 1": "", // Not provided, defaulting to ""
        "Shards Needed": 0, // Not provided, defaulting to 0
        "Ascension Upgrade 2": "", // Not provided, defaulting to ""
        "Shards Needed__1": 0, // Not provided, defaulting to 0
        "Ascension Upgrade 3": "", // Not provided, defaulting to ""
        "Shards Needed__2": 0, // Not provided, defaulting to 0
        "Discount Energy": item["Discount Energy"] || 0,
        "Surcharge Energy": item["SURCHARGE ENERGY"] || 0,
        "Suggest Energy": 0, // Not provided, defaulting to 0
        "Speed Up Energy": 0, // Not provided, defaulting to 0
      }

      const finalKeys = Object.keys(result)
      // Logging any unmatched or missing keys
      Object.keys(item).forEach(key => {
        if (!finalKeys.includes(key)) {
          if (
            [
              "__1",
              "__2",
              "__3",
              "__4",
              "SURCHARGE ENERGY",
              "Iron",
              "Wood",
              "Leather",
              "Plastic",
              "Steel",
              "Ironwood",
              "Fabric",
              "Petrol",
              "Glass",
              "Magnet",
              "Item Unlock Prerequisite",
              "Worker 1",
              "Worker 2",
              "Energy to Surcharge"
            ].includes(key)
          )
            return
          console.log(`Unmatched key: ${key}`)
        }
      })

      return result
    })
}

const outputArray = convertArrayObjects(blueprints)
fs.writeFileSync("output.json", JSON.stringify(outputArray, null, 2))

// console.log(outputArray)
