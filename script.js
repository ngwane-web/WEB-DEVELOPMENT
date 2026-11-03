// ==========================================
// Artisan Crust Bakery - Main JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const enquiryForm = document.querySelector("#enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default reload to handle validation
            
            const fullName = document.querySelector("#fullname").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (fullName === "" || email === "" || message === "") {
                alert("Please fill in all required fields before submitting your enquiry.");
                return;
            }

            // Success feedback
            alert(`Thank you, ${fullName}! Your enquiry has been successfully sent. We will get back to you via email shortly.`);
            enquiryForm.reset();
        });
    }
});