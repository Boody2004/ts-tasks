// create getDate function as a module
// leave the body of the function empty
// create a new file "days", and create empty enum inside
// fix multiple if stantement

import { Days } from "./enum/days";
export const getDate = (day) => {
  switch (day) {
    case Days.Monday:
      console.log('Monday')
      break;
    case Days.Tuesday:
      console.log('Tuesday')
      break;    
    case Days.Wednesday:
      console.log('Wednesday')
      break;    
    case Days.Thursday:
      console.log('Thursday')
      break;    
    case Days.Friday:
      console.log('Friday')
      break;    
    case Days.Saturday:
      console.log('Saturday')
      break;    
    case Days.Sunday:
      console.log('Sunday')
      break;
    default:
      console.log('Wrong value')
      break;
  }
};