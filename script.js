// All Data 

async function getData() {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
let data = await getData();
let html = '';
    data.map(eachData => {
        let htmlSegment = `<div class="col-3">                
        <div class="card" style="width: 14rem;">
        <div class="container">
            <img class="card-img-top" src="${eachData.links.mission_patch_small}" alt="Card image cap">
            <div class="card-body">
              <h6 class="card-title missionName">${eachData.mission_name} #${eachData.flight_number}</h6>
              <h6 class="card-title"><span class="details">Mission Ids: </span><span class="dynamicData">${(eachData.mission_id.length === 0) ? "NA" : eachData.mission_id.join()}</span></h6>
              <h6 class="card-title"><span class="details">Launch Year: </span><span class="dynamicData">${eachData.launch_year}</span></h6>
              <h6 class="card-title"><span class="details">Successful Launch: </span><span class="dynamicData">${eachData.launch_success ? "True" : "False"}</span></h6>
              <h6 class="card-title"><span class="details">Successful Landing: </span><span class="dynamicData">${(eachData.rocket.first_stage.cores[0].land_success === null) ? 'NA': eachData.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span></h6>
            </div>
        </div>                            
    </div>
    </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.data');
    container.innerHTML = html;
}
renderData()

async function renderLaunchSuccessData() {
    alert("Loading: Successful Launch...")
    let data = await getData();
    console.log(data)
    let html = '';
        data.map(eachData => {
            if(eachData.launch_success === true) {
                let htmlSegment = `<div class="col-3">                
            <div class="card" style="width: 14rem;">
            <div class="container">
                <img class="card-img-top" src="${eachData.links.mission_patch_small}" alt="Card image cap">
                <div class="card-body">
                  <h6 class="card-title missionName">${eachData.mission_name} #${eachData.flight_number}</h6>
                  <h6 class="card-title"><span class="details">Mission Ids: </span><span class="dynamicData">${(eachData.mission_id.length === 0) ? "NA" : eachData.mission_id.join()}</span></h6>
                  <h6 class="card-title"><span class="details">Launch Year: </span><span class="dynamicData">${eachData.launch_year}</span></span></h6>
                  <h6 class="card-title"><span class="details">Successful Launch: </span><span class="dynamicData">${eachData.launch_success ? "True" : "False"}</span></h6>
                  <h6 class="card-title"><span class="details">Successful Landing: </span><span class="dynamicData">${(eachData.rocket.first_stage.cores[0].land_success === null) ? 'NA': eachData.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span></h6>
                </div>
            </div>                            
        </div>
        </div>`;
    
            html += htmlSegment;
            }
            
        });
    
        let container = document.querySelector('.data');
        container.innerHTML = html;
    alert("Successful Loaded. Click OK to view...")

    }

    // Launch Failure Data 

async function renderLaunchFailureData() {
    alert("Loading: Failed Launch...")
    let data = await getData();
    let html = '';
        data.map(eachData => {
            if(eachData.launch_success !== true) {
                let htmlSegment = `<div class="col-3">                
            <div class="card">
            <div class="container">
                <img class="card-img-top" src="${eachData.links.mission_patch_small}" alt="Card image cap">
                <div class="card-body">
                  <h6 class="card-title missionName">${eachData.mission_name} #${eachData.flight_number}</h6>
                  <h6 class="card-title"><span class="details">Mission Ids: </span><span class="dynamicData">${(eachData.mission_id.length === 0) ? "NA" : eachData.mission_id.join()}</span></h6>
                  <h6 class="card-title"><span class="details">Launch Year: </span><span class="dynamicData">${eachData.launch_year}</span></h6>
                  <h6 class="card-title"><span class="details">Successful Launch: </span><span class="dynamicData">${eachData.launch_success ? "True" : "False"}</span></h6>
                  <h6 class="card-title"><span class="details">Successful Landing: </span><span class="dynamicData">${(eachData.rocket.first_stage.cores[0].land_success === null) ? 'NA': eachData.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span></h6>
                </div>
            </div>                            
        </div>
        </div>`;
    
            html += htmlSegment;
            }            
        });
    
        let container = document.querySelector('.data');
        container.innerHTML = html;
    alert("Successful Loaded. Click OK to view...")

    }

    // Land Success Data 

async function renderLandSuccessData() {
    alert("Loading: Successful Landing...")
    let data = await getData();
    console.log(data)
    let html = '';
        data.map(eachData => {
            if(eachData.rocket.first_stage.cores[0].land_success === true) {
                let htmlSegment = `<div class="col-3">                
            <div class="card" style="width: 14rem;">
            <div class="container">
                <img class="card-img-top" src="${eachData.links.mission_patch_small}" alt="Card image cap">
                <div class="card-body">
                  <h6 class="card-title missionName">${eachData.mission_name} #${eachData.flight_number}</h6>
                  <h6 class="card-title"><span class="details">Mission Ids: </span><span class="dynamicData">${(eachData.mission_id.length === 0) ? "NA" : eachData.mission_id.join()}</span></h6>
                  <h6 class="card-title"><span class="details">Launch Year: </span><span class="dynamicData">${eachData.launch_year}</span></span></h6>
                  <h6 class="card-title"><span class="details">Successful Launch: </span><span class="dynamicData">${eachData.launch_success ? "True" : "False"}</span></h6>
                  <h6 class="card-title"><span class="details">Successful Landing: </span><span class="dynamicData">${(eachData.rocket.first_stage.cores[0].land_success === null) ? 'NA': eachData.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span></h6>
                </div>
            </div>                            
        </div>
        </div>`;
    
            html += htmlSegment;
            }
            
        });
    
        let container = document.querySelector('.data');
        container.innerHTML = html;
    alert("Successful Loaded. Click OK to view...")

    }

    // Land Failure Data 

async function renderLandFailureData() {
    alert("Loading: Failed Landing...")
    let data = await getData();
    let html = '';
        data.map(eachData => {
            if(eachData.rocket.first_stage.cores[0].land_success === false) {
                let htmlSegment = `<div class="col-3">                
            <div class="card">
            <div class="container">
                <img class="card-img-top" src="${eachData.links.mission_patch_small}" alt="Card image cap">
                <div class="card-body">
                  <h6 class="card-title missionName">${eachData.mission_name} #${eachData.flight_number}</h6>
                  <h6 class="card-title"><span class="details">Mission Ids: </span><span class="dynamicData">${(eachData.mission_id.length === 0) ? "NA" : eachData.mission_id.join()}</span></h6>
                  <h6 class="card-title"><span class="details">Launch Year: </span><span class="dynamicData">${eachData.launch_year}</span></h6>
                  <h6 class="card-title"><span class="details">Successful Launch: </span><span class="dynamicData">${eachData.launch_success ? "True" : "False"}</span></h6>
                  <h6 class="card-title"><span class="details">Successful Landing: </span><span class="dynamicData">${(eachData.rocket.first_stage.cores[0].land_success === null) ? 'NA': eachData.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span></h6>
                </div>
            </div>                            
        </div>
        </div>`;
    
            html += htmlSegment;
            }            
        });
    
        let container = document.querySelector('.data');
        container.innerHTML = html;
    alert("Successful Loaded. Click OK to view...")

    }

    // Get Data By Year

    function storeYear() {
        var year = document.getElementsByTagName('span');
        for (var i = 0; i < year.length; i++) {
            year[i].onclick = function () {
                localStorage.setItem('year', this.innerText)                  
            }
        }
    }
    
    async function renderDataByYear() {
        alert("Loading: Data By Year")
        let data = await getData();  
        if (localStorage.getItem('year') === null) {
            alert("Failed to load data... Try again")
            return false
        } else {
            var year = localStorage.getItem('year');
        }              
        console.log(year)
        let html = '';
            data.map(eachData => {
                if(eachData.launch_year === year) {
                    let htmlSegment = `<div class="col-md-3">                
                <div class="card" style="width: 14rem;">
                <div class="container">
                    <img class="card-img-top" src="${eachData.links.mission_patch_small}" alt="Card image cap">
                    <div class="card-body">
                      <h6 class="card-title missionName">${eachData.mission_name} #${eachData.flight_number}</h6>
                      <h6 class="card-title"><span class="details">Mission Ids: </span><span class="dynamicData">${(eachData.mission_id.length === 0) ? "NA" : eachData.mission_id.join()}</span></h6>
                      <h6 class="card-title"><span class="details">Launch Year: </span><span class="dynamicData">${eachData.launch_year}</span></h6>
                      <h6 class="card-title"><span class="details">Successful Launch: </span><span class="dynamicData">${eachData.launch_success ? "True" : "False"}</span></h6>
                      <h6 class="card-title"><span class="details">Successful Landing: </span><span class="dynamicData">${(eachData.rocket.first_stage.cores[0].land_success === null) ? 'NA': eachData.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span></h6>
                    </div>
                </div>                            
            </div>
            </div>`;
        
                html += htmlSegment;
                }            
            });
        
            let container = document.querySelector('.data');
            container.innerHTML = html;
        alert("Successful Loaded. Click OK to view...")
    
        }

        