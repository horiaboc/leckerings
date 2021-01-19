
let weekNo = 1
for(let date = new Date(2021,0,4); date < new Date(2022,0,10) ; date.setDate(date.getDate()+7)){
  let date2 = new Date(date)
  date2.setDate(date2.getDate()+6)
  console.log((weekNo < 10 ? "0"+weekNo : weekNo) + ". (" + getFormatedDate(date) + " - " + getFormatedDate(date2)+")")
  weekNo++
}

function getFormatedDate(date){
  let d1 = date.getDate() < 10 ? "0"+date.getDate() : date.getDate()
  let m1 = date.getMonth() + 1
  m1 = m1 < 10 ? "0"+m1 : m1
  let y1 = date.getFullYear()
  return d1+"."+m1+"."+y1
}


