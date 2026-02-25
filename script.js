let interview = [];
let rejected = [];
let currentStatus = 'all';


let total = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");
let allcard = document.getElementById("job-list");
let mainContainer = document.querySelector("main");
const filteredJobsContainer = document.getElementById("filtered-jobs");
const jobCountElement = document.getElementById("job-count");
const deleteButtons = document.querySelectorAll(".card-delete-btn");

// delete button

for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", function() {
      
      this.parentElement.parentElement.remove();
      totaljob()
    }
    )
    
};

// no job message allcard.classList.contains("hidden")
const fallbackMessage = document.getElementById("no-jobs-message");
function showNoJobsMessage() {
    const joballcard =  allcard.classList.contains("hidden") || allcard.children.length === 0;
    const filtcard =  filteredJobsContainer.classList.contains("hidden") || filteredJobsContainer.children.length === 0;
    if(joballcard && filtcard)  {
        fallbackMessage.classList.remove("hidden");
    }else{
        fallbackMessage.classList.add("hidden");    
    }
        
}


function totaljob() {
    total.innerText = allcard.children.length;
    //jobCountElement.innerText = allcard.children.length;
    interviewCount.innerText = interview.length;
    rejectedCount.innerText = rejected.length;
}
totaljob();

//fild count job function
function updatetotal(){
    let total = 0;
    if(!allcard.classList.contains("hidden")){
        total += allcard.children.length
    }
    if(!filteredJobsContainer.classList.contains("hidden")){
        total += filteredJobsContainer.children.length;
    }
    jobCountElement.innerText = total;
}
updatetotal();

// button toggle class function
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
    currentStatus = id;
    console.log(currentStatus)

    theBtn.classList.add("bg-blue-500", "text-white");
    theBtn.classList.remove("bg-white", "text-black");

    if( id === 'interview-btn') {
        
        allcard.classList.add("hidden");
        document.getElementById("filtered-jobs").classList.remove("hidden");
         displayFilteredJobs(interview);
         
    }else if (id === 'all-btn') {
        document.getElementById("filtered-jobs").classList.add("hidden");
        allcard.classList.remove("hidden");
    }else if (id === 'rejected-btn') {
        allcard.classList.add("hidden");
        document.getElementById("filtered-jobs").classList.remove("hidden");
        displayRejectedJobs(rejected);
        
    }
    showNoJobsMessage();
    updatetotal();

}


// new element push in interview and rejected array and display in the dom


mainContainer.addEventListener("click", function(event) {
    showNoJobsMessage();
    
    if (event.target.classList.contains("card-interview-btn")) { //interview button click 1
        const parentNode = event.target.parentNode.parentNode;

    const cardName = parentNode.querySelector(".card-name").innerText;
    const cardJob = parentNode.querySelector(".card-job").innerText;
    const cardSalary = parentNode.querySelector(".card-salary").innerText;
    const cardStatus = parentNode.querySelector(".card-status").innerText;
    const cardDescription = parentNode.querySelector(".card-description").innerText;
    const cardInterviewBtn = parentNode.querySelector(".card-interview-btn").innerText;
    const cardRejectedBtn = parentNode.querySelector(".card-rejected-btn").innerText;
    const cardDeleteBtn = parentNode.querySelector(".card-delete-btn").innerText;
    
        parentNode.querySelector(".card-status").innerText = "Interview";
    const cardInfo = {
        cardName,
        cardJob,
        cardSalary,
        cardStatus: "Interview",
        cardDescription,
        cardInterviewBtn,
        cardRejectedBtn,
        cardDeleteBtn
    };
   
   const existingJob = interview.find(job => job.cardName == cardInfo.cardName);
   
   if (!existingJob) {
        interview.push(cardInfo);
        
        
   } 
    rejected = rejected.filter(job => job.cardName != cardInfo.cardName);
    if(currentStatus == 'rejected-btn'){
        displayRejectedJobs(rejected);
    }
    showNoJobsMessage()
    totaljob();
    }
    else if (event.target.classList.contains("card-rejected-btn")) { //rejected button click
        const parentNode = event.target.parentNode.parentNode;

    const cardName = parentNode.querySelector(".card-name").innerText;
    const cardJob = parentNode.querySelector(".card-job").innerText;
    const cardSalary = parentNode.querySelector(".card-salary").innerText;
    const cardStatus = parentNode.querySelector(".card-status").innerText;
    const cardDescription = parentNode.querySelector(".card-description").innerText;
    const cardInterviewBtn = parentNode.querySelector(".card-interview-btn").innerText;
    const cardRejectedBtn = parentNode.querySelector(".card-rejected-btn").innerText;
    const cardDeleteBtn = parentNode.querySelector(".card-delete-btn").innerText;
    
        parentNode.querySelector(".card-status").innerText = "Rejected";
    const cardInfo = {
        cardName,
        cardJob,
        cardSalary,
        cardStatus: "Rejected",
        cardDescription,
        cardInterviewBtn,
        cardRejectedBtn,
        cardDeleteBtn
    };
   
   const existingJob = rejected.find(job => job.cardName === cardInfo.cardName);
   
   if (!existingJob) {
        rejected.push(cardInfo);
   } 
    interview = interview.filter(job => job.cardName != cardInfo.cardName);
    if(currentStatus == 'interview-btn'){
        displayFilteredJobs(interview)
    }
   
   
        totaljob();
        showNoJobsMessage()
        
    }
updatetotal();
});


function displayFilteredJobs(jobs) {
    filteredJobsContainer.innerHTML = "";  
    for (const job of jobs) {
        const jobElement = document.createElement("div");
        jobElement.classList.add("bg-white", "p-4", "my-4", "space-y-4", "flex", "flex-col", "md:flex-row", "md:justify-between");
        jobElement.innerHTML = `
            <div class="space-y-4">
                <h2 class="card-name text-2xl font-bold text-[#002c5c]">${job.cardName}</h2>
                <p class="card-job text-gray-500 text-xl mt-1">${job.cardJob}</p>
                <p class="card-salary text-gray-500">${job.cardSalary}</p>
                <button class="card-status bg-[#EEF4FF] font-bold py-2 px-4">${job.cardStatus}</button>
                <p class="card-description to-gray-600">${job.cardDescription}</p>
                <button class="card-interview-btn text-green-500 font-bold py-2 px-4 rounded border border-green-500">${job.cardInterviewBtn}</button>
                <button class="card-rejected-btn text-red-500 font-bold py-2 px-4 border-red-500 border rounded ml-2">${job.cardRejectedBtn}</button>
            </div>  
            <div>
                <button class="card-delete-btn text-gray-300 border rounded-full p-2 w-12 h-12 border-gray-300"><i class="fa-solid fa-trash-can"></i></button>
            </div>  
        `;
        filteredJobsContainer.appendChild(jobElement);
}};

function displayRejectedJobs(jobs) {
    filteredJobsContainer.innerHTML = "";  
    for (const job of jobs) {
        const jobElement = document.createElement("div");
        jobElement.classList.add("bg-white", "p-4", "my-4", "space-y-4", "flex", "flex-col", "md:flex-row", "md:justify-between");
        jobElement.innerHTML = `
            <div class="space-y-4">
                <h2 class="card-name text-2xl font-bold text-[#002c5c]">${job.cardName}</h2>
                <p class="card-job text-gray-500 text-xl mt-1">${job.cardJob}</p>
                <p class="card-salary text-gray-500">${job.cardSalary}</p>
                <button class="card-status bg-[#EEF4FF] font-bold py-2 px-4">${job.cardStatus}</button>
                <p class="card-description to-gray-600">${job.cardDescription}</p>
                <button class="card-interview-btn text-green-500 font-bold py-2 px-4 rounded border border-green-500">${job.cardInterviewBtn}</button>
                <button class="card-rejected-btn text-red-500 font-bold py-2 px-4 border-red-500 border rounded ml-2">${job.cardRejectedBtn}</button>
            </div>  
            <div>
                <button class="card-delete-btn text-gray-300 border rounded-full p-2 w-12 h-12 border-gray-300"><i class="fa-solid fa-trash-can"></i></button>
            </div>  
        `;
        filteredJobsContainer.appendChild(jobElement);
    }
};



filteredJobsContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("card-delete-btn")){
        
        e.target.parentElement.parentElement.remove()
    }
})