
 let jobs =[
{id:1,company:"React Native Developer" , position:"React Native Developer", location:"remote", type: "full-time", salary:" $130,000 - $175,000", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"none"},

{id:2,company:"WebFlow Agency" , position:"Web Designer & Developer", location:"Los Angeles,Ca", type: "Part-time", salary:" $130,000 - $175,000", description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"none"},

{id:3,company:"Data Visualization Specialist" , position:"Data Visualization Specialist", location:"Boston, MA", type: "Full-time", salary:"  $125,000 - $165,000", description:"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status:"none"},

{id:4,company:"CloudFirst Inc" , position:"Backend Developer", location:"Seattle, WA", type: "Full-time", salary:"  $140,000 - $190,000", description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:"none"},

{id:5,company:"Innovation Labs" , position:"UI/UX Engineer", location:"Austin, TX", type: "Full-time", salary:"   $110,000 - $150,000", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:"none"},

{id:6,company:"MegaCorp Solutions" , position:"JavaScript Developer", location:"New York, NY", type: "Full-time", salary:"  $130,000 - $170,00", description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:"none"},

{id:7,company:"StartupXYZ" , position:"Full Stack Engineer", location:"Remote", type: "Full-time", salary:"  $130,000 - $170,00", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:"none"},

{id:8,company:"TechCorp Industries" , position:"Senior Frontend Developer", location:"San Francisco, CA", type: "Full-time", salary:"   $130,000 - $175,000", description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:"none"},
];

let currentTab="all";
function render()
{
  const container=document.getElementById("jobContainer");
  container.innerHTML="";
    let filtered = currentTab==="all"
    ? jobs
    : jobs.filter( job=>job.status===currentTab);
    

if(currentTab==="all"){
  document.getElementById("tabCount").innerText =
    jobs.length + "jobs"; 
} else
{
   document.getElementById("tabCount").innerText =
    filtered.length + "of  " + jobs.length + "jobs";
}
  if(filtered.length===0){
    container.innerHTML = `
      <div class="empty">
         <img src="Empty.png" alt="">
        <h3> No jobs available</h3>
        <p>Check back soon for new job opportunities</p>
        </div>`;
    return;
  }

  filtered.forEach(job=>{
   container.innerHTML +=`
    <div class="card">
      <div class="delete" onclick="deleteJob(${job.id})"><i class="fa-solid fa-trash"></i></div>
      <h3 class="company-name company-${job.id}">
        ${job.company}
        ${job.company}
        </h3>
  
      <div class="meta">${job.position}</div>
      <div class="meta">${job.location}• ${job.type}• ${job.salary}</div>
      <div class="status ${job.status}"> 


        ${job.status==="none"?"Not Applied":job.status}

      </div>

      <div class="description">${job.description}</div>
      <div class="buttons">

        <button class="interview-btn" onclick="setStatus(${job.id},'interview')">Interview</button>
        <button class="reject-btn" onclick="setStatus(${job.id},'rejected')">Reject</button>
        </div>
       </div>`;
 });

  updateCounts();
}

function setStatus(id,status){
  jobs = jobs.map(job=>{
    if(job.id===id){
      job.status = job.status===status ? "none" :status;
    }
    return job;
});
  render();
}
function deleteJob(id){
  jobs = jobs. filter (job=> job.id!==id);
  render();
}

function switchTab (tab){
  currentTab=tab;
  document.querySelectorAll(".tabs button").forEach (btn=>btn.classList.remove("active"));
  event.target.classList.add("active");
   render();
}

function updateCounts(){
  document.getElementById("totalCount").innerText=jobs.length;
  document.getElementById("interviewCount").innerText=jobs.filter(j=>j.status==="interview").length;
  document.getElementById("rejectedCount").innerText=jobs.filter(j=>j.status==="rejected").length;
}
render();
