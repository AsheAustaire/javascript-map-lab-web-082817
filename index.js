const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];


let sortedRobots = robots.map(function(x){
  let newObj = Object.assign({}, x)
  if(knownDecepticons.includes(x.name)){
    newObj.alliance = 'decepticon';
  } else {
    newObj.alliance = 'autobot';
  }
  return newObj
})


const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

let coloredZebraStripes = zebraStripes.map(function(stripe){
  let newObj = Object.assign({}, stripe)
  if(newObj.width > 7){
    newObj.color = 'black'
  } else{
    newObj.color = 'white'
  }
  return newObj
})
