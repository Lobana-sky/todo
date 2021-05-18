import {
  greeting,
  sayHi,
  addToMyList,
  showMyTasks,
  deleteTask,
  getNumTasks,
} from "../assembly";
import { PersistentVector, VMContext, VM , context } from "near-sdk-as";

const contract = "greeting";
const alice = "alice";
const task1 = "hooray!";
const task2 = "yaşasın!";
let i: i32 = 0
let tasks = new PersistentVector<string>('task');

describe("Greeting", () => {
  beforeEach(() => {
    VMContext.setCurrent_account_id(contract);
    VMContext.setSigner_account_id(alice);
  });


  it("should respond to greeting()", () => {
    expect(VM.logs()).toContainEqual("Hello " + context.sender + " !");
  });


  it("should respond to addToMyList()", () => {
    const expected = alice + " says " + task1;
    expect(addToMyList(task1)).toBeTruthy();
    // expect(messages.first).toStrictEqual(expected);

    expect(tasks[0]).toStrictEqual(task1);

    
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
    expect(showMyTasks()).toStrictEqual(["Dear " + context.sender + " All tasks DONE!"]);
    
  });
});
