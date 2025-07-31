let promise = new Promise((resolve, reject) => {
    // async operation
    if (success) {
        resolve('Data received');
    } else {
        reject('Error occurred');
    }
});


const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) resolve("✅ Data fetched!");
            else reject("❌ Failed to fetch");
        }, 2000);
    });
};
