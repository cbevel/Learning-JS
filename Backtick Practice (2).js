// replicate this:// 

// -------------------------------------
// > LC04 - LAUNCH CHECKLIST
// -------------------------------------
// Date: Monday 2019-03-18
// Time: 10:05:34 AM

// -------------------------------------
// > ASTRONAUT INFO
// -------------------------------------
// * count: 7
// * status: ready

// -------------------------------------
// > FUEL DATA
// -------------------------------------
// * Fuel temp celsius: -225 C
// * Fuel level: 100%

// -------------------------------------
// > WEIGHT DATA
// -------------------------------------
// * Crew mass: 564.9 kg
// * Fuel mass: 760000 kg
// * Shuttle mass: 74842.31 kg
// * Total mass: 835407.21 kg

// -------------------------------------
// > FLIGHT PLAN
// -------------------------------------
// * weather: clear

// -------------------------------------
// > OVERALL STATUS
// -------------------------------------
// * Clear for takeoff: YES


let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";

let lineBreak = "-------------------------------------";
let spaceInBetween = " ";
let launchChecklist = ">LC04 - LAUNCH CHECKLIST";
let astroInfo = ">ASTRONAUT INFO";
let fuelData = ">FUEL DATA";
let weightData = ">WEIGHT DATA";
let flightPlan = ">FLIGHT PLAN";
let overallStat = ">OVERALL STATUS";
let takeOff = "Clear for takeoff: YES";


console.log(`

${lineBreak}
${launchChecklist}
${lineBreak}
Date: ${date}
Time: ${time}
${spaceInBetween}
${lineBreak}
${astroInfo}
${lineBreak}
*count: ${astronautCount}
*status: ${astronautStatus}
${spaceInBetween}
${lineBreak}
${fuelData}
${lineBreak}
*Fuel temp celcius: ${fuelTempCelsius}
*Fuel level: ${fuelLevel}
${spaceInBetween}
${lineBreak}
${weightData}
${lineBreak}
*Crew mass: ${crewMassKg}
*fuel mass: ${fuelMassKg}
*Shuttle mass: ${shuttleMassKg}
*Total Mass: ${totalMassKg}
${spaceInBetween}
${lineBreak}
${flightPlan}
${lineBreak}
*weather: ${weatherStatus}
${spaceInBetween}
${lineBreak}
${overallStat}
${lineBreak}
${takeOff}

This is another change!
here is another change!
here is another change!
and another one! 
im testing the push from vs code to github
me - making a change!!!!
hello!!!!

`)