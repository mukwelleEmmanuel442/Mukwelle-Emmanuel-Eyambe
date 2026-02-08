let loginCount = 0;
const MAX_LOGINS = 2;

function checkOTP() {
    const userOTP = document.getElementById("otpInput").value;
    const messageArea = document.getElementById("otpMessage");

    // Let's pretend the valid OTP is "ENGLISH123"
    if (userOTP === "ENGLISH123") {
        if (loginCount < MAX_LOGINS) {
            loginCount++;
            alert("Access Granted! Login " + loginCount + " of 2.");
            window.location.href = "video-content.html"; // Takes them to the video
        } else {
            messageArea.innerHTML = "OTP Expired. You have used your 2 logins. Please book a new class.";
            messageArea.style.color = "red";
        }
    } else {
        alert("Invalid OTP. Please check your email.");
    }
}


