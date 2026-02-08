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
<script>
    const bookingForm = document.getElementById('bookingForm');
    const paymentModal = document.getElementById('paymentModal');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        paymentModal.style.display = "block";
    }); async function processPayment() {
        try {
            // 1. Collect Data
            const name = document.getElementById('studentName').value;
            const time = document.getElementById('classTime').value;
            const tutorDropdown = document.getElementById('tutorSelect');
            const selectedTutorName = tutorDropdown.options[tutorDropdown.selectedIndex].text;

            // 2. Notification to Formspree
            await fetch('https://formspree.io/f/xdalojvp', {
                method: 'POST',
                body: JSON.stringify({ tutor: selectedTutorName, student: name, time: time }),
                headers: { 'Content-Type': 'application/json' }
            });

            // 3. Message for LINE
            const message = `✅ PAID BOOKING VERIFIED\nStudent: ${name}\nTime: ${time}`;
            const lineUrl = `https://line.me/ti/p/~teacherwhite1?text=${encodeURIComponent(message)}`;

            window.open(lineUrl, '_blank');
            alert("Payment and Verification Sent!");

            // 4. Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = 'room.html';
            }, 2000);

        } catch (err) {
            console.error(err);
            alert("Error: Check your connection.");
        }
    }
</script>



