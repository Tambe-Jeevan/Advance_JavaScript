console.log("Start");

async function fetchData() {
    let data = await new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 1000);
    });
    console.log(data);
}

fetchData();

console.log("End");
