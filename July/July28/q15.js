// Task A
function startTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task A completed");
        }, 1000); // 1 second
    });
}

// Task B
function processTask(taskAResult) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task B processed: ${taskAResult}`);
        }, 1500); // 1.5 seconds
    });
}

// Task C
function finalizeTask(taskBResult) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Final result: ${taskBResult}`);
        }, 500); // 0.5 second
    });
}

// Chain the tasks
startTask()
    .then((resultA) => {
        console.log(resultA);
        return processTask(resultA);
    })
    .then((resultB) => {
        console.log(resultB);
        return finalizeTask(resultB);
    })
    .then((finalResult) => {
        console.log(finalResult);
    })
    .catch((error) => {
        console.error("Something went wrong:", error);
    });
