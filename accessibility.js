document.addEventListener("DOMContentLoaded", () => {
    
    const btn = document.getElementById("contrastBtn");

    if(localStorage.getItem("constrast") === "on"){
        document.body.classList.add("high-contrast");
        btn.textContent = "☀ Normal Mode";
    }

    btn.addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
        
        if(document.body.classList.contains("high-contrast")){
            localStorage.setItem("contrast", "on");
            btn.textContent = "☀ Normal Mode";
        } else{
            localStorage.setItem("contrast", "off");
            btn.textContent = "🌙 High Contrast";
        }
    });
});
