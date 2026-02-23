
let jobs = [
{id:1,company:"Mobile First Corp",position:"React Native Developer",location:"Remote",type:"Full-time",salary:"$130k - $175k",description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",status:"none"},

{id:2,company:"WebFlow Agency",position:"Web Designer",location:"Los Angeles",type:"Part-time",salary:"$80k - $120k",description:"Design high quality web experiences for global clients.",status:"none"},

{id:3,company:"DataViz Solutions",position:"Data Visualization Specialist",location:"Boston",type:"Full-time",salary:"$125k - $165k",description:"Create dashboards and business intelligence reports.",status:"none"},

{id:4,company:"CloudFirst Inc",position:"Backend Developer",location:"Seattle",type:"Full-time",salary:"$140k - $190k",description:"Build scalable backend systems using Python and AWS.",status:"none"},

{id:5,company:"Innovation Labs",position:"UI/UX Engineer",location:"Austin",type:"Full-time",salary:"$110k - $150k",description:"Design modern interfaces for SaaS platforms.",status:"none"},

{id:6,company:"StartupXYZ",position:"Full Stack Engineer",location:"Remote",type:"Full-time",salary:"$120k - $160k",description:"Work on startup core platform using Node and React.",status:"none"},

{id:7,company:"StartupXYZ",position:"Full Stack Engineer",location:"Remote",type:"Full-time",salary:"$120k - $160k",description:"Work on startup core platform using Node and React.",status:"none"},

{id:8,company:"StartupXYZ",position:"Full Stack Engineer",location:"Remote",type:"Full-time",salary:"$120k - $160k",description:"Work on startup core platform using Node and React.",status:"none"},
];

let currentTab="all";

function render(){
  const container=document.getElementById("jobContainer");
  container.innerHTML="";
  
  let filtered = currentTab==="all"
    ? jobs
    : jobs.filter(job=>job.status===currentTab);

  document.getElementById("tabCount").innerText = filtered.length+" Jobs";

  if(filtered.length===0){
    container.innerHTML = `
      <div class="empty">
        <img src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"/>
        <h3>No jobs available</h3>
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
      </h3>

      <div class="meta">${job.position}</div>
      <div class="meta">${job.location} • ${job.type} • ${job.salary}</div>
      <div class="status ${job.status}">
        ${job.status==="none"?"Not Applied":job.status}
      </div>
      <div class="description">${job.description}</div>
      <div class="buttons">
        <button class="interview-btn" onclick="setStatus(${job.id},'interview')">Interview</button>
        <button class="reject-btn" onclick="setStatus(${job.id},'rejected')">Rejected</button>
      </div>
    </div>`;
});

  updateCounts();
}

function setStatus(id,status){
  jobs = jobs.map(job=>{
    if(job.id===id){
      job.status = job.status===status ? "none" : status;
    }
    return job;
  });
  render();
}

function deleteJob(id){
  jobs = jobs.filter(job=>job.id!==id);
  render();
}

function switchTab(tab){
  currentTab=tab;
  document.querySelectorAll(".tabs button").forEach(btn=>btn.classList.remove("active"));
  event.target.classList.add("active");
  render();
}

function updateCounts(){
  document.getElementById("totalCount").innerText=jobs.length;
  document.getElementById("interviewCount").innerText=jobs.filter(j=>j.status==="interview").length;
  document.getElementById("rejectedCount").innerText=jobs.filter(j=>j.status==="rejected").length;
}

render();
