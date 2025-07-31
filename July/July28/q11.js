function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}


timer(2000, (message) => {
  console.log(message);  // Logs after 2 seconds: "Timer of 2000 ms finished"
});
