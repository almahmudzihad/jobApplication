


let total = document.getElementById("total");
let allcard = document.getElementById("job-list");


function totaljob() {
    total.innerText = allcard.children.length;
}
totaljob();


function activeBtn(id) {
    let allBtn = document.getElementById("all-btn");
    let interviewBtn = document.getElementById("interview-btn");
    let rejectedBtn = document.getElementById("rejected-btn");
    
    allBtn.classList.remove("bg-blue-500", "text-white");
    allBtn.classList.add("bg-white", "text-black");
    interviewBtn.classList.add("bg-white", "text-black");
    interviewBtn.classList.remove("bg-blue-500", "text-white");
    rejectedBtn.classList.add("bg-white", "text-black");
    rejectedBtn.classList.remove("bg-blue-500", "text-white");
    theBtn = document.getElementById(id);
    theBtn.classList.add("bg-blue-500", "text-white");
    theBtn.classList.remove("bg-white", "text-black");
}


