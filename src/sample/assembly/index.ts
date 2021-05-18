import { context,
  logging,
  storage,
  u128,
  PersistentSet,
  PersistentVector } from "near-sdk-as";

  export function sayHi(): bool {
   logging.log("HIIIIIIIIIII");
 
   return true;
 }

  export function greeting(): string {
 logging.log("sayHello() was called");

 return "Hello!" + context.sender + "!";
}

export function sayMyName(): string {
 logging.log("sayMyName() was called");

 return "Hello, " + context.sender + "!";
}

export function saveMyName(): void {
 logging.log("saveMyName() was called");

 storage.setString("last_sender", context.sender);
}

export class Task {
 taskText: string = 'new task';
 done: boolean = true;

 constructor(taskText: string, done: bool) {
   taskText = this.taskText;
   done = this.done; 
}
}

let tasks = new PersistentVector<string>('task');

export function addToMyList(task: string): string {

 assert(task.length > 0, "Task can not be blank.");
 tasks.push(task);
 return task.toString() + " task is ADDED";
}

export function showMyTasks(): Array<string> {

 let listToPrint = new Array<string>();
 let i: i32 = 0;
 if(tasks.length == 0){
 listToPrint.push("Dear " + context.sender + " All tasks DONE!")
 }
 while (i < tasks.length) {
 listToPrint.push(tasks[i])
 i++
 }
 return listToPrint;
}

export function deleteTask(task: i32): string {
   // const taskToDelete: string = tasks.replace(task - 1, "");
   // tasks.replace(task - 1, taskToDelete + "  .... DELETED");
   if(tasks.containsIndex(task - 1)){
   tasks.swap_remove(task - 1);
   return "The " + task.toString() + " task is DELETED";
 }
 return "There is No tasks to delete";
 
}

export function getNumTasks(): String {
 return "Hello "+ context.sender +  ", You have " + tasks.length.toString()
  + " tasks for today!";


}
