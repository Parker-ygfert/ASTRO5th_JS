let laundry = {
  name: 'Tosuba',
  producer: '5xRuby',
  phone: '02-2882-5252',
  modleType: '5xRuby-#001',
  guarantee: 'null',
  watt: 'very high',
  processOptions: {
    //* 給人使用的按鈕再用字串表達
    beforeWashOptions: {
      waterLevel: ['midium', 'high', 'low'],
    }
  }
}


//* 數字以及布林值比較精準，因為是給機器看的
let routine = [
  {type: 'beforeWash',
  waterVolume: ['medium'],
  waterTemp: ['cold'],  
  soaking: ['10m'],  
  detergent: ['few']},

  {type: 'wash',
   washTime: ['2hr'],
   washType: ['general']},

  {type: 'spin',
   spinTime: ['5m']},
  
  {type: 'dry',
   dryTime: ['5m'],
   dryTemp: ['warm']},

  {type: 'fold',
   format: ['auto']}
]
routine = {type1: "beforeWash", type2: "wash", type3: "spin", type4: "dry", type5: "fold"}
routine.type2
routine.type3
routine.type4

  // detergent: ['few', 'normal', 'max'],
  // waterVolume: ["low", "medium", "high"],
  // waterTemp: ["cold", "warm", "hot"],
  // soaking: ["10m", "20m", "30m"],
  
  // washTime: ["1hr", "1.5hr", "2hr"],
  // washType: ["soft", "general", "strong"]

  // spinTime: ["5m", "10m", "15m"],

  // dryTime: ['5m', '10m', '15m'],
  // dryTemp: ["cold", "warm", "hot"]

let { waterVolume, 
      soaking, 
      washTime, 
      waterTemp,
      detergent, 
      spinTime, 
      dryTime, 
      dryTemp } = lundary.routine

function run({func}){
}