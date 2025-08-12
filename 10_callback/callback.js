console.log("Start");

function getData(callback) {
    setTimeout(() => {
        console.log("Data received");
        callback();
    }, 1000);
}

getData(() => {
    console.log("Processing data...");
});

console.log("End");
