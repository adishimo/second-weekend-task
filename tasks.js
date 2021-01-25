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
const tableHead = [
  "Started At",
  "Finished At",
  "Total Time",
  "Tasks Given",
  "Tasks Finished",
  "Tasks Finished Percent",
  "Topic",
];

const table = document.createElement("table");
const row1 = document.createElement("tr");
for (let head of tableHead) {
  const header = document.createElement("th");
  const text = document.createTextNode(head);
  header.appendChild(text);
  row1.appendChild(header);
}
table.appendChild(row1);

////////////////

const CalculatingTimes = (className, row, totalTimeText) => {
  const totalTime = document.createElement("td");
  totalTime.className += className;
  const text = document.createTextNode(totalTimeText + "hours");
  totalTime.appendChild(text);
  row.appendChild(totalTime);
};
const FinishedPercent = (className, row, tasksGiven, tasksFinished) => {
  const p = Math.floor((tasksFinished / tasksGiven) * 100);
  const testFinishedPercent = document.createElement("td");
  testFinishedPercent.className += className;
  const text = document.createTextNode(p + "%");
  testFinishedPercent.appendChild(text);
  row.appendChild(testFinishedPercent);
};

for (let task of taskTable) {
  const row = document.createElement("tr");
  const startedAt = document.createElement("td");
  const textStarAt = document.createTextNode(task.startedAt);
  startedAt.appendChild(textStarAt);
  row.appendChild(startedAt);

  const finishedAt = document.createElement("td");
  const textFinishedAt = document.createTextNode(task.finishedAt);
  finishedAt.appendChild(textFinishedAt);
  row.appendChild(finishedAt);

  if (task.totalTime <= 2) {
    let className = "totalTimeGood";

    CalculatingTimes(className, row, task.totalTime);
  }

  if (task.totalTime > 2 && task.totalTime <= 5) {
    let className = "totalTimeM";

    CalculatingTimes(className, row, task.totalTime);
  }
  if (task.totalTime > 5) {
    let className = "totalTimeBad";

    CalculatingTimes(className, row, task.totalTime);
  }

  const tasksGiven = document.createElement("td");
  const td = document.createTextNode(task.tasksGiven);
  tasksGiven.appendChild(td);
  row.appendChild(tasksGiven);

  const tasksFinished = document.createElement("td");
  const textTasksFinished = document.createTextNode(task.tasksFinished);
  tasksFinished.appendChild(textTasksFinished);
  row.appendChild(tasksFinished);

  if (task.tasksFinishedPercent <= 50) {
    let className = "FinishedPercentBad";

    FinishedPercent(className, row, task.tasksGiven, task.tasksFinished);
  }

  if (task.tasksFinishedPercent > 50 && task.tasksFinishedPercent <= 75) {
    let className = "FinishedPercentM";

    FinishedPercent(className, row, task.tasksGiven, task.tasksFinished);
  }

  if (task.tasksFinishedPercent > 75) {
    let className = "FinishedPercentGood";

    FinishedPercent(className, row, task.tasksGiven, task.tasksFinished);
  }

  const topic = document.createElement("td");
  const textTopic = document.createTextNode(task.topic);
  topic.appendChild(textTopic);
  row.appendChild(topic);

  table.appendChild(row);
}
const body = document.getElementsByTagName("body")[0].appendChild(table);
