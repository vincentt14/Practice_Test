Q = "You are an IT company's manager. Based on their performance over the last N working days, you must rate your employee. You are given an array of N integers called workload, where workload[i] represents the number of hours an employee worked on an ith day. The employee must be evaluated using the following criteria";

Q = "Rating = the maximum number of consecutive working days when the employee has worked more than 6 hours."

Q = "You are given an integer N where N represents the number of working days. You are given an integer array workload where workload[i] represents the number of hours an employee worked on an ith day."

Q = "TASK = Determine the employee rating."

let workload = [8, 90, 6, 4, 2, 31, 31, 2, 4, 8, 8, 90];
let pass = [];

const solve = (workload) => {
  for(let i = 0; i < workload.length; i++){
    if(workload[i] > 6){
      for(let j = 0; j < pass.length; j++){
        if(pass[j] === workload[i]){
          pass.splice(j, 1)
        }
      }
      pass.push(workload[i]);
    }
  }
  console.log(pass);
  console.log(pass.length);
};

solve(workload);
