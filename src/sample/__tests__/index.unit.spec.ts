import {
  greeting,
  sayMyName,
  saveMyName,
  addToMyList,
  showMyTasks,
  getNumTasks,
  Task,
} from "../assembly";
import { storage, PersistentDeque, VMContext, VM } from "near-sdk-as";

const contract = "greeting";
const alice = "alice";
const message1 = "hooray!";
const message2 = "yaşasın!";
const message3 = "beleza!";
let i: i32 = 0
let messages: PersistentDeque<string>;
let tasks = new Array<Task>();
 let newTask : Task;

describe("Greeting", () => {
  beforeEach(() => {
    VMContext.setCurrent_account_id(contract);
    VMContext.setSigner_account_id(alice);
    // messages = new PersistentDeque<string>("messages");
  });


  it("should respond to greeting()", () => {
    expect(greeting()).toStrictEqual("Hello!" + alice + "!");
    expect(VM.logs()).toContainEqual("greeting() was called");
  });

  it("should respond to sayMyName()", () => {
    expect(sayMyName()).toStrictEqual("Hello, " + alice + "!");
    expect(VM.logs()).toContainEqual("sayMyName() was called");
  });

  it("should respond to saveMyName()", () => {
    expect(saveMyName).not.toThrow();
    expect(storage.getString("last_sender")).toStrictEqual(alice);
    expect(VM.logs()).toContainEqual("saveMyName() was called");
  });

  it("should respond to addToMyList()", () => {
    const expected = alice + " says " + message1;
    expect(addToMyList(message1)).toBeTruthy();
    // expect(messages.first).toStrictEqual(expected);
    expect(newTask.taskText).toStrictEqual(message1);

    expect(tasks[0]).toStrictEqual(newTask);

    
  });
  
  it("should respond to getNumTasks()", () => {
    expect(getNumTasks()).toStrictEqual("Hello, You have " + messages.length.toString() + " tasks for today!");

      
  });

  it("should respond to showMyTasks()", () => {
    // messages.pushFront(message1);
    // messages.pushFront(message2);
    // messages.pushFront(message3);
    tasks[0].taskText = message1;
    tasks[1].taskText = message2;
    // expect(i).toStrictEqual(0);

    const output = showMyTasks();
    expect(output).toHaveLength(2);
    // expect(messages).toHaveLength(0);
    expect(VM.logs()).toContainEqual("getAllMessages() was called");
      
  });
});
