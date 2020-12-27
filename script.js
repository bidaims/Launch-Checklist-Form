window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function validateFields(event) {
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let faultyItems = document.getElementById("faultyItems");
      
      //validating entries are not empty or in wrong types or with a negative value for fuel or cargoMass.
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
                 event.preventDefault();
      }else if (isNaN(fuelLevel.value)|| fuelLevel.value<0 || isNaN(cargoMass.value)|| cargoMass.value<0) {
            alert("Invalid Input, Make sure to enter valid information for each field");
      }else if (isNaN(pilotName.value)=== false || isNaN(copilotName.value)=== false) {
            alert ("Make sure to enter valid information for each field"); 
      }else{
      
            //updating status based on user's inputs
            if(fuelLevel.value<10000 && cargoMass.value>10000) {
                  launchStatus.style.color = "red";
                  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                  document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
                  document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
                  document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
                  document.getElementById("launchStatus").innerHTML = "Status Not Ready For Launch";
                  faultyItems.style.visibility = "visible";

            }else if(fuelLevel.value<10000 && cargoMass.value <= 10000) {
                  launchStatus.style.color = "red";
                  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                  document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
                  document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
                  document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                  document.getElementById("launchStatus").innerHTML = "Status Not Ready For Launch";
                  faultyItems.style.visibility = "visible";
                  
            }else if(fuelLevel.value>=10000 && cargoMass.value>10000) {
                  launchStatus.style.color = "red";
                  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                  document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
                  document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
                  document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
                  document.getElementById("launchStatus").innerHTML = "Status Not Ready For Launch";
                  faultyItems.style.visibility = "visible";
                  
            }else if (pilotName.value !== "" && copilotName.value !== "" && fuelLevel.value >=10000 && cargoMass.value <= 10000) {
                        launchStatus.innerHTML = "Shuttle is ready for launch";     
                        launchStatus.style.color = "green";  
                        
            }
            event.preventDefault();
      }
 
      })
});

//fetching a json file with the option of randomly selecting one of the objects in the file
fetch("https://handlers.education.launchcode.org/static/planets.json")
.then(function(response) {
      return response.json().then(function(json){   
            let dataContainer = document.getElementById("missionTarget");
            let i = parseInt(Math.random()*5)
            dataContainer.innerHTML += `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[i].name}</li>
               <li>Diameter: ${json[i].diameter}</li>
               <li>Star: ${json[i].star}</li>
               <li>Distance from Earth: ${json[i].distance}</li>
               <li>Number of Moons: ${json[i].moons}</li>
            </ol>
            <img src="${json[i].image}">`
      })
  })
