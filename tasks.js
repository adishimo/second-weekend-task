"use strict";

let task1 = {
  startedAt: new Date("2021-01-3:13:00"),
  finishedAt: new Date("2021-01-11:19:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "Html",
};

let task2 = {
  startedAt: new Date("2021-01-4:13:00"),
  finishedAt: new Date("2021-01-4:22:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "Html",
};

let task3 = {
  startedAt: new Date("2021-01-5:13:00"),
  finishedAt: new Date("2021-01-5:23:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "Html",
};

let task4 = {
  startedAt: new Date("2021-01-6:13:00"),
  finishedAt: new Date("2021-01-6:19:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "Html",
};

let task5 = {
  startedAt: new Date("2021-01-7:14:00"),
  finishedAt: new Date("2021-01-7:00:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "css",
};

let task6 = {
  startedAt: new Date("2021-01-8:11:00"),
  finishedAt: new Date("2021-01-8:22:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "css",
};

let task7 = {
  startedAt: new Date("2021-01-9:12:00"),
  finishedAt: new Date("2021-01-9:23:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "js",
};

let task8 = {
  startedAt: new Date("2021-01-10:11:00"),
  finishedAt: new Date("2021-01-10:22:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "js",
};

let task9 = {
  startedAt: new Date("2021-01-11:10:00"),
  finishedAt: new Date("2021-01-11:23:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "js",
};
let taskTable = [task1, task2, task3, task4, task5, task6, task7, task8, task9];
// add total time of work and finished percent  properties to each work
for (let task of taskTable) {
  task["totalTime"] = (task.finishedAt - task.startedAt) / 3600000;
  task["tasksFinishedPercent"] = Math.floor(
    (task.tasksFinished / task.tasksGiven) * 100
  );
  task.startedAt = task.startedAt.toLocaleTimeString();
  task.finishedAt = task.finishedAt.toLocaleTimeString();
}
console.log(task1.startedAt);

let tableHead = [
  "started At",
  "finished At",
  "tasks Given",
  "tasks Finished",
  "topic",
  "totalTime",
  "tasksFinishedPercent",
];
document.write("<table>");
document.write("<tr>");
for (let head of tableHead) {
  document.write("<th>" + head + "</th>");
}

document.write("</tr>");
for (let task of taskTable) {
  document.write("<tr>");
  document.write("<td>" + task.startedAt + "</td>");
  document.write("<td>" + task.finishedAt + "</td>");
  document.write("<td>" + task.tasksGiven + "</td>");
  document.write("<td>" + task.tasksFinished + "</td>");
  document.write("<td>" + task.topic + "</td>");
  document.write("<td class = 'totalTime'>" + task.totalTime + "</td>");
  document.write(
    "<td class = 'percent'>" + task.tasksFinishedPercent + "</td>"
  );
  document.write("</tr>");
}
document.write("</table>");
