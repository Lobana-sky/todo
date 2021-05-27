import { 
  context,
  logging,
  PersistentVector 
} from "near-sdk-as";

//print hi without context.sender so need view
export function sayHi(): bool {
   logging.log("HIIIIIIIIIII");
   return true;
}

//print hi with context.sender so need call
export function greetingUser(): string {
  return "Hello " + context.sender + " !";
}

//listTODO 'task' 
let tasks = new PersistentVector<string>('task');

//add a new task to tasklist
export function addToMyList(task: string): string {
  assert(task.length > 0, "Task can not be blank.");
  tasks.push(task);
  return task.toString() + " task is ADDED";
}

//to show all my tasks return
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



export class Task {
  taskText: string = 'new task';
  done: boolean = true;
  constructor(taskText: string, done: bool) {
    taskText = this.taskText;
    done = this.done; 
   }
 }
 
