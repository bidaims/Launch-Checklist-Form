window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function validateFields(event) {
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
                 event.preventDefault();
      }else if (isNaN(fuelLevel.value)|| isNaN(cargoMass.value)) {
            alert("Invalid Input, Make sure to enter valid information for each field");
      }else if (isNaN(pilotName.value) || isNaN(copilotName.value)) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
            //event.preventDefault();  
      }
      
      if (pilotName.value !== "" && copilotName.value !== "" && fuelLevel.value >=10000 && cargoMass.value <= 10000) {
            launchStatus.innerHTML = "Shuttle is ready for launch";     
            launchStatus.style.color = "green";  
            //event.preventDefault();
      }else if(fuelLevel.value<10000 && fuelLevel.value !== "") {
           launchStatus.style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
            document.getElementById("launchStatus").innerHTML = "Status Not Ready For Launch";
            faultyItems.style.visibility = "visible";
            
      }else if(cargoMass.value>10000) {
             launchStatus.style.color = "red";
             document.getElementById("launchStatus").innerHTML = "Status Not Ready For Launch";
             document.getElementById("cargoMass").innerHTML = "Too much mass for the shuttle to take off";
             faultyItems.style.visibility = "visible";
            //event.preventDefault();
          }
          event.preventDefault();
 
      })
});


      // let faultyItems = document.getElementById("faultyItems");
      // let pilotStatus = document.getElementById("pilotStatus");
      // let copilotStatus = document.getElementById("copilotStatus");
      // let fuelStatus = document.getElementById("fuelStatus");
      // let cargoStatus = document.getElementById("cargoStatus");

      // //let button = document.getElementById("formSubmit");
      // let missionTarget = document.getElementById("missionTarget");
      // let launchStatus = document.getElementById("launchStatus");
      // let launchStatusCheck = document.getElementById("launchStatusCheck");
      //    function visibility (faultyItems){
      //       faultyItems.style.visibility = "visible"
      //    }
      //    if (fuelLevel.value<10000){
      //       //alert("what no fuel?");
      //       console.log(visibility(document.querySelector("fuelStatus").innerHTML = "There is not enough fuel for the journey"));
      //       document.getElementById("launchStatus").innerHTML = "Status Not Ready For Launch";
      //       launchStatus.style.color = "red";
      //    }

   
//    }

// let newPilotStatus = null;
// let newCopilotStatus = null;
   // function updateStatus () {
   //    newPilotStatus = `Pilot ${pilotName.value} is ready for launch`
   //    newCopilotStatus = `Co-Pilot ${copilotName.value} is ready for launch`
      
   //       if (fuelLevel.value<10000){
      
   //          document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
   //       }

   //       if (cargoMass.value>10000) {
   //          document.getElementById("cargoMass").innerHTML = "Too much mass for the shuttle to take off";
   //       }
   //       button.addEventListener("click", function(){

   //          launchStatus.innerHTML = "Status Not Ready For Launch"
   //          launchStatus.style.color = "red";
   //       })
   // }
   //document.getElementById("faultyItems").style.visibility='visible'



//window.onload = updateStatus;

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
