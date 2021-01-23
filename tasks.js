"use strict";

let task1 = {
  startedAt: new Date("2021-01-01:13:00"),
  finishedAt: new Date("2021-01-01:17:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "Html",
};

let task2 = {
  startedAt: new Date("2021-01-02:12:00"),
  finishedAt: new Date("2021-01-02:22:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "Html",
};

let task3 = {
  startedAt: new Date("2021-01-03:13:00"),
  finishedAt: new Date("2021-01-03:23:00"),
  tasksGiven: 3,
  tasksFinished: 2,
  topic: "Html",
};

let task4 = {
  startedAt: new Date("2021-01-04:13:00"),
  finishedAt: new Date("2021-01-04:19:00"),
  tasksGiven: 5,
  tasksFinished: 1,
  topic: "Html",
};

let task5 = {
  startedAt: new Date("2021-01-05:10:00"),
  finishedAt: new Date("2021-01-05:11:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "css",
};

let task6 = {
  startedAt: new Date("2021-01-06:11:00"),
  finishedAt: new Date("2021-01-06:22:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "css",
};

let task7 = {
  startedAt: new Date("2021-01-07:12:00"),
  finishedAt: new Date("2021-01-07:17:00"),
  tasksGiven: 3,
  tasksFinished: 1,
  topic: "js",
};

let task8 = {
  startedAt: new Date("2021-01-08:11:00"),
  finishedAt: new Date("2021-01-08:22:00"),
  tasksGiven: 2,
  tasksFinished: 2,
  topic: "js",
};

let task9 = {
  startedAt: new Date("2021-01-09:10:00"),
  finishedAt: new Date("2021-01-09:23:00"),
  tasksGiven: 4,
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

let tableHead = [
  "Started At",
  "Finished At",
  "Total Time",
  "Tasks Given",
  "Tasks Finished",
  "Tasks Finished Percent",
  "Topic",
];
document.write("<table>");
document.write("<tr class = 'tr'>");
for (let head of tableHead) {
  document.write("<th>" + head + "</th>");
}

document.write("</tr>");
for (let task of taskTable) {
  document.write("<tr>");
  document.write("<td>" + task.startedAt + "</td>");
  document.write("<td>" + task.finishedAt + "</td>");
  if (task.totalTime <= 2) {
    let className = "totalTimeGood";
    document.write(
      `<td class="${className}"> ${task.totalTime + "hours"} </td>`
    );
  }
  if (task.totalTime > 2 && task.totalTime <= 5) {
    let className = "totalTimeM";
    document.write(
      `<td class="${className}"> ${task.totalTime + "hours"}  </td>`
    );
  }

  if (task.totalTime > 5) {
    let className = "totalTimeBad";
    document.write(
      `<td class="${className}"> ${task.totalTime + "hours"} </td>`
    );
  }
  document.write("<td>" + task.tasksGiven + "</td>");
  document.write("<td>" + task.tasksFinished + "</td>");
  if (task.tasksFinishedPercent <= 50) {
    let className = "FinishedPercentBad";
    document.write(
      `<td class="${className}"> ${task.tasksFinishedPercent + "%"} </td>`
    );
  }

  if (task.tasksFinishedPercent > 50 && task.tasksFinishedPercent <= 75) {
    let className = "FinishedPercentM";
    document.write(
      `<td class="${className}"> ${task.tasksFinishedPercent + "%"} </td>`
    );
  }
  if (task.tasksFinishedPercent > 75) {
    let className = "FinishedPercentGood";
    document.write(
      `<td class="${className}"> ${task.tasksFinishedPercent + "%"} </td>`
    );
  }
  document.write("<td>" + task.topic + "</td>");

  document.write("</tr>");
}
document.write("</table>");
