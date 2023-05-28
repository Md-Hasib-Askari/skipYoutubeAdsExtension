const skipButton = document.getElementsByClassName("ytp-ad-skip-button");
let addSkippedCount = 0;

setInterval(function () {
    // console.log("Working Start")
    if (skipButton[0] !== undefined &&  skipButton.length > 0) {
        skipButton[0].click();
        console.log("Add Skipped: "+ ++addSkippedCount);
    }
    // console.log("Working End")

}, 1000);
