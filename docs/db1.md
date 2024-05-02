---
template: overrides/main.html
hide:
  - navigation
  - toc
---

# Try our experts - see how skilled they are..
| **NAIDU** | **Alice** | **BRIAN** | **SPN**| **ERPHAN** | **SRIDHAR** |**EMMANUEL** |
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|
|<video id="101" width="auto" height="140" autoplay loop><source src="../public/naidu.idle.mp4">Your browser does not support HTML5 video.</video> <br><label><input type="checkbox" class="checkbox" value=" AUDI Sales Lead"> AUDI Sales Lead </label> |<video id="101" width="auto" height="140" autoplay loop><source src="../public/alice.idle.mp4">Your browser does not support HTML5 video.</video> <br><label><input type="checkbox" class="checkbox" value="BMW Sales Lead"> BW Sales Lead </label>  | <video id="102" width="auto" height="140" autoplay loop><source src="../public/brian.idle.mp4">Your browser does not support HTML5 video.</video><br><label><input type="checkbox" class="checkbox" value="Volvo Sales Lead"> Volvo Sales Lead </label>  | <video id="103" width="auto" height="140" autoplay loop><source src="../public/spn.idle.mp4">Your browser does not support HTML5 video.</video> <br><label><input type="checkbox" class="checkbox" value="Mercedes Sales Lead"> Mercedes Sales Lead </label>  | <video id="104" width="auto" height="140" autoplay loop><source src="../public/esd.idle.mp4">Your browser does not support HTML5 video.</video><br><label><input type="checkbox" class="checkbox" value="Ford Sales Lead"> Ford Sales Lead </label> | <video id="105" width="auto" height="140" autoplay loop><source src="../public/spnizen.idle.mp4">Your browser does not support HTML5 video.</video> <br><label><input type="checkbox" class="checkbox" value="Honda Sales Lead"> Honda Sales Lead </label> | <video id="106" width="auto" height="140" autoplay loop><source src="../public/ebb.idle.mp4">Your browser does not support HTML5 video.</video> <br><label><input type="checkbox" class="checkbox" value="Toyota Sales Lead"> Toyota Sales Lead </label> |


<div class="container">
<input type="checkbox" id="selectAll"> Select All<br>
  <div class="row">
    <div class="col-sm-3">
        <img id="usrImg" src="" class="responsive">
        <div class="video-container">
          <video id="usrVideo"  playsinline loop poster="" style='display: none;'> <!-- ./public/images/thumbnail.jpeg-->
            <source id="mp4_src" src="" type="video/mp4">
              Your browser does not support HTML5 video.
          </video>
          <div id="result">Listed Roles</div>
          <div id="history_area" class="responsive" style='display: block;'>
            <textarea readonly class="form-control" id="historyArea" style="color:#777;background-color:transparent;border:1px solid #ddd;font-size:12px;width:100%;height:115px;resize:none;overflow-y:scroll;"></textarea>                         
          </div>
        </div>  
        <p id="charCount" style='display: none;'>0 characters</p>
        <input id="chatInput" type="text" class="form-control" placeholder="Type in text here .. " autofocus="autofocus"/>
            <!-- <div class="_3me6Qx7Oc-d8q01pJiZkW-"> -->
              <!-- <span> -->
                <!-- <div class="flex-center dsg-Regular color-gray-dark _30acjYOY3KpZb6rcrQtycV"> -->
                    <button style="color: blue" id="send_button" onclick="sendButton(event)">Send</button>
                <!-- </div> -->
              <!-- </span> -->
            <!-- </div> -->
    </div> <!-- col-sm-3 -->
    <div class="col-sm-9">      
      <img id="waitImg" class="responsive">
      <div id="tcon">
      </div>      
    </div>
  </div>
</div>
<script src="https://code.responsivevoice.org/responsivevoice.js?key=zYY4ho3R"></script>
<script>
    // Get all the checkbox elements by class name
    // const checkboxes = document.getElementsByClassName("checkbox");
    const checkboxes = document.querySelectorAll(".checkbox");
        // Add an event listener to the "Select All" checkbox
        selectAllCheckbox.addEventListener("change", function () {
            // Loop through all checkboxes and set their "checked" property
            for (const checkbox of checkboxes) {
                checkbox.checked = selectAllCheckbox.checked;
            }
        });
    // Get the result element
    const resultElement = document.getElementById("result");
    // Function to update the result element
    function updateResult() {
      const selectedOptions = [...checkboxes].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
      resultElement.textContent = selectedOptions.join(', ');
      //  alert(resultElement.textContent);
    }
    // Add change event listeners to the checkboxes
    for (const checkbox of checkboxes) {
      checkbox.addEventListener("change", updateResult);
    }
function sendButton() {
    if (resultElement.textContent == "Listed Roles"){
      resultElement.textContent = 'expert Sales or Expert Test Driver';
    } 
  if (chatInput.value != ''){
  var sb = chatInput.value + ', provide the USP being in role of '+ resultElement.textContent +' and pipe content into appropriate JSON';
  alert(sb)
  historyArea.value += 'me>> '+ sb + '\n';
  historyArea.scrollTop = historyArea.scrollHeight;
  chatInput.value = '';
  // siteControls(sb);
  sendConverse(sb);
  }
}
function sendConverse(inputText) {
  var Shp='';
  var ctr = 0;
// Replace with your OpenAI API key
const apiKey = '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'; 
const chatHistory = document.getElementById('chat-history');
// var url = baseUrl+ "/process-message"; //"converse";
var baseUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';
userMessage = inputText;
// uvid.src="./public/alice.mp4";
waitImg.src="https://responsivevoice.org/wp-content/uploads/2020/01/parrot-flight.png";
fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  // body: JSON.stringify({ userMessage: userMessage, voice: "" }),
  body: JSON.stringify({ prompt: inputText, max_tokens: 4000 }),
})
  .then(response => response.json())
  .then(response => {
    const botResponse = JSON.stringify(response, null, 2);
    // alert(botResponse); 
    // chatHistory.innerHTML += `<p>Bot: ${botResponse}</p>`;
    const textContainer = document.getElementById("historyArea");
    const lines = botResponse.replace(/\\n/g, '\n').replace(/\\/g, ''); // .split('\n').filter(line => line.trim() !== '');
    const text = lines;
    textContainer.style.whiteSpace = "pre-line";
    textContainer.innerText = text;
    historyArea.value += text + '\n';
    historyArea.scrollTop = historyArea.scrollHeight;
    // uvid.src="./public/alice.mp4";
    // responsiveVoice.speak(inputText,"UK English Female");  
    waitImg.src="";
    let array2 = response.choices[0].text;
    const searchValue = 3;
    const index = array2.indexOf('Article_id');
    if (index !== -1) {
      const foundValue = array2[index];
      // alert(`Element found at index ${index}: ${foundValue}`);
    } else {
      alert(`Element not found in the array.`);
    }
    var array = response.choices[0].text.split('\n').filter(line => line.trim() !== '');
      // Convert JSON object to JSON string
      const jsonString = JSON.stringify(array2, null, 2);    
      // const cleanJsonString = jsonString
      // Create a Blob containing the JSON data
      const blob = new Blob([jsonString], { type: "application/json" });
      // Create a Blob URL
      const blobUrl = URL.createObjectURL(blob);
      // Create an anchor element
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = "escape_response.json"; // Specify the file name
      // Programmatically trigger the download
      downloadLink.click();
      // Revoke the Blob URL to free up resources
      URL.revokeObjectURL(blobUrl);
    // alert(array)
    // if (array.includes('Article_id')){
    //   alert(array);
    // }
      ctr = ctr+1;
      let bid = 'btn'+ctr.toString();
      // alert(ctr);
      var btn = document.createElement("button");
      btn.setAttribute("class", "accordion");
      btn.setAttribute("id", bid);
      btn.setAttribute("onclick","myFunction()");
      var t = document.createTextNode(inputText);
      btn.appendChild(t);
      //para.appendChild(btn);
      document.getElementById("tcon").appendChild(btn);
      var dv = document.createElement("DIV");
      dv.setAttribute("class", "panel");
      dv.setAttribute("style", "display: block;");
      var tt = document.createTextNode("eXS Response");
      dv.appendChild(tt);
      document.getElementById("tcon").appendChild(dv);
      if (array.length > 1) {
        for (j in array) {
          let charlen = array[j].length;
          let tid = 'txt-'+j.toString()+bid;
          var inf = document.createElement("INPUT");
          inf.setAttribute("type", "text");
          inf.setAttribute("id", tid);
          // if (charlen > 121 ) {
          //   inf.setAttribute("rows", "4");
          //   document.getElementById(tid).style.height = "200px";
          // }
          // inf.setAttribute("value", array[j]);
          // inf.setAttribute("onclick","myFunction()");
          // inf.setAttribute("class", "form-control");
          // dv.appendChild(inf);
          // document.getElementById("tcon").appendChild(dv);
          // responsiveVoice.speak(array[j], "UK English Male"); 
          // prs_brian.idle.mp4 prs_daryll.idle.mp4 prs_jason.idle.mp4 prs_sarah.idle.mp4            
      // } else {
        let sid = 'tae-'+j.toString()+bid;
        // alert(sid);
        var inf = document.createElement("TEXTAREA");
        inf.setAttribute("type", "text");
        inf.setAttribute("style", "color:#777;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:115px;resize:none;overflow-y:scroll;");
        inf.setAttribute("id", sid);
        inf.setAttribute("onclick","myFunction()");
        inf.setAttribute("class", "form-control");
        dv.appendChild(inf);
        document.getElementById("tcon").appendChild(dv);
        let cid = document.getElementsByTagName("textarea")[sid].id;
        // alert(cid);
        document.getElementById(cid).value = array[j];
        const textContainer = document.getElementById(cid);
        const text = array[j];
        textContainer.style.whiteSpace = "pre-line";
        textContainer.innerText = text;
        responsiveVoice.speak(text, "UK English Male");
      //   uvid.src="./public/videos/spn.idle.mov";
        }
      }
      // uvid.src="./public/videos/prs_jason.idle.mp4";
      // uvid.style.display = "block"; 
      // // uvid.src = "./public/videos/spn.idle.mov"
      // usrImg.src="";
      // uvid.play();
      const myList = document.querySelector('#tcon')
      const lastListItem = myList.lastElementChild;
      myList.insertBefore(lastListItem, myList.firstElementChild)
      const lastListItem2 = myList.lastElementChild;
      myList.insertBefore(lastListItem2, myList.firstElementChild)
      // alert(myList.innerHTML);
    var acc = document.getElementsByClassName("accordion");
    var i;
  })
  .catch(error => {
    // Handle any errors
    botResponse = JSON.stringify(error);
    console.error('Error:', error);
    chatHistory.innerHTML += `<p>Error: ${botResponse}</p>`;
});
}
</script>
```mermaid
graph TD
  subgraph "User"
    A[Web Browser] -->|Access| B[Mobile UI]
    A -->|Access| C[Desktop UI]
  end

  subgraph "Presentation Layer"
    D[UI Controllers] -->|Render| E[Web Views]
    D -->|Control| F[Front-end Logic]
  end

  subgraph "Controller Layer"
    G[REST API] -->|HTTP| H[Gateway Services]
    G -->|Data| I[AI Services]
    H -->|Auth| J[Security Services]
  end

  subgraph "Model Layer"
    K[MongoDB] -->|NoSQL| L[CloudantDB]
    K -->|Structured| M[DB2400]
    M -->|SQL| N[External Data Sources]
  end

  I -->|AI Logic| E
  E -->|User Interface| D
  B -->|Mobile App| A
  C -->|Desktop App| A
  E -->|User Data| K
  E -->|User Data| L
  H -->|Security| A
  F -->|User Interaction| B
  F -->|User Interaction| C
  F -->|Data Retrieval| G
  F -->|Data Processing| I
  D -->|Presentation Logic| F
  D -->|Data Exchange| G
  N -->|External Data| M

  style A fill:#f9f,stroke:#333,stroke-width:4px
  style B fill:#cfc,stroke:#333,stroke-width:4px
  style C fill:#cfc,stroke:#333,stroke-width:4px
  style D fill:#ffc,stroke:#333,stroke-width:4px
  style E fill:#ffc,stroke:#333,stroke-width:4px
  style F fill:#fcc,stroke:#333,stroke-width:4px
  style G fill:#fcc,stroke:#333,stroke-width:4px
  style H fill:#fcc,stroke:#333,stroke-width:4px
  style I fill:#fcc,stroke:#333,stroke-width:4px
  style J fill:#fcc,stroke:#333,stroke-width:4px
  style K fill:#ccf,stroke:#333,stroke-width:4px
  style L fill:#ccf,stroke:#333,stroke-width:4px
  style M fill:#ccf,stroke:#333,stroke-width:4px
  style N fill:#ccf,stroke:#333,stroke-width:4px
```

```mermaid
sequenceDiagram
  participant User as User
  participant Browser as Web Browser
  participant UI as User Interface
  participant Controller as Controller Layer
  participant AI as AI Services
  participant DB as Model Layer
  participant Sensors as Sensors
  participant Cameras as Cameras
  participant Cloud as Cloud Services
  participant MobileApp as Mobile App
  participant DesktopApp as Desktop App

  User ->> Browser: Access CaaS Application
  Browser ->> UI: Render UI Components
  UI ->> Controller: User Interactions
  Controller ->> AI: Request Data Analysis
  AI ->> DB: Retrieve Historical Data
  DB -->> AI: Send Data
  AI ->> Controller: Analyze Data
  Controller ->> Sensors: Activate Sensors
  Sensors -->> Controller: Send Sensor Data
  Controller ->> AI: Process Sensor Data
  AI -->> Controller: Send Analysis Results
  Controller ->> Cloud: Send Alerts
  Cloud -->> Controller: Acknowledge Alerts
  Controller ->> UI: Update User Interface
  UI ->> MobileApp: Push Notifications
  MobileApp ->> User: Alert Notification
  UI ->> DesktopApp: Push Notifications
  DesktopApp ->> User: Alert Notification

  alt Fire Detected
    Sensors ->> Cameras: Activate Cameras
    Cameras -->> Sensors: Capture Visual Data
    Sensors ->> Controller: Send Visual Data
    Controller ->> AI: Analyze Visual Data
    AI -->> Controller: Identify Fire
    Controller ->> Cloud: Alert Fire Department
    Cloud -->> Controller: Confirm Fire Alert
    Controller ->> UI: Update User Interface (Fire Detected)
    UI ->> MobileApp: Push Fire Alert
    MobileApp ->> User: Fire Alert Notification
    UI ->> DesktopApp: Push Fire Alert
    DesktopApp ->> User: Fire Alert Notification
  else No Fire Detected
    Controller ->> UI: Update User Interface (No Fire)
    UI ->> MobileApp: Push No Fire Alert
    MobileApp ->> User: No Fire Alert Notification
    UI ->> DesktopApp: Push No Fire Alert
    DesktopApp ->> User: No Fire Alert Notification
  end

  User ->> Browser: Monitor Fire Detection
  Browser ->> UI: Render Live Data
  UI ->> Controller: Continuous Monitoring
  Controller ->> AI: Real-time Analysis
  AI ->> DB: Retrieve Current Data
  DB -->> AI: Send Current Data
  AI -->> Controller: Send Analysis Results
  Controller ->> UI: Update Live Data

  User ->> Browser: Control Fire Prevention
  Browser ->> UI: Adjust Settings
  UI ->> Controller: User Preferences
  Controller ->> AI: Apply User Settings
  AI ->> DB: Update Configuration
  DB -->> AI: Confirm Configuration
  AI -->> Controller: Configuration Updated
  Controller ->> UI: Confirm User Changes
  UI ->> User: Settings Updated

  User ->> Browser: Logout
  Browser ->> UI: Close Application
  UI ->> Controller: Terminate Session
  Controller -->> UI: Session Ended
  UI ->> User: Logout Complete
```

