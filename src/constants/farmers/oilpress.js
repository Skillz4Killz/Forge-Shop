export default {
  name: "Beatrice",
  level_required: "0",
  gold_cost: "0",
  gem_cost: "0",
  title: "Oil Press",
  blueprint_unlocks: [],
  description: "Investing in this industry will speed up oil production.",
  bonus: "---",
  prerequisite: "Garden Lv. 7",
 levels: [
    { level: 1, time: '---', seconds: 0, investments: { gold: 300, gems: 6 }, cost: 3000, effect: 'Oil Production: 0.75/min' },
    { level: 2, time: '30m', seconds: 1800, investments: { gold: 600, gems: 12 }, cost: 12000, effect: 'Oil Production: 1/min' },
    { level: 3, time: '2h', seconds: 7200, investments: { gold: 1200, gems: 18 }, cost: 36000, effect: 'Oil Production: 1.25/min' },
    { level: 4, time: '3h', seconds: 10800, investments: { gold: 3000, gems: 30 }, cost: 179000, effect: 'Oil Production: 1.5/min' },
    { level: 5, time: '4h', seconds: 14000, investments: { gold: 6600, gems: 60 }, cost: 600000, effect: 'Oil Production: 1.75/min' },
    { level: 6, time: '6h', seconds: 21600, investments: { gold: 8400, gems: 69 }, cost: 920000, effect: 'Oil Production: 2/min' },
    { level: 7, time: '8h', seconds: 28800, investments: { gold: 24000, gems: 90 }, cost: 4200000, effect: 'Oil Production: 2.25/min' },
    { level: 8, time: '10h', seconds: 36000, investments: { gold: 36000, gems: 105 }, cost: 9550000, effect: 'Oil Production: 2.5/min' },
    { level: 9, time: '14h', seconds: 50400, investments: { gold: 150000, gems: 120 }, cost: 59500000, effect: 'Oil Production: 2.75/min' },
    { level: 10, time: '23h 20m', seconds: 84000, investments: { gold: 450000, gems: 150 }, cost: 210000000, effect: 'Oil Production: 3/min' },
    { level: 11, time: '1d 10h 40m', seconds: 124800, investments: { gold: 900000, gems: 180 }, cost: 660000000, effect: 'Oil Production: 3.25/min' },
    { level: 12, time: '2d', seconds: 172800, investments: { gold: 1500000, gems: 210 }, cost: 1560000000, effect: 'Oil Production: 3.5/min' },
    { level: 13, time: '2d 15h 20m', seconds: 228000, investments: { gold: 3000000, gems: 240 }, cost: 3360000000, effect: 'Oil Production: 3.75/min' },
    { level: 14, time: '3d 8h 40m', seconds: 290400, investments: { gold: 6000000, gems: 270 }, cost: 9000000000, effect: 'Oil Production: 4/min' },
    { level: 15, time: '4d 4h', seconds: 360000, investments: { gold: 12000000, gems: 300 }, cost: 19200000000, effect: 'Oil Production: 4.25/min' },
    { level: 16, time: '5d 1h 20m', seconds: 436800, investments: { gold: 30000000, gems: 300 }, cost: 51000000000, effect: 'Oil Production: 4.5/min' },
    { level: 17, time: '6d 40m', seconds: 520800, investments: { gold: 90000000, gems: 300 }, cost: 162000000000, effect: 'Oil Production: 4.75/min' },
    { level: 18, time: '7d 2h', seconds: 612000, investments: { gold: 150000000, gems: 300 }, cost: 285000000000, effect: 'Oil Production: 5/min' },
    { level: 19, time: '8d 5h 20m', seconds: 710400, investments: { gold: 300000000, gems: 300 }, cost: 600000000000, effect: 'Oil Production: 5.25/min' },
    { level: 20, time: '9d 10h 40m', seconds: 816000, investments: { gold: 300000000, gems: 300 }, cost: '---', effect: 'Oil Production: 5.5/min' },
  ],
  resource: "oil",
}
