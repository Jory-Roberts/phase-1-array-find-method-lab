// code your solution here
const superbowlWin = (record) => {
  
  const objectWithAWin = record.find((element) => element.result === "W");

  return objectWithAWin ? objectWithAWin.year : undefined

  }




 