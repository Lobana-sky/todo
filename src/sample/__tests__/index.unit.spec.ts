import {
  greetingUser,
  sayHi,
  addToMyList,
  showMyTasks,
  deleteTask,
  getNumTasks,
} from "../assembly";
import { PersistentVector, VMContext, VM , context } from "near-sdk-as";

const contract = "greeting";
const alice = "alice";
const task1 = "wake up morning!";
const task2 = "codeing";
let i: i32 = 0
let tasks = new PersistentVector<string>('task');

describe("greeting", () => {
  beforeEach(() => {
    VMContext.setCurrent_account_id(contract);
    VMContext.setSigner_account_id(alice);
  });


  it("should respond to greetingUser()", () => {
    expect(greetingUser()).toStrictEqual("Hello " + context.sender + " !");

  });


  it("should respond to addToMyList()", () => {
    // expect(tasks.first).toStrictEqual(task1);
    expect(addToMyList(task1)).toStrictEqual(task1 + " task is ADDED");

    
  });
  
  it("should respond to getNumTasks()", () => {
    expect(getNumTasks()).toStrictEqual("Hello " + context.sender + ", You have " + 
    tasks.length.toString() + " tasks for today!");

      
  });

  it("should respond to showMyTasks()", () => {
    tasks.push(task1)
    tasks.push(task2);

    const output = showMyTasks();
    expect(output).toHaveLength(2);
    expect(showMyTasks()).toStrictEqual([task1, task2]);
    if(tasks.length == 0){
    expect(showMyTasks()).toStrictEqual(["Dear " + context.sender + " All tasks DONE!"]);

    }
    
  });
});
