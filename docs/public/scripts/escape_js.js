// var baseUrl = location.protocol+'//'+	location.host;
// var contextPath = location.pathname.split('/')[1]; // Extract the first part of the path as the context
// const bbaseUrl = window.location.origin;

// alert(bbaseUrl);
   
    var uname = "";
    $(document).ready(function () {
      $(".hideOnStartup").hide();
      $.getJSON("/protected", function (data) {
        // Already authenticated        $("#WhenAuthenticated").show();
        $("#logoutButton").show();
        $("#name").text(data.name);
        $("#email").text(data.email);
        uname = data.email;
        // alert(uname)
        if(uname !== ""){
            historyArea.value += "me>> "+ "You're authenticated as "+uname + "\n";
            historyArea.scrollTop = historyArea.scrollHeight; 
        }
      }).fail(function () {
        // Not authenticated yet
        $("#WhenNotAuthenticated").show();
        $("#loginButton").show();
      }).always(function() {
                
                var languageQuery = window.location.href.slice(window.location.href.indexOf('?'));
                var changeDetails = document.getElementById('changeDetails');
                changeDetails.href =  "/ibm/cloud/appid/cloudLand/view/change/details" + languageQuery;
                var changePassword = document.getElementById('changePassword');
                changePassword.href = "/ibm/cloud/appid/cloudLand/view/change/password" + languageQuery;

                var signUp = document.getElementById('signUp');
                changePassword.href = "/ibm/cloud/appid/view/sign_up" + languageQuery;


              });
    });

    var wakeWord = false;
    var wCnt = 0;
    // var Shp;


var hostUrl = location.protocol+'//'+	location.host;
var contextPath = location.pathname.split('/')[1]; // Extract the first part of the path as the context
var baseUrl = hostUrl+'/'+contextPath;

// alert(baseUrl);
var BASE_KATHA_URL = "";
var BASE_CMS_URL = "./public/cms";
var jfn = '';
var vid = document.getElementById("myVideo");
var uvid = document.getElementById("usrVideo");
// Initialize with the first bot
let currentBotIndex = 0;
var globalContentJsonObj;
var globalBotJsonObj;
var globalTopicJsonObj;
var globalRoleJsonObj;
responsiveVoice.init();
var isSpeaking = false;
var iUrl = '';
var formFlg1 = false;
var formURL = "";
var ncnt = 0;
var html='';
var ot = "";
var ctr = 0;
var bid = '';
var userMessage = '';
// var baseUrl = 'http://127.0.0.1:5000/process-message';
var i=0;
var j, x = "";
var mtg = false;
var charton = false;
var timeoutId = '';
const timeoutIds = [];
// const synth = window.speechSynthesis; // Initialize the synth object
let speakWithBufferInstance = null;
var meetingsData;
let count = 0;
let latitude = 0;
let longitude = 0;
let issueTitle = '';
let issueBody = '';
// setTimeout('loadJson("' + BASE_CMS_URL + '/content/json/bots.json")', 10);

// uvid.style.display = "block"; 
// uvid.src = "";
    var aaa = '';
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    // Hide the elements initially
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    const selectedcheckbox = document.querySelector
    let currentSlide = 0;
    
    function showSlide(slideIndex) {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
      carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
      currentSlide = slideIndex;
      // playNextBot(currentSlide);
      jfn = 'f'+currentSlide.toString()+'.json';
      // alert(jfn);
      setTimeout('loadJson("' + BASE_CMS_URL + '/content/json/'+jfn+'")', 100);
      // alert(globalContentJsonObj.images);
      // if(currentSlide == 0){
      //   // usrImg.src='./public/images/naidu.jpeg';
      //   uvid.src = "./public/videos/naidu.idle.mp4";
      // }
      // if(currentSlide == 1){
      //   // usrImg.src="./public/images/jason.jpeg";
      //   uvid.src = "./public/videos/jason.idle.mp4";
      // }
      // if(currentSlide == 2){
      //   // usrImg.src="./public/images/spn.jpeg";
      //   uvid.src = "./public/videos/spn.idle.mp4";
      // }
      // if(currentSlide == 3){
      //   // usrImg.src="./public/images/esd.jpeg";
      //   uvid.src = "./public/videos/esd.idle.mp4";
      // }
      // if(currentSlide == 4){
      //   // usrImg.src="./public/images/emmanuel.jpeg";
      //   uvid.src = "./public/videos/ebb.idle.mp4";
      // }
      // if(currentSlide == 5){
      //   // usrImg.src="./public/images/alice.jpeg";
      //   uvid.src = "./public/videos/alice.idle.mp4";
      // }


    }
    
    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        showSlide(currentSlide - 1);
      }
    });
    
    nextButton.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
      }
    });
    
    // showSlide(currentSlide);

// showBotDetails(currentBotIndex);

// alert(globalContentJsonObj.bots);
// Function to display bot details
// function showBotDetails(index) {
//   if (index >= 0 && index < globalContentJsonObj.bots.length) {
//       const bot = globalContentJsonObj.bots[index];
//       carousel.innerHTML = `
//           <div class="carousel-slide">
//               <img src="${bot.iuri}" alt="${bot.title}">
//               <h3>${bot.title}</h3>
//               <p>${bot.intro}</p>
//           </div>
//       `;

//       // Add event listeners for next and previous buttons
//       // const prevButton = document.getElementById('prev-button');
//       // const nextButton = document.getElementById('next-button');

//       prevButton.addEventListener('click', () => {
//           showBotDetails(index - 1);
//       });

//       nextButton.addEventListener('click', () => {
//           showBotDetails(index + 1);
//       });
//   }
// }
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(openGoogleMaps, showError);
      } else {
        document.getElementById('toc').innerHTML = "Geolocation is not supported by this browser.";
      }
    }   
    function openGoogleMaps(position) {

      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

    //   // Wait for the map to load
    //   setTimeout(() => {
    //     // Take a screenshot
    //     takeScreenshot(mapContainer);
    //   }, 5000); // Adjust the delay time as needed
    }
    function showError(error) {
      const locationElement = document.getElementById('mapContainer');
      
      switch(error.code) {
        case error.PERMISSION_DENIED:
          locationElement.innerHTML = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          locationElement.innerHTML = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          locationElement.innerHTML = "The request to get user location timed out.";
          break;
        case error.UNKNOWN_ERROR:
          locationElement.innerHTML = "An unknown error occurred.";
          break;
      }
    }
    function initiate(assistantid) {
      //alert('SPN initiate '+assistantid);
      var url = "initiate";
      var jsondata = { assistant_id: assistantid };
      
      ajaxJSONPosta(url, jsondata, function(response) {
        // alert(JSON.stringify(response.result)); 
        sessionid = response.result.session_id;
        userrole = response.role;

        historyArea.value += sessionid.trim() + '\n';
        historyArea.scrollTop = historyArea.scrollHeight;
        //alert(sessionid); 
        // sendConverse("Jargon of the day");
      });
    }   
    const owner = 'extremespartan'; // Replace with your GitHub username or organization name
    const repo = 'cognitive-automation'; // Replace with your repository name
    const token = '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'; // Replace with your GitHub Personal Access Token

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;
    
    const createGitHubIssue = async (issueTitle,issueBody ) => {
        
      const data = {
        title: issueTitle,
        body: issueBody,
      };

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('GitHub issue created successfully.');
        historyArea.value += 'GitHub issue created successfully.' + '\n';
        historyArea.scrollTop = historyArea.scrollHeight;
        //   alert('GitHub issue created successfully.');
        } else {
          console.error('Failed to create GitHub issue:', response.statusText);
        historyArea.value += 'Failed to create GitHub issue.' + '\n';
        historyArea.scrollTop = historyArea.scrollHeight;
        //   alert('Failed to create GitHub issue.');
        }
      } catch (error) {
        console.error('Error creating GitHub issue:', error.message);
        historyArea.value += 'Error creating GitHub issue.' + '\n';
        historyArea.scrollTop = historyArea.scrollHeight;
        // alert('Error creating GitHub issue.');
      }
    };

    function ajaxJSONPostb(url, jsondata, callback) {
      //alert('ajaxJSONPost');
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      //xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://botalicious.herokuapp.com');
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("Received response=" + xhr.responseText);

            alert('SPN in ajaxJSONPosta*** '+ xhr.responseText);

            callback(xhr.responseText);

        } else {

          //alert("Return status = " + xhr.status);
          document.getElementById('tcon').value = "Return status = " + xhr.status;
        }
      }
      xhr.send(JSON.stringify(jsondata));
      //alert('after Send '+JSON.stringify(jsondata));
      //console.log("Sent to "+url+", data=" + JSON.stringify(jsondata));
    }    



var input = document.querySelector('input[type=file]'); // see Example 4

input.onchange = function () {
  var file = input.files[0];

  //upload(file);
  //drawOnCanvas(file);   // see Example 6
  displayAsImage(file); // see Example 7
};

function upload(file) {
  var form = new FormData(),
      xhr = new XMLHttpRequest();

  form.append('image', file);
  xhr.open('post', 'server.php', true);
  xhr.send(form);
}

function drawOnCanvas(file) {

  //alert(file);
  var reader = new FileReader();

  reader.onload = function (e) {
    var dataURL = e.target.result,
        c = document.querySelector('canvas'), // see Example 4
        ctx = c.getContext('2d'),
        img = new Image();

    img.onload = function() {
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    img.src = dataURL;
  };

  reader.readAsDataURL(file);
} 

function displayAsImage(file) {
  var imgURL = URL.createObjectURL(file),
      img = document.createElement('img');

  img.onload = function() {
    URL.revokeObjectURL(imgURL);
  };

  img.src = imgURL;
  document.getElementById("cmsImg").src = img.src;
  document.body.appendChild(img);
}


      var controller = null;
      var player = document.getElementById('player'); 
      // var snapshotCanvas = document.getElementById('snapshot');
      var captureButton = document.getElementById('capture');
      var video = document.getElementById("usrVideo");
      var videoTracks;
      //videoTracks.forEach(function(track) {track.stop()});
      var canStream;
      var theStream;
      var theRecorder;
      var recordedChunks1 = [];     
      var responseText = ""; 
      // var ctx = snapshotCanvas.getContext("2d");
      
      
      var handleSuccess = function(stream) {
          // Attach the video stream to the video element and autoplay.
          theStream = stream;
          player.srcObject = stream;
          player.captureStream = player.captureStream || player.mozCaptureStream;
          videoTracks = stream.getVideoTracks();
        try {
          recorder = new MediaRecorder(stream, {mimeType : "video/webm"});
        } catch (e) {
          console.error('Exception while creating MediaRecorder: ' + e);
          return;
        }
        theRecorder = recorder;
        recorder.ondataavailable = 
            (event) => { recordedChunks1.push(event.data); };
        // recorder.start(10);      
      };

      // var handleSuccess = function(stream) {
      //   // Attach the video stream to the video element and autoplay.
      //   player.srcObject = stream;
      //   videoTracks = stream.getVideoTracks();
      // };
      function download() {
      theRecorder.stop();
      // theStream.getTracks().forEach(track => { track.stop(); });

      const clipName = inputText.toUpperCase().substr(5);
      //alert(clipName);
      
        const clipContainer = document.createElement('article');
        const clipLabel = document.createElement('p');
        const video = document.createElement('video');
        const deleteButton = document.createElement('button');
        const downloadButton = document.createElement('button');

        clipContainer.classList.add('clip');
        video.setAttribute('autoplay', 'true');
        video.setAttribute('loop', 'false');
        video.setAttribute('controls', 'true');
        video.setAttribute('type', 'video/webm');
        //audio.setAttribute('type', 'video/webm');
        //audio.setAttribute('src', '/chords/drum120.wav');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        downloadButton.textContent = 'Download';
        downloadButton.className = 'download';

        clipContainer.appendChild(video);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        clipContainer.appendChild(downloadButton);
        tcon.appendChild(clipContainer);

      video.controls = true;

      var blob = new Blob(recordedChunks1, {type: "video/webm"});
      //recordedChunks[];
      var url =  URL.createObjectURL(blob);

      var mUrl = url.slice(-36).replace(/-/g, "");


      video.src = url;

      // alert(mUrl);

          var formdata = { issue: url, buildingName: clipName, weekDay: 'fi03value', dayTime: 'fi04value', phone: 'test.webm' };

         //  var aurl = "http://localhost:3001/saveav";

          // ajaxJSONPosta(aurl, formdata, function(mresult) {

          //     responseText = JSON.stringify(mresult);
          //     alert(responseText);

          // });

      deleteButton.onclick = function(e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
      // function xhrAttach(url, data, callback, errback)
      // {
      //  //alert('SPNURL '+ url);
      //  var xhr = new createXHR();
      //  xhr.open("POST", url, true);
      //  xhr.setRequestHeader("Content-type", "multipart/form-data");
      //  xhr.onreadystatechange = function(){
      //    if(xhr.readyState == 4){
      //      if(xhr.status == 200){
      //        callback(parseJson(xhr.responseText));
      //      }else{
      //        errback('service not available');
      //      }
      //    }
      //  };
      //  xhr.timeout = 1000000;
      //  xhr.ontimeout = errback;
      //  xhr.send(data);
      // }
          

      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = 'test.webm';
      a.click();
      // setTimeout() here is needed for Firefox.
      setTimeout(function() { URL.revokeObjectURL(url); }, 100); 
      // toggleAppInfo();
      return;
    }
      function snapClick() {

        siteControls('snapClick');

        return;

        var context = snapshot.getContext('2d');
        context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
      //ImgData = context.getImageData(0, 0, snapshotCanvas.width, snapshotCanvas.height);
        var fullQuality = snapshotCanvas.toDataURL("image/jpeg", 1.0);


        var image = new Image();
        image.src = snapshotCanvas.toDataURL("image/png");
      //alert(fullQuality);

        document.getElementById("cmsImg").src = image.src;     

        snapshotCanvas.toBlob(function(blob) {
          //var newImg = document.createElement("cframe"),
          burl = URL.createObjectURL(blob);

          //alert('BURL ' + burl);


          //alert('IN SPN Capture');
          var imgg = document.getElementById("snapshot").toDataURL("image/jpeg", 1.0);
          //alert(imgg);
          var url = "https://spnize.mycloud.net/captureImage";
          var jsondata = { requestId: "12345678", persona: "Hello", name: "Sridhar", value: "SSSSSS",base64: imgg, mUrl: burl }; //, base64: imgg mUrl: burl

                ajaxJSONPost(url, jsondata, function(response) {
                 // alert(JSON.stringify(response));

                    //responsiveVoice.speak(response.successDetails.conversationText);
                    //historyArea.value += 
                    //  response.successDetails.conversationText + "\n";
                    //historyArea.scrollTop = historyArea.scrollHeight; 
                });

                function ajaxJSONPost(url, jsondata, callback) {
                  var xhr = new XMLHttpRequest();
                  xhr.open("POST", url);
                  xhr.setRequestHeader('Content-Type', 'application/json');
                  xhr.setRequestHeader("Cache-Control", "no-cache");
                  //xhr.setRequestHeader("X-File-Name", file.jsondata);
                  //xhr.setRequestHeader("X-File-Size", file.jsondata);
                  //xhr.setRequestHeader("Content-Type", "multipart/form-data");
                  xhr.onreadystatechange = function() {
                  if (xhr.readyState == 4 && xhr.status == 200) {
                      console.log("Received response=" + xhr.responseText);
                      callback(JSON.parse(xhr.responseText));
                    }
                    else {
                      document.getElementById('statusLine').value = "Return status = "+xhr.status;
                    }
                  }
                  xhr.send(JSON.stringify(jsondata));
                  console.log("Sent to "+url+", data=" + JSON.stringify(jsondata));
                }


            });


      }


      //navigator.mediaDevices.getUserMedia({video: { facingMode: "user" }}).then(handleSuccess).catch(handleError);

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 100, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.getElementById("chatInput").focus();
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function chglang(){
  var nde = document.getElementById('chglang');
  nde.style.display = nde.style.display == 'none' ? '' : 'none';
  if (nde.style.display == '') {
    document.getElementById("chglang").style.display = 'block';

  } else {
    document.getElementById("chglang").style.display = 'none';

  }

}


function toggleAppInfo(){
  
  var node = document.getElementById('appinfo');
  
  function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }
  // hasGetUserMedia();
  if (hasGetUserMedia()) {
  // Good to go!
    document.getElementById("dskinp").style.display = 'block';
    //alert('Good to go!');
    document.getElementById("mobinp").style.display = 'none';
  } else {
    //alert('getUserMedia() is not supported by your browser');
    document.getElementById("mobinp").style.display = 'block';
    document.getElementById("dskinp").style.display = 'none';
  }

    node.style.display = node.style.display == 'none' ? '' : 'none';
    if (node.style.display == '') {
        navigator.mediaDevices.getUserMedia({video: true}).then(handleSuccess);
    } else {
        videoTracks.forEach(function(track) {track.stop()});
    }
    
}   

let mid = '';
function addRoles() {

  var url = BASE_CMS_URL + '/content/json/f0.json';
  // alert(url);

  // setTimeout('loadJson("' + BASE_CMS_URL + '/content/json/bots.json")', 10);

  var jsondata = { requestId: "sridhar" };

  ajaxJSONPost(url, jsondata, function(aresult) {
    mid = 'mg-'+ctr.toString();
    // jsondata = JSON.stringify(aresult.images);
    // alert(aresult.bots[0].iuri);
    var list = document.getElementById("tcon");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    var i, j, x = "";

    for (i in aresult.images) {

      x = +aresult.images[i].thumbnail +' '+aresult.images[i].role;
      ip = aresult.images[i].iuri;
      bn = aresult.images[i].vuri;
      wd = aresult.images[i].intro;
      dt = aresult.images[i].description;
      pn = aresult.images[i].options;

            var para = document.createElement("P");
            var btn = document.createElement("Button");
            btn.setAttribute("class", "accordion");
            var t = document.createTextNode(x);
            btn.appendChild(t);
            //para.appendChild(btn);
            document.getElementById("tcon").appendChild(btn);
            var dv = document.createElement("DIV");
            dv.setAttribute("class", "panel");

            var mg = document.createElement("img");
            mg.setAttribute("width", "200px");  
            mg.setAttribute("ID", mid);
            mg.setAttribute("src", ip);

            // var tt = document.createTextNode("User Image");
            dv.appendChild(mg);
            document.getElementById("tcon").appendChild(dv);
           
            var inf = document.createElement("INPUT");
            inf.setAttribute("type", "text");
            inf.setAttribute("value", ip);
            //inf.setAttribute("id", ar0);
            //inf.setAttribute("onkeyup", "send_txt(id)");
            inf.setAttribute("class", "form-control");
            dv.appendChild(inf);
            document.getElementById("tcon").appendChild(dv);

            var tt = document.createTextNode("User Video");
            dv.appendChild(tt);
            document.getElementById("tcon").appendChild(dv);
           
            var inf = document.createElement("INPUT");
            inf.setAttribute("type", "text");
            inf.setAttribute("value", bn);
            //inf.setAttribute("id", ar0);
            //inf.setAttribute("onkeyup", "send_txt(id)");
            inf.setAttribute("class", "form-control");
            dv.appendChild(inf);
            document.getElementById("tcon").appendChild(dv);


            var tt = document.createTextNode("Intro Text");
            dv.appendChild(tt);
            document.getElementById("tcon").appendChild(dv);
           
            var inf = document.createElement("INPUT");
            inf.setAttribute("type", "text");
            inf.setAttribute("value", wd);
            //inf.setAttribute("id", ar0);
            //inf.setAttribute("onkeyup", "send_txt(id)");
            inf.setAttribute("class", "form-control");
            dv.appendChild(inf);
            document.getElementById("tcon").appendChild(dv);


            var tt = document.createTextNode("Description");
            dv.appendChild(tt);
            document.getElementById("tcon").appendChild(dv);
           
            var inf = document.createElement("INPUT");
            inf.setAttribute("type", "text");
            inf.setAttribute("value", dt);
            //inf.setAttribute("id", ar0);
            //inf.setAttribute("onkeyup", "send_txt(id)");
            inf.setAttribute("class", "form-control");
            dv.appendChild(inf);
            document.getElementById("tcon").appendChild(dv);

            
            // var tt = document.createTextNode("Options");
            // dv.appendChild(tt);
            // document.getElementById("tcon").appendChild(dv);

            // var inf = document.createElement("INPUT");
            // inf.setAttribute("type", "text");
            // inf.setAttribute("value", pn);
            // //inf.setAttribute("id", ar0);
            // //inf.setAttribute("onkeyup", "send_txt(id)");
            // inf.setAttribute("class", "form-control");
            // dv.appendChild(inf);
            // document.getElementById("tcon").appendChild(dv);
            for (j in pn) {

              var tt = document.createTextNode("Options "+ pn[j].thumbnail);
              dv.appendChild(tt);
              document.getElementById("tcon").appendChild(dv);
             
              var inf = document.createElement("INPUT");
              inf.setAttribute("type", "text");
              inf.setAttribute("value", pn[j].vuri);
              //inf.setAttribute("id", ar0);
              //inf.setAttribute("onkeyup", "send_txt(id)");
              inf.setAttribute("class", "form-control");
              dv.appendChild(inf);
              document.getElementById("tcon").appendChild(dv);
            }
                
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

  }); 
  
  return;
}

// function qrcode() {
//   ctr = ctr+1;

//   let bid = 'btn'+ctr.toString();

//   var btn = document.createElement("button");
//   btn.setAttribute("class", "accordion");
//   btn.setAttribute("id", bid);
//   btn.setAttribute("onclick","myFunction()");

//   var t = document.createTextNode(inputText);
//   btn.appendChild(t);
//   //para.appendChild(btn);
//   document.getElementById("tcon").appendChild(btn);
  
//   var dv = document.createElement("DIV");
//   dv.setAttribute("class", "panel");
//   dv.setAttribute("style", "display: block;");
//   dv.setAttribute("ID", "qrcode");

//   var tt = document.createTextNode("QR Code Response");
//   dv.appendChild(tt);
//   document.getElementById("tcon").appendChild(dv);




//   let cvsid = 'can-'+ctr.toString();


//   var can = document.createElement("DIV");
//   // can.setAttribute("style", "width:100%;")

//   can.setAttribute("ID", cvsid);


//   dv.appendChild(can);
//   document.getElementById("tcon").appendChild(dv);


//   const myList = document.querySelector('#tcon')
//   const lastListItem = myList.lastElementChild;
//   myList.insertBefore(lastListItem, myList.firstElementChild)
//   const lastListItem2 = myList.lastElementChild;
//   myList.insertBefore(lastListItem2, myList.firstElementChild)

//   // Get the URL of the current page
//   var currentURL = window.location.href;

//   // Generate QR code using the URL
//   var qrcode = new QRCode(document.getElementById(cvsid), {
//     text: currentURL,
//     width: 128,
//     height: 128
//   });

//   inputText = "";
//   return;
// }

function saveFunc(){
  alert('empty implementation');
  
}

function swapVideo() {

  //alert('vid src',vid.src);

  if (vid.src==""){
      cmsImg.src = usrImg.src;
      document.getElementById("cmsImg").src = "";
      document.getElementById("cmsImg").style.display = "block";
  }
  if (vid.style.display == "block" ) 
  { 
      var vidct=vid.currentTime;
      uvid.src = vid.src;
      
      vid.style.display = "none";
      //vid.load();
      uvid.style.display = "block";
      uvid.currentTime=vidct;
      //uvid.load();
      uvid.play();


  } 
  if (uvid.src=="s"){
      usrImg.src = cmsImg.src;
      document.getElementById("usrImg").src = usrImg.src;
      document.getElementById("usrImg").style.display = "block";   
  
    if (uvid.style.display == "block" ){

      uvidct=uvid.currentTime;
      vid.src = uvid.src;
      vid.style.display = "block";
      vid.currentTime=uvidct;
      //vid.load();
      uvid.style.display = "none";
      //uvid.load();

    }
    if (uvid.style.display == "none" ){

      uvidct=uvid.currentTime;
      vid.src = uvid.src;
      vid.style.display = "block";
      vid.currentTime=uvidct;
      //vid.load();
      uvid.style.display = "none";
      //uvid.load();
    }    
  }
}

function showAVControl() {
    if (document.getElementById("vdo").style.display == "block" ) 
    {
        document.getElementById("vdo").style.display = "none";
    } else {
        document.getElementById("vdo").style.display = "block";
    }
}
function showMic() {
    if (document.getElementById("panel").style.display == "block" ) 
    {
        document.getElementById("panel").style.display = "none";
    } else {
        document.getElementById("panel").style.display = "block";
    }
}

function show_send_btn(style) {
  if (chatInput.value.length == 0) {
    //send_button.style.display = 'none';
  } else {
    //send_button.style.display = 'block';
  }
  
}

var vid = document.getElementById("myVideo");
var uvid = document.getElementById("usrVideo");

function playVid() {
    //vid.play();
    chatInput.value = 'play video';
    document.getElementById("chatInput").focus();
    btn_play.style.display = 'none';
    btn_pause.style.display = 'inline-block';
    show_send_btn()
}
function pauseVid() {
    //vid.pause();
    chatInput.value = 'pause video';
    document.getElementById("chatInput").focus();
    btn_play.style.display = 'inline-block';
    btn_pause.style.display = 'none';
    show_send_btn()
}
function setFullVolume() { 
    vid.volume = 1.0;
} 
function enableMute() { 
    //vid.muted = true;
    chatInput.value = 'mute sound';
    document.getElementById("chatInput").focus();
    btn_mute.style.display = 'none';
    btn_sound.style.display = 'inline-block';
    show_send_btn()
}
function disableMute() {
    //vid.muted = false;
    chatInput.value = 'enable sound';
    document.getElementById("chatInput").focus();
    btn_mute.style.display = 'inline-block';
    btn_sound.style.display = 'none';
    show_send_btn()
}

    var globalSessionId = "uninitialized";
    var imagePlayInterval = 1000; // 15 secs default
    // var globalContentJsonObj;
    var historyArea = document.getElementById('historyArea');
    historyArea.value = '';
    var jsonUri = '';
    var assistantid = 'b51117b9-3e1c-4777-a2ff-22849f8add4a';
    // var assistantid = 'e002427d-6b2b-4076-9887-f5b0fe757c79';
    var sessionid ='';
    
    function ajaxJSONPost(url, jsondata, callback) {
     // alert('ajaxJSONPost');
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      //xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://botalicious.herokuapp.com');
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log("Received response=" + xhr.responseText);

          //alert('in ajaxJSONPost '+xhr.responseText);

          callback(JSON.parse(xhr.responseText));
        }
        else {

          //alert("Return status = " + xhr.status);
            document.getElementById('statusLine').value = "Return status = " + xhr.status;
        }
      }
      xhr.send(JSON.stringify(jsondata));
      //alert('after Send '+JSON.stringify(jsondata));
      console.log("Sent to "+url+", data=" + JSON.stringify(jsondata));
    }
    
    function kathaInitiate() {

      var url = BASE_KATHA_URL + "/initiate";
      var jsondata = { requestId: "12345678", persona: "Boy1" };
      
      ajaxJSONPost(url, jsondata, function(response) {
        globalSessionId = response.sessionId;
       // alert(JSON.stringify(response));
          jsonUri = BASE_CMS_URL + '/' + response.successDetails.contentUri;

          // alert(jsonUri);

          aloadJson(jsonUri, response);

      });
    }
    



    function ajaxJSONPosta(url, jsondata, callback) {
      //alert('ajaxJSONPost');
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      //xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://botalicious.herokuapp.com');
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log("Received response=" + xhr.responseText);

          //alert('in ajaxJSONPosta*** '+xhr.responseText);

          callback(JSON.parse(xhr.responseText));
        }
        else {

          //alert("Return status = " + xhr.status);
            document.getElementById('statusLine').value = "Return status = " + xhr.status;
        }
      }
      xhr.send(JSON.stringify(jsondata));
      //alert('after Send '+JSON.stringify(jsondata));
      console.log("Sent to "+url+", data=" + JSON.stringify(jsondata));
    }


  // const populateBotResponse = async (userMessage) => {
  //   await showBotLoadingAnimation();
  //   const response = await processUserMessage(userMessage);
  //   responses.push(response);

  //   const repeatButtonID = getRandomID();
  //   botRepeatButtonIDToIndexMap[repeatButtonID] = responses.length - 1;
  //   hideBotLoadingAnimation();
  //   // Append the random message to the message list
  //   $("#message-list").append(
  //     `<div class='message-line'><div class='message-box${
  //       !lightMode ? " dark" : ""
  //     }'>${
  //       response.openaiResponseText
  //     }</div><button id='${repeatButtonID}' class='btn volume repeat-button' onclick='playResponseAudio("data:audio/wav;base64," + responses[botRepeatButtonIDToIndexMap[this.id]].openaiResponseSpeech);console.log(this.id)'><i class='fa fa-volume-up'></i></button></div>`
  //   );

  //   playResponseAudio("data:audio/wav;base64," + response.openaiResponseSpeech);

  //   scrollToBottom();
  // };

    function loginFunc(inputText) {
            window.location.href = "/ibm/cloud/appid/rop/login";

            // alert('Login >> '+inputText);
            // jsonUri = "cms/content/json/red_riding_hood_summary.json";
            // alert(jsonUri);
            // // aloadJson(jsonUri, response);
            return;
    }

    function sendConverse(inputText) {

      if (/^\d{3}$/.test(inputText)) { // It's a 3-digit string (meeting ID)
        meetingsData = globalContentJsonObj.images[0].options;
        // alert(JSON.stringify(meetingsData));
        if (meetingsData == undefined){
          meetingsData = globalContentJsonObj.images[0];
          // alert(JSON.stringify(meetingsData));

        }
        const meetingID = inputText;
        // const meeting = meetingsData.find(item => item.thumbnail === meetingID);
        const meeting = meetingsData.find(item => item.thumbnail === meetingID);

        if (meeting) {
            // alert(`Meeting: ${meeting.title}, Location: ${meeting.vuri}`);
            // You can add code here to fetch more details about the meeting
            uvid.style.display = "block"; 
            uvid.src = "./public/videos/spn.idle.mov"
            usrImg.src="";
            loadJson(BASE_CMS_URL + '/content/json/'+meeting.vuri);

        } else {
            historyArea.innerHTML = 'Meeting not found!';
        }
        return;
      }

      // siteControls(inputText);

      if (inputText.toUpperCase().substr(0,4) == "SHOW" || inputText.toUpperCase().substr(0,4) == "PICK"){
        
        
        if (inputText.toUpperCase().substr(5,5) == "ROLES") {
          showing = inputText.toUpperCase().substr(5,5);
          // var voicelist = responsiveVoice.getVoices();
          // alert(JSON.stringify(voicelist));
          showSlide(currentSlide); //viewRoles(); viewVoices();  
          // responsiveVoice.speak("To Add or Update a role type 'ADD ROLE' followed by a space and the role number.", "UK English Male");
          chatInput.value = 'SHOW ROW ';
          return; 
        } 
        if (inputText.toUpperCase().substr(5,4) == "ROLE") {
          var srow = inputText.toUpperCase().substr(9);
          var accs = document.getElementsByClassName("accordion");
          var crow =  accs.length;
          if (crow == 0) {
            responsiveVoice.speak('Please issue the command show '+showing+' to list all the '+showing+'s' );
            return;
          }


          if (srow > crow || srow < 0) {
            responsiveVoice.speak("Please choose a row between 1 thru "+crow );
          }
          
          var i = parseInt(srow - 1);

          accs[i].click();
          wid = accs[i].id;
          // alert(wid);
          if(showing=="VOICES"){
            SelectdV = wid;
          }

          // speakNow();

          responsiveVoice.speak('Selected '+wid, SelectdV, {pitch: vpv, rate: vrv, volume: vvl});

          // responsiveVoice.speak('Selected '+wid );

          historyArea.value += 'Selected row'+ srow +' '+wid +'\n';
          historyArea.scrollTop = historyArea.scrollHeight;
          if(vWS) {

            vWS = false;
          }
          return;
        }

      }
      if(inputText.toUpperCase().trim() == 'ADD ROLE'){
        var voicelist = responsiveVoice.getVoices();
        addRoles();
        alert(JSON.stringify(voicelist));
        alert('count >>'+count);
        
        return;
      }

      if (inputText.includes('alice')) {
        uvid.src="./public/alice.mp4";
      } 
      if (inputText.toUpperCase().trim() == 'HIDE HISTORY')  {
        document.getElementById("history_area").style.display = "none";
        // vid.pause();
        return;
      } 
      if (inputText.toUpperCase().trim() == 'SHOW HISTORY')  {
        document.getElementById("history_area").style.display = "block";
        // vid.pause();
        return;
      } 
      if (inputText.toUpperCase().trim() == "SIGNUP" || inputText.toUpperCase().trim() == "SIGN UP")  {
          window.location.href = "/ibm/cloud/appid/view/sign_up";
          return;
      } 
      if (inputText.toUpperCase().trim() == "LOGIN" )  {
          window.location.href = "/ibm/cloud/appid/rop/login";
          return;
      } 
      if (inputText.toUpperCase().trim() == "LOGOUT" )  {
          window.location.href = "/ibm/cloud/appid/logout";
          return;
      } 

      if (inputText.toUpperCase().trim() == "QRCODE") {
        
        ctr = ctr+1;

        let bid = 'btn'+ctr.toString();
      
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
        dv.setAttribute("ID", "qrcode");
      
        var tt = document.createTextNode("QR Code Response");
        dv.appendChild(tt);
        document.getElementById("tcon").appendChild(dv);
      
      
      
      
        let cvsid = 'can-'+ctr.toString();
      
      
        var can = document.createElement("DIV");
        // can.setAttribute("style", "width:100%;")
      
        can.setAttribute("ID", cvsid);
      
      
        dv.appendChild(can);
        document.getElementById("tcon").appendChild(dv);
      
      
        const myList = document.querySelector('#tcon')
        const lastListItem = myList.lastElementChild;
        myList.insertBefore(lastListItem, myList.firstElementChild)
        const lastListItem2 = myList.lastElementChild;
        myList.insertBefore(lastListItem2, myList.firstElementChild)
      
        // Get the URL of the current page
        var currentURL = window.location.href;
      
        // Generate QR code using the URL
        var qrcode = new QRCode(document.getElementById(cvsid), {
          text: currentURL,
          width: 128,
          height: 128
        });
      
        inputText = "";
        
        inputText = "Steps to scan the QR Code displayed using a mobile device"
        return;
      }
      if (inputText.toUpperCase().trim() == "START SOD") {
        // document.getElementById("toggle").click();
        if(charton){
          mtg = true;
          recordBtn.click();
        }
        // inputText = "CHART";
        return;
      }
      if (inputText.toUpperCase().trim() == "STOP SOD" ) {
        // document.getElementById("toggle").click();
        // alert(storedValues.length);
        // clearTimeout(timeoutId);
        for (const id of timeoutIds) {
          clearTimeout(id); // Clear each timeout by its ID
        }

        if (mtg) {
          document.getElementById("toggle").click();
          cmsImg.src=""; 
          cmsImg.src=""; 
          document.getElementById("usrVideo").style.display = "block";
          document.getElementById("panel").style.display = "block";
          recordBtn.click();  
          mtg =  false;
        }
        inputText = "";
        return;

      }
      if (inputText.toUpperCase().trim() == "CHART" || inputText.toUpperCase().trim() == "INCIDENT REPORT" ) {
      // if (inputText.toUpperCase().trim() == "CHART" ) {
        document.getElementById("toggle").click();
        cmsImg.src=""; 
        document.getElementById("usrVideo").style.display = "none";
        document.getElementById("panel").style.display = "none";
        // recordBtn.click();
        inputText = "Please Explain the Incident details in the displayed Bar Chart ";
        return;
      }
      if (inputText.toUpperCase().trim() == "CANVAS") {
        Shp = "Ionload"
        document.getElementById("toggle").click();
        return;
      }
      if (inputText.toUpperCase().trim() == "USE CASES") {
        Shp = "usecase"
        document.getElementById("toggle").click();
        setTimeout('cloadJson("' + BASE_CMS_URL + '/content/json/aiusecases.json")', 100);

        return;
      }
      if (inputText.toUpperCase().trim() == "SHOW EVENTS" || inputText.toUpperCase().trim() == "JOIN EVENT" || inputText.toUpperCase().trim() == "JOIN MEETING") {
        Shp = "event"
        // document.getElementById("toggle").click();
        uvid.style.display = "block"; 
        uvid.src = "./public/videos/alice.idle.mov"
        usrImg.src="";

       loadJson(BASE_CMS_URL + '/content/json/events.json');

       return;
      }
      // if (inputText.toUpperCase().trim() == "INTRO") {
      //   uvid.style.display = "block"; 
      //   uvid.src = "./public/videos/spn.idle.mov"
      //   usrImg.src="";
      //   loadJson(BASE_CMS_URL + '/content/json/abc.json');
      //   return;
      // }
      // if (inputText.toUpperCase().trim() == "AAAS") {
      //   uvid.style.display = "block"; 
      //   uvid.src = "./public/videos/spn.idle.mov"
      //   usrImg.src="";
      //   loadJson(BASE_CMS_URL + '/content/json/aaas.json');
      //   return;
      // }
      // if (inputText.toUpperCase().trim() == "CWB") {
      //   uvid.style.display = "block"; 
      //   uvid.src = "./public/videos/spn.idle.mov"
      //   usrImg.src="";
      //   loadJson(BASE_CMS_URL + '/content/json/cwb.json');
      //   return;
      // }
      if (inputText.toUpperCase().substr(0,10) == "FILL COLOR") {
        Fc = inputText.toUpperCase().substr(11);
        return;
      }
      if (inputText.toUpperCase().substr(0,12) == "STROKE COLOR") {
        Sc = inputText.toUpperCase().substr(13);
        return;
      }
      if (inputText.toUpperCase().substr(0,11) == "STROKE SIZE") {
        Ss = float(inputText.toUpperCase().substr(12));
        strokeWeight(Ss);
        return;
      }
      if (inputText.toUpperCase().substr(0,9) == "TEXT SIZE") {
        Ts = float(inputText.toUpperCase().substr(10));
        textSize(Ts);
        return;
      }          
      if (inputText.toUpperCase() == "CLEAR") {
        Cd = 0;
        Shp = '';
        nText = '';
        document.getElementById("chatInput").focus();
        return;
      }
      if (inputText.toUpperCase() == "CLEAR CANVAS") {
        clear();
        return;
      } 
      if (inputText.toUpperCase() == "CLEAR ALL") {
        Cd = 0;
        Shp = '';
        nText = '';
        var list = document.getElementById("tcon");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        clear();
        document.getElementById("chatInput").focus(); 
        return;
      } 
      if (inputText.toUpperCase().substr(0,8) == "QCIRCLE(") {

        // alert(inputText.toUpperCase().substr(0,8));
        var ltxt = inputText.toUpperCase().length-8;
        // alert(ltxt);
        var arr = inputText.toUpperCase().substr(8,ltxt-1).split(",");

        // alert(arr);
        coordinateX1 = float(arr[0]);
        coordinateY1 = float(arr[1]);
        Cd = float(arr[2]);
        stroke(Sc);
        strokeWeight(Ss);
        if (Fc != ''){
          fill(Fc);
        } else {
          noFill();
        }

        circle(coordinateX1, coordinateY1, Cd);

        Shp = 'circle'; 
        return;

      } else if (inputText.toUpperCase().substr(0,7) == "QCIRCLE") {
        Cd = float(inputText.toUpperCase().substr(8));
      
        Shp = 'circle';
        return;
      }
      if (inputText.toUpperCase().substr(0,8) == "QSQUARE(") {
        var ltxt = inputText.toUpperCase().length-7;
        //alert(ltxt);
        var arr = inputText.toUpperCase().substr(8,ltxt-1).split(",");
        coordinateX1 = float(arr[0]);
        coordinateY1 = float(arr[1]);
        Cd = float(arr[2]);
        stroke(Sc);
        strokeWeight(Ss);
        if (Fc != ''){
          fill(Fc);
        } else {
          noFill();
        }

        square(coordinateX1, coordinateY1, Cd);

        Shp = 'square';
        return;
      } else if (inputText.toUpperCase().substr(0,7) == "QSQUARE") {
        Cd = float(inputText.toUpperCase().substr(8));
        Shp = 'square';
        return;
      }
      if (inputText.toUpperCase() == "RECTANGLE") {
        Cd = 100;
        Shp = 'rectangle';
        return;

      }          
      if (inputText.toUpperCase() == "TRIANGLE") {
        
        //triangle(118,328, 292, 61, 446, 340);
        Cd = 100;
        Shp = 'triangle';
        return;
      }
      if (inputText.toUpperCase() == "SCRIBBLE") {
        
        //triangle(118,328, 292, 61, 446, 340);
        Cd = 100;
        mCX1 = 0;
        mCY1 = 0;
        mCX2 = 0;
        mCY2 = 0;
        // Fc = 'gold';
        // Sc = 'black';
        Shp = 'scribble';
        return;
      }
      if (inputText.toUpperCase() == "LINE") {
        
        //triangle(118,328, 292, 61, 446, 340);
        Cd = 100;
        mCX1 = 0;
        mCY1 = 0;
        mCX2 = 0;
        mCY2 = 0;
        //Fc = 'gold';
        //Sc = 'black';
        Shp = 'line';
        return;
      }
      if (inputText.toUpperCase() == "CLOSE" || inputText.toUpperCase() == "X") {
        if (Shp == 'detect' || Shp == 'onload') {
          ctr = ctr+1;
          var can1 = document.getElementById('defaultCanvas0');

          // Create a link element to trigger the download
          var downloadLink = document.createElement('a');
  
          // // Set the download link attributes
          // downloadLink.href = can1.toDataURL(); // Convert canvas content to data URL
          // downloadLink.download = 'canvas_image.png'; // Set the file name
  
          // // Trigger a click on the link to start the download
          // downloadLink.click();
          let bid = 'btn'+ctr.toString();

          var btn = document.createElement("button");
          btn.setAttribute("class", "accordion");
          btn.setAttribute("id", bid);
          btn.setAttribute("onclick","myFunction()");

          var t = document.createTextNode('Objects Detected');
          inputText = "";
          btn.appendChild(t);
          //para.appendChild(btn);
          document.getElementById("tcon").appendChild(btn);
          var dv = document.createElement("DIV");
          dv.setAttribute("class", "panel");
          dv.setAttribute("style", "display: block;");
          dv.setAttribute("ID", "objects");

          var tt = document.createTextNode("");
          dv.appendChild(tt);
          document.getElementById("tcon").appendChild(dv);


          let cvsid = 'can-'+ctr.toString();  

          var can = document.createElement("img");
          can.setAttribute("style", "height:480px;")
          can.setAttribute("alt", "Canvas Image");
        
          can.setAttribute("ID", cvsid);
          can.setAttribute("src", can1.toDataURL());


          dv.appendChild(can);
          document.getElementById("tcon").appendChild(dv);

          // // Create the Play/Pause button
          var downldButton = document.createElement('button');
          downldButton.id = 'db-'+cvsid;
          downldButton.textContent = 'Download';
          dv.appendChild(downldButton);
          document.getElementById("tcon").appendChild(dv);

          const myList = document.querySelector('#tcon')
          const lastListItem = myList.lastElementChild;
          myList.insertBefore(lastListItem, myList.firstElementChild)
          const lastListItem2 = myList.lastElementChild;
          myList.insertBefore(lastListItem2, myList.firstElementChild)
          
          document.getElementById("toggle").click();
          Shp = '';
        }
        return;
      }
      if (inputText.toUpperCase() == "DETECT") {

        // toggleAppInfo();
        ctr = ctr+1;
        // var can1 = document.getElementById('canvas1');

        // // Create a link element to trigger the download
        // var downloadLink = document.createElement('a');

        // // Set the download link attributes
        // downloadLink.href = can1.toDataURL(); // Convert canvas content to data URL
        // downloadLink.download = 'canvas_image.png'; // Set the file name

        // // Trigger a click on the link to start the download
        // downloadLink.click();
        let bid = 'btn'+ctr.toString();

        var btn = document.createElement("button");
        btn.setAttribute("class", "accordion");
        btn.setAttribute("id", bid);
        btn.setAttribute("onclick","myFunction()");

        var t = document.createTextNode('F/Object Detection and Risk Assessment');
        inputText = "";
        btn.appendChild(t);
        //para.appendChild(btn);
        document.getElementById("tcon").appendChild(btn);
        var dv = document.createElement("DIV");
        dv.setAttribute("class", "panel");
        dv.setAttribute("style", "display: block;");
        dv.setAttribute("ID", "objects");

        // var tt = document.createTextNode("F/Object Detection and Risk Assessment");
        // dv.appendChild(tt);
        document.getElementById("tcon").appendChild(dv);

        // let cvsid = 'can-'+ctr.toString();  

        // var vdo1 = document.createElement("video");
        // vdo1.setAttribute("width", "320");
        // vdo1.setAttribute("height", "240");
        // vdo1.setAttribute("style", "position: relative;");
        // vdo1.setAttribute("autoplay", "autoplay");
        // vdo1.setAttribute("ID", "selectedCamera");
        // // can.setAttribute("src", can1.toDataURL());
        // dv.appendChild(vdo1);
        // document.getElementById("tcon").appendChild(dv);

        // var vdo1 = document.createElement("video");
        // vdo1.setAttribute("width", "320");
        // vdo1.setAttribute("height", "240");
        // vdo1.setAttribute("style", "position: relative;");
        // vdo1.setAttribute("autoplay", "autoplay");
        // vdo1.setAttribute("ID", "selectedCamera2");
        // dv.appendChild(vdo1);
        // document.getElementById("tcon").appendChild(dv);

        var can1 = document.createElement("canvas");
        can1.setAttribute("height", "240");
        can1.setAttribute("width", "320");
        can1.setAttribute("style", "position: relative;");
        can1.setAttribute("ID", "canvas11");
        dv.appendChild(can1);
        document.getElementById("tcon").appendChild(dv);
        var can1 = document.createElement("canvas");
        can1.setAttribute("height", "240");
        can1.setAttribute("width", "320");
        can1.setAttribute("style", "position: relative;");
        can1.setAttribute("ID", "canvas12");
        dv.appendChild(can1);
        document.getElementById("tcon").appendChild(dv);
        // // var can1 = document.createElement("canvas");
        // can1.setAttribute("height", "240");
        // can1.setAttribute("width", "320");
        // can1.setAttribute("style", "position: relative;");
        // can1.setAttribute("ID", "canvas21");
        // dv.appendChild(can1);
        // document.getElementById("tcon").appendChild(dv);
        // var can1 = document.createElement("canvas");
        // can1.setAttribute("height", "240");
        // can1.setAttribute("width", "320");
        // can1.setAttribute("style", "position: relative;");
        // can1.setAttribute("ID", "canvas22");
        // dv.appendChild(can1);
        // document.getElementById("tcon").appendChild(dv);
        // // Create the Play/Pause button
        // var downldButton = document.createElement('button');
        // downldButton.id = 'db-'+cvsid;
        // downldButton.textContent = 'Download';
        // dv.appendChild(downldButton);
        // document.getElementById("tcon").appendChild(dv);

        // const myList = document.querySelector('#tcon')
        // const lastListItem = myList.lastElementChild;
        // myList.insertBefore(lastListItem, myList.firstElementChild)
        // const lastListItem2 = myList.lastElementChild;
        // myList.insertBefore(lastListItem2, myList.firstElementChild)
        
        // document.getElementById("toggle").click();
        Shp = '';

        // document.getElementById("toggle").click();
        const URL = "https://teachablemachine.withgoogle.com/models/gu4zsbPdh/";

        // const URL = "./Smoke-Flame-DarkRoom/";
    
        let model, webcam, labelContainer,labelContainer2, maxPredictions;    
        let modelcc;
        let cameras = [];
        let currentCameraIndex = 0;
        let dFlg = false;
        let dFlg2 = false;
        let announcementText= '';
        let announcementText2= '';
        let detectionTime = '';
        let detectionTime2 = '';
        getLocation();
        // Load COCO-SSD model for object detection
        cocoSsd.load().then((loadedModel) => {
          modelcc = loadedModel;
          init();
          // Get available cameras
          navigator.mediaDevices.enumerateDevices().then((devices) => {
            cameras = devices.filter(device => device.kind === 'videoinput');
            setupCameraSelector(cameras);
            startObjectDetection();
          });
        });
    
        // Function to setup camera selector dropdown
        function setupCameraSelector(cameras) {
          const cameraSelector = document.getElementById('cameraSelector');
    
          cameras.forEach((camera, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.text = `Camera ${index + 1}`;
            cameraSelector.add(option);
          });
    
          cameraSelector.addEventListener('change', () => {
            currentCameraIndex = parseInt(cameraSelector.value, 10);
            startObjectDetection();
          });
        }
    
        // Function to get video stream from the selected camera
        async function getVideoStream(source) {
          const constraints = { video: { deviceId: cameras[source].deviceId } };
          return await navigator.mediaDevices.getUserMedia(constraints);
        }
        // // Function to get video stream from the selected camera
        // async function getVideoStream2(source) {
        //   const constraints = { video: { deviceId: cameras[source].deviceId } };
        //   return await navigator.mediaDevices.getUserMedia(constraints);
        // }    
        // Function to perform object detection on a video frame
        async function detectObjects(video1, modelcc, canvas11, canvas12) {
          const context1 = canvas11.getContext('2d');
          const context2 = canvas12.getContext('2d');
          // Ensure the video and model are ready
          if (video1.readyState === video1.HAVE_ENOUGH_DATA && modelcc && model) {
            // Draw the current video frame on the canvas
            context1.drawImage(video1, 0, 0, canvas11.width, canvas11.height);
            context2.drawImage(video1, 0, 0, canvas12.width, canvas12.height);
            context2.font = '16px Arial';
            context2.fillStyle = 'cyan';
            // Perform object detection on the canvas
            const predictions11 = await modelcc.detect(canvas11);
            const prediction12 = await model.predict(canvas12);
            // let detectionTimestamps = []; // Array to store timestamps of fire detections
    
            // alert(JSON.stringify(prediction));    
            announcementText = `Fire detected at Latitude: ${latitude} and Longitude: ${longitude} Source Camera number is 1. Fire Officers on duty to act as per the steps defined.`;
            for (let i = 0; i < maxPredictions; i++) {
                const classPrediction =
                    prediction12[i].className + ": " + prediction12[i].probability.toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
                if (prediction12[i].className == 'Flame_1' && prediction12[i].probability.toFixed(2) > 0.90 ){
                  if(!dFlg){
                    dFlg= true;
                      const currentDate = new Date();
                      const options = {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false, // 24-hour format
                      };
                
                     detectionTime = `Fire detected at Latitude: ${latitude} and Longitude: ${longitude} on ${new Intl.DateTimeFormat('en-GB', options).format(currentDate)}`;

                    // detectionTime = new Date().getTime();
                    console.log(`Fire detected on ${new Date()} at ${new Date().getTime()}`);

                    historyArea.value +=  announcementText+' '+detectionTime + '\n';
                    historyArea.scrollTop = historyArea.scrollHeight;
                    // Speak the detected fire message
                    speak(announcementText);
                    createGitHubIssue(detectionTime,announcementText);
                    // announcePeriodically();
                  }      
                  context2.fillText('              ', 15, 15);
                  context2.fillText(detectionTime, 15, 15);
                  context2.fillText('                     ', 15, 40);
                  context2.fillText(prediction12[i].probability.toFixed(2), 15, 40);
                  context2.fillText('                       ', 15, 60);
                  context2.fillText('Fire Detected on Camera#1', 15, 60);

                  
    
                } 

            }
         
            // Draw boundaries and labels on the canvas
            predictions11.forEach(prediction => {
              const [x, y, width, height] = prediction.bbox;
              context1.beginPath();
              context1.rect(x, y, width, height);
              context1.lineWidth = 2;
              context1.strokeStyle = 'cyan';
              context1.fillStyle = 'cyan';
              context1.stroke();
              context1.font = '16px Arial';
              context1.fillText(prediction.class, x+5, y + 15);
            });
    
            
            // Process predictions and perform risk assessment
            const riskAssessment = assessRisk(predictions11);
    
            // Log risk assessment and details
            // console.log('Risk Assessment:', riskAssessment);
            // console.log('Object Details:', predictions);
          }
        }
        // // Function to perform object detection on a video frame
        // async function detectObjects2(video2, modelcc, canvas21, canvas22) {
        //   const context21 = canvas21.getContext('2d');
        //   const context22 = canvas22.getContext('2d');
        //   // Ensure the video and model are ready
        //   if (video2.readyState === video2.HAVE_ENOUGH_DATA && modelcc && model) {
        //     // Draw the current video frame on the canvas
        //     context21.drawImage(video2, 0, 0, canvas21.width, canvas21.height);
        //     context22.drawImage(video2, 0, 0, canvas22.width, canvas22.height);
        //     context22.font = '16px Arial';
        //     context22.fillStyle = 'cyan';
        //     // Perform object detection on the canvas
        //     const predictions2 = await modelcc.detect(canvas21);
        //     const prediction2 = await model.predict(canvas22);
        //     let detectionTimestamps = []; // Array to store timestamps of fire detections
    
        //     // alert(JSON.stringify(prediction));    
        //     announcementText2 = "Fire detected. Source Camera number is 2. OnDuty Fire Officers to act as per the steps defined."
        //     for (let i = 0; i < maxPredictions; i++) {
        //         const classPrediction2 =
        //             prediction2[i].className + ": " + prediction2[i].probability.toFixed(2);
        //         labelContainer2.childNodes[i].innerHTML = classPrediction2;
        //         if (prediction2[i].className == 'Flame_1' && prediction2[i].probability.toFixed(2) > 0.98 ){
        //           if(!dFlg2){
        //             dFlg2= true;
        //             detectionTime2 = new Date().getTime();
        //             console.log(`Fire detected at ${new Date()}`);
        //             context22.fillText(detectionTime2, 15, 5);
        //             // Speak the detected fire message
        //             speak(announcementText2);
        //             // announcePeriodically();
                    
        //           }              
        //           context22.fillText('   ', 15, 25);
        //           context22.fillText(prediction2[i].probability.toFixed(2), 15, 25);
        //           context22.fillText('                      ', 15, 45);
        //           context22.fillText('Fire Detected Camera#2', 15, 45);
    
        //           // Create a timestamp for the current fire detection
                  
    
        //         } 
        //         // else {
        //         //   if(dFlg){
        //         //     dFlg= false;
        //         //   }
        //         // }
        //     }
         
        //     // Draw boundaries and labels on the canvas
        //     predictions2.forEach(prediction2 => {
        //       const [x, y, width, height] = prediction2.bbox;
        //       context21.beginPath();
        //       context21.rect(x, y, width, height);
        //       context21.lineWidth = 2;
        //       context21.strokeStyle = 'cyan';
        //       context21.fillStyle = 'cyan';
        //       context21.stroke();
        //       context21.font = '16px Arial';
        //       context21.fillText(prediction2.class, x+5, y + 15);
        //     });
    
            
        //     // Process predictions and perform risk assessment
        //     const riskAssessment = assessRisk(predictions2);
    
        //     // Log risk assessment and details
        //     // console.log('Risk Assessment:', riskAssessment);
        //     // console.log('Object Details:', predictions);
        //   }
        // }
    
        // Function to announce periodically every 2 minutes
        function announcePeriodically() {
            if (dFlg) {
                let currentTime = new Date().getTime();
    
                const elapsedTime = (detectionTime - currentTime) / 1000; // in mins
                if (elapsedTime < 1){
                  announcementText = `Fire detected around ${new Date()} reported by source camera ${currentCameraIndex}`;
                } else {
                  announcementText = `Fire detected around ${elapsedTime} minutes back.`;
                }
                speak(announcementText);
                setTimeout(() => {
                   dFlg= false;
                   announcePeriodically();
                }, 60000); // Schedule the next repeat announcement after 1 minutes
            }
        }    
        
        function onFireDetection() {
        // Your existing condition for detecting fire
        if (prediction2[i].className == 'Flame_1' && prediction2[i].probability.toFixed(2) > 0.98) {
            // Draw text on canvas
            context22.fillText('   ', 15, 25);
            context22.fillText(prediction2[i].probability.toFixed(2), 15, 25);
            context22.fillText('             ', 25, 25);
            context22.fillText('Detected Fire', 25, 25);
    
            // Create a timestamp for the current fire detection
            const detectionTime = new Date().getTime();
            detectionTimestamps.push(detectionTime);
    
            // Announce the detection with timestamp if it's 120 seconds since the first detection
            if (shouldAnnounceDetection()) {
                const elapsedTime = (detectionTime - detectionTimestamps[0]) / 1000; // in seconds
                speak(`Fire detected ${elapsedTime.toFixed(0)} seconds ago. Repeat announcement every 120 seconds.`);
            }
        }
    }
    
    // // Function to perform speech synthesis
    // function speak(message) {
    //     const utterance = new SpeechSynthesisUtterance(message);
    //     window.speechSynthesis.speak(utterance);
    // }
    
    // Function to check if it's time to announce a detection
    function shouldAnnounceDetection() {
        const currentTime = new Date().getTime();
        return currentTime - detectionTimestamps[0] >= 120000; // 120,000 milliseconds = 120 seconds
    }    
        
        
        // Function to perform speech synthesis
        function speak(message) {
            const utterance = new SpeechSynthesisUtterance(message);
            window.speechSynthesis.speak(utterance)
            // Wait for the map to load
            setTimeout(() => {
               saveAndUploadCanvas();
            }, 5000); 
        }   
        // Function to assess risk based on object detection predictions
        function assessRisk(predictions) {
          // Your logic for assessing risk based on the detected objects
          // You might assign scores to objects and calculate an overall risk level
          // Adjust this based on your specific use case
          return 'High Risk';
        }
    
        // Function to initiate download of the canvas content as an image
        function downloadCanvas() {
          
          const canvas3 = document.getElementById('canvas11');
          const canvas4 = document.getElementById('canvas12');
          const dataUrl11 = canvas3.toDataURL('image/png');
          const dataUrl12 = canvas4.toDataURL('image/png');
          
          let bid = 'btn'+ctr.toString();

          var btn = document.createElement("button");
          btn.setAttribute("class", "accordion");
          btn.setAttribute("id", bid);
          btn.setAttribute("onclick","myFunction()");

          var t = document.createTextNode(`Fire detected on ${new Date()} reported at Latitude: ${latitude} and Longitude: ${longitude}`);
                     
          inputText = "";
          btn.appendChild(t);
          //para.appendChild(btn);
          document.getElementById("tcon").appendChild(btn);
          
          var dv = document.createElement("DIV");
          dv.setAttribute("class", "panel");
          dv.setAttribute("style", "display: block;");
          dv.setAttribute("ID", "objects");
            
          var mapContainer = document.createElement("DIV");

          mapContainer.setAttribute("height", "600px");
          mapContainer.setAttribute("width", "400px");

          const iframe = document.createElement('iframe');
          iframe.src = `https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`;
        //   iframe.width = '100%';
        //   iframe.height = '100%';
          iframe.setAttribute("height", "500px");
          iframe.setAttribute("width", "700px");
        //   iframe.setAttribute("style", "position: relative;");
          mapContainer.appendChild(iframe);
          document.getElementById("tcon").appendChild(mapContainer);


          let cvsid = 'can11-'+ctr.toString();  

          var can11 = document.createElement("img");
        //can11.setAttribute("style", "height:240px;")
          can11.setAttribute("alt", "Canvas Image");
          can11.setAttribute("height", "240px");
          can11.setAttribute("width", "340px");
          can11.setAttribute("style", "position: relative;");
          can11.setAttribute("ID", cvsid);
          can11.src = canvas3.toDataURL('image/png');

          mapContainer.appendChild(can11);
          document.getElementById("tcon").appendChild(mapContainer);
          
          let cvsid2 = 'can12-'+ctr.toString();  

          var can12 = document.createElement("img");
        //can11.setAttribute("style", "height:400px;")
          can12.setAttribute("alt", "Canvas Image");
          can12.setAttribute("height", "240px");
          can12.setAttribute("width", "340px");
          can11.setAttribute("style", "position: relative;");
          can12.setAttribute("ID", cvsid2);
          can12.src = canvas4.toDataURL('image/png');

          mapContainer.appendChild(can12);
          document.getElementById("tcon").appendChild(mapContainer);
          
          
          
        //   document.getElementById(cvsid).src 
        //   // // Create the Play/Pause button
        //   var downldButton = document.createElement('button');
        //   downldButton.id = 'db-'+cvsid;
        //   downldButton.textContent = 'Download';
        //   dv.appendChild(downldButton);
        //   document.getElementById("tcon").appendChild(dv);

        //   const myList = document.querySelector('#tcon')
        //   const lastListItem = myList.lastElementChild;
        //   myList.insertBefore(lastListItem, myList.firstElementChild)
        //   const lastListItem2 = myList.lastElementChild;
        //   myList.insertBefore(lastListItem2, myList.firstElementChild)   
          
        //   const link = document.createElement('a');
        //   link.href = dataUrl11;
        //   link.download = 'trained_objects_detected.png';
        //   link.click();
        //   link.href = dataUrl12;
        //   link.download = 'curated_objects_detected.png';
        //   link.click();
            setTimeout(() => {
                   dFlg= false;
            }, 120000); 

        }
        
 
        // Function to initiate the process of saving and uploading canvas content
        function saveAndUploadCanvas() {
          downloadCanvas();

          // Upload the saved image to IBM Cloud Object Storage here
          // You would need to implement the code to interact with IBM Cloud Object Storage
        }
    
        // Function to periodically capture video frames and perform object detection
        function startObjectDetection() {
          const video1 = document.getElementById('selectedCamera');
        //   const video2 = document.getElementById('selectedCamera2');

          const canvas11 = document.getElementById('canvas11');
          const canvas12 = document.getElementById('canvas12');
        //   const canvas21 = document.getElementById('canvas21');
        //   const canvas22 = document.getElementById('canvas22');
          // const context = canvas1.getContext('2d');
          // const context2 = canvas2.getContext('2d');
    
          // Initialize video stream from the selected camera
          getVideoStream(currentCameraIndex).then((stream1) => {
            video1.srcObject = stream1;
    
            setInterval(() => {
              detectObjects(video1, modelcc, canvas11, canvas12);
            }, 1000); // Adjust the interval based on your requirements
          });
        //   // Initialize video stream from the selected camera
        //   getVideoStream2(currentCameraIndex+1).then((stream2) => {
        //     video2.srcObject = stream2;
    
        //     setInterval(() => {
        //       detectObjects2(video2, modelcc, canvas21, canvas22);
        //     }, 1000); // Adjust the interval based on your requirements
        //   });
        }
    
        // Load the image model and setup the webcam
        async function init() {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";
    
            // load the model and metadata
            // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
            // or files from your local hard drive
            // Note: the pose library adds "tmImage" object to your window (window.tmImage)
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();
    
            // // Convenience function to setup a webcam
            const flip = true; // whether to flip the webcam
            webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
            await webcam.setup(); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);
            
            // // append elements to the DOM
            // document.getElementById("webcam-container").appendChild(webcam.canvas);
            labelContainer = document.getElementById("label-container");
            for (let i = 0; i < maxPredictions; i++) { // and class labels
                labelContainer.appendChild(document.createElement("div"));
            }
            // labelContainer2 = document.getElementById("label-container2");
            // for (let i = 0; i < maxPredictions; i++) { // and class labels
            //     labelContainer2.appendChild(document.createElement("div"));
            // }            
        }
    
        // async function loop() {
        //     // webcam.update(); // update the webcam frame
        //     await predict();
        //     window.requestAnimationFrame(loop);
        // }
    
        // // run the webcam image through the image model
        // async function predict() {
        //     // predict can take in an image, video or canvas html element
        //     const prediction = await model.predict(webcam.canvas);
        //     for (let i = 0; i < maxPredictions; i++) {
        //         const classPrediction =
        //             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        //         labelContainer.childNodes[i].innerHTML = classPrediction;
        //     }
        // }
    
        // Event listener for the "Save and Upload" button
        const saveAndUploadBtn = document.getElementById('saveAndUploadBtn');
        saveAndUploadBtn.addEventListener('click', saveAndUploadCanvas);
    
        return;
      }
      if (inputText.toUpperCase() == "SAVE") {

        // Shp = 'save'
        // alert(can.id)

        var can1 = document.getElementById('defaultCanvas0');

        // Create a link element to trigger the download
        var downloadLink = document.createElement('a');

        // Set the download link attributes
        downloadLink.href = can1.toDataURL(); // Convert canvas content to data URL
        downloadLink.download = 'canvas_image.png'; // Set the file name

        // Trigger a click on the link to start the download
        downloadLink.click();
        // var a = document.createElement("a");
        // document.body.appendChild(a);
        // a.style = "display: none";
        // a.href = "/ibm/bluemix/appid/logout";
        // a.click();
        return;
      }
      if (inputText.toUpperCase().substr(0,12) == "CANVAS COLOR") {
        Cc = inputText.toUpperCase().substr(13);
        background(Cc);
        return;
      }
      if (inputText.toUpperCase().substr(0,5) == "TEXT(") {

        // alert(inputText.toUpperCase().substr(0,8));
        var ltxt = inputText.toUpperCase().length-5;
        // alert(ltxt);
        var arr = inputText.toUpperCase().substr(5,ltxt-1).split(",");

        // alert(arr);
        coordinateX1 = float(arr[0]);
        coordinateY1 = float(arr[1]);
        Cd = arr[2];
        textSize(Ts);
        stroke(Sc);
        strokeWeight(Ss);
        if (Fc != ''){
          fill(Fc);
        } else {
          noFill();
        }

        text(Cd, coordinateX1, coordinateY1, windowWidth - 360, 400);
        // circle(coordinateX1, coordinateY1, Cd);

        Shp = 'text'; 
        return;

      } else if (inputText.toUpperCase() == "TEXT") {
        
        Cd = '';
        mCX1 = 0;
        mCY1 = 0;
        mCX2 = 0;
        mCY2 = 0;
        //Fc = 'green';
        //Sc = 'black';
        Shp = 'text';
        return;
      }

      if (inputText.toUpperCase() == "SHOW XY") {
        if (show_coordinates){
          show_coordinates = false;
        } else {
          show_coordinates = true;
        }

        return;
      }          

      if (Shp == 'text' ) {
        
        //triangle(118,328, 292, 61, 446, 340);
        iUrl = '/content/topic/Katha-girl3.png'
        nText += inputText + "\n";

        // if (nText.length > 83){
          
        // }

        fill(Fs);
        textSize(24);

        stroke('white');
        strokeWeight(2);
        //noFill();
        //fill(255);
        //rect(10, 15, windowWidth - 325, windowHeight - 120);
        //fill(255,0,55);
        text(nText, 1, 1, windowWidth - 60, windowHeight - 80);            
        //narrateText(nText, iUrl);
        return;
      }
      if (inputText.toUpperCase().substr(0,5) == "TEXT(") {

        // alert(inputText.toUpperCase().substr(0,8));
        var ltxt = inputText.toUpperCase().length-5;
        // alert(ltxt);
        var arr = inputText.toUpperCase().substr(5,ltxt-1).split(",");

        // alert(arr);
        coordinateX1 = float(arr[0]);
        coordinateY1 = float(arr[1]);
        Cd = arr[2];
        textSize(Ts);
        stroke(Sc);
        strokeWeight(Ss);
        if (Fc != ''){
          fill(Fc);
        } else {
          noFill();
        }

        text(Cd, coordinateX1, coordinateY1, windowWidth - 360, 400);
        // circle(coordinateX1, coordinateY1, Cd);

        Shp = 'text'; 
        return;

      } else if (inputText.toUpperCase() == "TEXT") {

        Cd = '';
        mCX1 = 0;
        mCY1 = 0;
        mCX2 = 0;
        mCY2 = 0;
        //Fc = 'green';
        //Sc = 'black';
        Shp = 'text';
        return;
      }

      if (inputText.toUpperCase() == "SHOW XY") {
        if (show_coordinates){
          show_coordinates = false;
        } else {
          show_coordinates = true;
        }

        return;
      }          

      if (Shp == 'text' ) {

        //triangle(118,328, 292, 61, 446, 340);
        iUrl = '/content/topic/Katha-girl3.png'
        nText += inputText + "\n";

        // if (nText.length > 83){
          
        // }

        fill('teal');
        textSize(24);

        stroke('white');
        strokeWeight(2);
        //noFill();
        //fill(255);
        //rect(10, 15, windowWidth - 325, windowHeight - 120);
        //fill(255,0,55);
        text(nText, 1, 1, windowWidth - 60, windowHeight - 80);            
        //narrateText(nText, iUrl);
        return;
      }

      if (Shp == 'cgpt' ) {
        var fms = false;
        // Replace with your OpenAI API key
        const apiKey = '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'; 
        const chatHistory = document.getElementById('chat-history');
        var url = baseUrl+ "/process-message"; //"converse";
        baseUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';
        userMessage = inputText;
        // alert(uvid.src);
        // uvid.src="./public/alice.mp4";
        waitImg.src="https://responsivevoice.org/wp-content/uploads/2020/01/parrot-flight.png";
        
        console.log('prompt>>'+userMessage)

        fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          // body: JSON.stringify({ userMessage: userMessage, voice: "" }),
          body: JSON.stringify({ prompt: userMessage, max_tokens: 4000 }),
        })
          .then(response => response.json())
          .then(response => {

            const botResponse = JSON.stringify(response);
            // chatHistory.innerHTML += `<p>Bot: ${botResponse}</p>`;

            const textContainer = document.getElementById("historyArea");
            const lines = botResponse.split('\n').filter(line => line.trim() !== '');
            const text = lines;
            textContainer.style.whiteSpace = "pre-line";
            textContainer.innerText = text;
            historyArea.value += text + '\n';
            historyArea.scrollTop = historyArea.scrollHeight;
            // uvid.src="./public/alice.mp4";
            // responsiveVoice.speak(inputText,"UK English Female");  
            waitImg.src="";
            let array = response.choices[0].text; //.split("\n").filter(line => line.trim() !== '');
            const searchValue = 3;
            const index = array.indexOf("```mermaid");
            if (index !== -1) {
              const foundValue = array[index];
              console.log(`Element found at index ${index}: ${foundValue}`);
              fms = true;
              alert(foundValue)
              // array = array.split('\n').slice(1, -1).join('\n');
              // alert(array);
            } else {
              console.log(`Element not found in the array. ${index}`);
            }     
            // Convert JSON object to JSON string
            // const jsonString = JSON.stringify(array, null, 2);    
            // console.log(jsonString);
            // // Create a Blob containing the JSON data
            // const blob = new Blob([jsonString], { type: "application/json" });
            // // Create a Blob URL
            // const blobUrl = URL.createObjectURL(blob);
            // // Create an anchor element
            // const downloadLink = document.createElement("a");
            // downloadLink.href = blobUrl;
            // downloadLink.download = "escape_response.json"; // Specify the file name
            // // Programmatically trigger the download
            // downloadLink.click();
            // // Revoke the Blob URL to free up resources
            // URL.revokeObjectURL(blobUrl);   

            array = response.choices[0].text.replace(/\\n/g, '\n').replace(/\\/g, '').replace(/^\n\n/, '');  //.split("\n").filter(line => line.trim() !== '');
            // const cleanedJsonString = jsonString.replace(/^\n\n/, '');
            // alert(array)

            // if (array.includes('Article_id')){
            //   alert(array);
            // }

              ctr = ctr+1;
              let bid = 'btn'+ctr.toString();
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
              let sid = 'tae-'+ctr.toString()+bid;

              let tid = 'txt-'+ctr.toString()+bid;
              var inf = document.createElement("INPUT");
              inf.setAttribute("type", "text");
              inf.setAttribute("id", tid);
              inf.setAttribute("value", 'video controls:'+array);
              inf.setAttribute("onclick","myFunction()");
              inf.setAttribute("class", "form-control");
              dv.appendChild(inf);
              document.getElementById("tcon").appendChild(dv);
  
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
              
              document.getElementById(cid).value = array;

              const textContainer1 = document.getElementById(cid);
              const text1 = array;
              textContainer1.style.whiteSpace = "pre-line";
              textContainer1.innerText = text1;

              if (fms){
                alert('mermaid '+text1);
                // array = array.split('\n').slice(1, -1).join('\n');
                mermaidScript = array.trim().split('\n').slice(1, -1).join('\n');
                alert('ms '+mermaidScript);
                var dv = document.createElement("DIV");
                dv.setAttribute("class", "mermaid");
                dv.setAttribute("id", "mermaidContainer");
                dv.setAttribute("style", "display: block;");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);
                // alert(array);
                document.addEventListener('DOMContentLoaded', function () {
                  mermaid.init({ startOnLoad: true }, document.getElementByClass('mermaid'));
                  mermaid.mermaidAPI.render('graphDiv', text1);
                });
              }          

              // Create the  button
              const downloadButton = document.createElement('button');
              downloadButton.id = cid;
              downloadButton.textContent = 'Download';
              downloadButton.className = 'download';
              dv.appendChild(downloadButton);
              document.getElementById("tcon").appendChild(dv); 
              var dcid = downloadButton.id;

              var playButton = document.createElement('button');
              playButton.id = cid;
              playButton.textContent = 'Play Content';
              dv.appendChild(playButton);
              document.getElementById("tcon").appendChild(dv);   
              var pcid = playButton.id;

              var narrateButton = document.createElement('button');
              inf.setAttribute("onclick","myFunction()");
              narrateButton.id = cid;
              narrateButton.textContent = 'Narrate Content';
              dv.appendChild(narrateButton);
              document.getElementById("tcon").appendChild(dv);   
              var ncid = narrateButton.id;

              // count = 0;
              globalTopicJsonObj = document.getElementById(dcid).value;
              // Extract topics from the chatGPT results
              const topics = globalTopicJsonObj.split('\n').filter(line => line.trim().length > 0).map((line, index) => ({
                thumbnail: (index + 1).toString().padStart(3, '0'),
                iuri: 'image0001.jpg',
                title: '',
                description: line.trim(),
                instructor_content: '',
                vuri: 'ES_P0001.mov',
                duration: 0.10,
              }));

              // Create the JSON object
              const jsonObject = {
                "Article_id": "",
                "Article_name": "",
                "intro": "",
                "topics": topics,
                "outro": ""
              };

              // JSON string
              var jsonString = JSON.stringify(jsonObject, null, 2);
              
              downloadButton.onclick = function(e) {
                // let dcid = downloadButton.id;
                // count = 0;
                // globalContentJsonObj = document.getElementById(dcid).value;
                // let evtTgt = e.target;
                // evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);

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
              }
              playButton.onclick = function() {
                let ccid = playButton.id;
                // count = 0;
                ctr = ctr+1
                globalTopicJsonObj = JSON.parse(jsonString);
                // nextTopic = globalContentJsonObj;
                if(globalTopicJsonObj.topics && (globalTopicJsonObj.topics.length > 0))
                
                alert(globalTopicJsonObj.topics.length);
                playNextTopic(0); 
                // playNextTopic(count,globalContentJsonObj);
              }
              // narrateButton.onclick = function() {
              //   let ccid = narrateButton.id;
              //   alert
              //   // var divValue = document.getElementById(ccid).value;

              //   var clickedElement = event.target;
              //   var clickedElementID = clickedElement.id;
              //   var sbsclickedElementID = clickedElementID.substring(0,3);
              //   var divValue;
              //   if (sbsclickedElementID == "btn") {
              //     divValue = document.getElementById(clickedElementID).value;
              //     chatInput.value = divValue;
              //   }
              //   if (sbsclickedElementID == "txt") {
              //     divValue = document.getElementById(clickedElementID).value;
              //     chatInput.value = divValue;
              //   } else {
              //     divValue = document.getElementById(clickedElementID).innerHTML;
              //   }
              //   responsiveVoice.speak(divValue.replace(/<br>/g, ''), "UK English Male");
              //   // alert(divValue);
              //   // count = 0;
              //   globalTopicJsonObj = JSON.parse(jsonString);
              //   // showTopicDetails(0);
              //   // nextTopic = globalContentJsonObj;
              //   // if(globalContentJsonObj.topics && (globalContentJsonObj.topics.length > 0))
              //   // playTopicList(); 
              //   // alert(globalContentJsonObj.topics.length);
              //   // playNextTopic(count,globalContentJsonObj);
              // }            
            //   // alert(ctr);
            //   var btn = document.createElement("button");
            //   btn.setAttribute("class", "accordion");
            //   btn.setAttribute("id", bid);
            //   btn.setAttribute("onclick","myFunction()");

            //   var t = document.createTextNode(inputText);
            //   btn.appendChild(t);
            //   //para.appendChild(btn);
            //   document.getElementById("tcon").appendChild(btn);
              
            //   var dv = document.createElement("DIV");
            //   dv.setAttribute("class", "panel");
            //   dv.setAttribute("style", "display: block;");
              
            //   var tt = document.createTextNode("eXS Response");
            //   dv.appendChild(tt);
            //   document.getElementById("tcon").appendChild(dv);
            //   if (array.length > 1) {
            //     for (j in array) {
            //       let charlen = array[j].length;

            //       let tid = 'txt-'+j.toString()+bid;

            //       var inf = document.createElement("INPUT");
            //       inf.setAttribute("type", "text");

            //       inf.setAttribute("id", tid);
            //       // if (charlen > 121 ) {
            //       //   inf.setAttribute("rows", "4");
            //       //   document.getElementById(tid).style.height = "200px";
            //       // }
            //       inf.setAttribute("value", array[j]);
            //       inf.setAttribute("onclick","myFunction()");
            //       inf.setAttribute("class", "form-control");
            //       dv.appendChild(inf);
            //       document.getElementById("tcon").appendChild(dv);

            //       responsiveVoice.speak(array[j], "UK English Male"); 


            //       // prs_brian.idle.mp4 prs_daryll.idle.mp4 prs_jason.idle.mp4 prs_sarah.idle.mp4
                                
                
            //   // } else {
            //     let sid = 'tae-'+j.toString()+bid;
            //     // alert(sid);
            //     var inf = document.createElement("TEXTAREA");
            //     inf.setAttribute("type", "text");
            //     inf.setAttribute("style", "color:#777;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:115px;resize:none;overflow-y:scroll;");
            //     inf.setAttribute("id", sid);
            //     inf.setAttribute("onclick","myFunction()");
            //     inf.setAttribute("class", "form-control");
            //     dv.appendChild(inf);
            //     document.getElementById("tcon").appendChild(dv);

            //     let cid = document.getElementsByTagName("textarea")[sid].id;
            //     // alert(cid);
            //     document.getElementById(cid).value = array[j];

            //     const textContainer = document.getElementById(cid);
            //     const text = array[j];
            //     textContainer.style.whiteSpace = "pre-line";
            //     textContainer.innerText = text;
                
            //     // responsiveVoice.speak(array[0], "UK English Male");
            //   //   uvid.src="./public/videos/spn.idle.mov";
            //     }
            //   }
            //   uvid.src="./public/videos/prs_jason.idle.mp4";
            //   uvid.style.display = "block"; 
            //   // uvid.src = "./public/videos/spn.idle.mov"
            //   usrImg.src="";
            //   uvid.play();
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
    }
    function isJSONString(str) {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    }
    
    function countJSONElements(jsonString) {
      try {
        const jsonObject = JSON.parse(jsonString);
        if (typeof jsonObject === 'object') {
          return Object.keys(jsonObject).length;
        }
      } catch (e) {
        // JSON parsing failed
        return 0;
      }
    }
    
    // Example usage:
    // const response = '{"key1": "value1", "key2": "value2", "key3": "value3"}'; // Replace this with your received response


    
    function startSecondSpeech() {
      // uvid.src="./public/videos/spn.idle.mov";
      // return;
        responsiveVoice.speak("Hmm", "UK English Male");
        // Add any other speech commands or actions you need to perform here
    }

    function myFunction() {
      var clickedElement = event.target;
      var clickedElementID = clickedElement.id;
      var sbsclickedElementID = clickedElementID.substring(0,3);
      var divValue;
            alert(clickedElementID);
      if (sbsclickedElementID == "bpp") {

        divValue = document.getElementById(clickedElementID).innerHTML;
      }
      if (sbsclickedElementID == "tae") {
        divValue = document.getElementById(clickedElementID).value;
        // responsiveVoice.speak(divValue, "Uk English Male");
        responsiveVoice.speak(divValue, "UK English Male");
        // chatInput.value = divValue;
      }
      if (sbsclickedElementID == "btn") {
        divValue = document.getElementById(clickedElementID).innerHTML;
        // chatInput.value = divValue;
      }
      if (sbsclickedElementID == "cb0") {
        divValue = document.getElementById(clickedElementID).innerHTML;
      }

      // alert(divValue);



      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    }

    function countCharacters() {
      var textbox = document.getElementById("chatInput");
      var charCount = document.getElementById("charCount");
      charCount.innerText = textbox.value.length + " characters";
    }

    var startTime;
    var endTime;
    var flag = true;

    function playNextTopic (count) { 
      var topiccount = globalTopicJsonObj.topics.length;
      var nextTopic = globalTopicJsonObj.topics[+count];

      // if(nextTopic.description != ""){
      alert(count);
      if (flag) {
        ctr = ctr+1;

        let bid = 'btn'+ctr.toString();
        // let bid = 'btn'+ctr.toString();
        // alert(ctr);  
        var btn = document.createElement("button");
        btn.setAttribute("class", "accordion");
        btn.setAttribute("id", bid);
        btn.setAttribute("onclick","myFunction()");

        var title = nextTopic.title;//' Automation as a Service for Fire Detection & Protection';

        
        var t = document.createTextNode('SNo#'+ctr+' '+title);
        btn.appendChild(t);
        //para.appendChild(btn);
        document.getElementById("tcon").appendChild(btn);


      }     

      var dv = document.createElement("DIV");
      dv.setAttribute("class", "panel");
      // dv.setAttribute("style", "display: block;");
      dv.setAttribute("style", "display: block; font-size: 14px; font-family: Arial, sans-serif;");
      

      
      let tid = 'txt-'+ctr.toString()+bid;

      var inf = document.createElement("INPUT");
      inf.setAttribute("type", "text");

      inf.setAttribute("id", tid);

      inf.setAttribute("value", 'Text:'+nextTopic.vuri);
      inf.setAttribute("onclick","myFunction()");
      inf.setAttribute("class", "form-control");
      dv.appendChild(inf);
      document.getElementById("tcon").appendChild(dv);

      let sid = 'tae-'+ctr.toString()+bid;
      // alert(sid);
      var inf = document.createElement("TEXTAREA");
      inf.setAttribute('readonly', 'readonly');
      inf.setAttribute("type", "text");
      inf.setAttribute("style", "color:#444;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:180px;resize:none;overflow-y:scroll;");
      inf.setAttribute("id", sid);
      inf.setAttribute("onclick","myFunction()");
      inf.setAttribute("class", "form-control");
      dv.appendChild(inf);
      document.getElementById("tcon").appendChild(dv);
      var tt = document.createTextNode('Controls:');
      dv.appendChild(tt);
      document.getElementById("tcon").appendChild(dv);

      // // Create the Play button
      // var playButton = document.createElement('button');
      // playButton.id = 'playButton'+bid;
      // playButton.textContent = 'Play from Start';
      // dv.appendChild(playButton);
      // document.getElementById("tcon").appendChild(dv);

      // // Create the Play/Pause button
      var playplayButton = document.createElement('button');
      playplayButton.id = 'playplayButton';
      playplayButton.textContent = 'Pause';
      dv.appendChild(playplayButton);
      document.getElementById("tcon").appendChild(dv);
      
      // // Create the Pause button
      // var playButton = document.createElement('button');
      // playButton.id = 'playButton';
      // playButton.textContent = 'Pause';
      // dv.appendChild(playButton);
      // document.getElementById("tcon").appendChild(dv);
      // // Create the Resume button
      // var resumeButton = document.createElement('button');
      // resumeButton.id = 'resumeButton';
      // resumeButton.textContent = 'Resume';
      // dv.appendChild(resumeButton);
      // document.getElementById("tcon").appendChild(dv);

      // let prevbtn = document.createElement("button");
      // prevbtn.id = sid;
      // prevbtn.textContent = 'Previous';
      // // prevbtn.onclick='playPreviousImage()';
      // dv.appendChild(prevbtn);
      // document.getElementById("tcon").appendChild(dv);

      let nextbtn = document.createElement("button");
      nextbtn.id = sid;
      nextbtn.textContent = 'Resume';
      // nextbtn.onclick='playNextImage()';
      dv.appendChild(nextbtn);
      document.getElementById("tcon").appendChild(dv);  
          

      let cid = document.getElementsByTagName("textarea")[sid].id;
      // alert(cid);
      document.getElementById(cid).value = nextTopic.description;
      if (nextTopic.instructor_content){
        document.getElementById(cid).value = nextTopic.description +"\n"+nextTopic.instructor_content;
      }
      if (count == 0){
        // prevbtn.setAttribute('disabled'); // Re-enable nextbtn when moving backward
        if (nextTopic.instructor_content){
          document.getElementById(cid).value = "Intro: "+ globalContentJsonObj.intro +"\n\n"+ nextTopic.description +"\n\n"+nextTopic.instructor_content;
        } else {
          document.getElementById(cid).value = "Intro: "+ globalContentJsonObj.intro +"\n\n"+ nextTopic.description;
        }
        // responsiveVoice.speak(globalContentJsonObj.intro, "UK English Male");
      } 
      // const textContainer = document.getElementById(cid);
      // const text = nextTopic.description; //array[0];
      // textContainer.style.whiteSpace = "pre-line";
      // textContainer.innerText = text;
      if (flag) {
      // responsiveVoice.speak(array[j], "UK English Male");    
      const myList = document.querySelector('#tcon')
      const lastListItem = myList.lastElementChild;
      myList.insertBefore(lastListItem, myList.firstElementChild)
      const lastListItem2 = myList.lastElementChild;
      myList.insertBefore(lastListItem2, myList.firstElementChild)     

      }
      if (uvid.src.includes('.mov')){
      }
      if (uvid.src.includes('ES_P00')){

      } else {
          // uvid.src = nextTopic.vuri;
          // uvid.play();
          document.getElementById("cmsImg").style.display = "block";   
          // alert(nextTopic.vuri)
          // fingers = createVideo([iUrl]);
          // fingers.hide();	
          // alert(iUrl)
          // Add an event listener for when video metadata is loaded
      }

        // playButton.addEventListener('click', function () {
        //   // alert(globalContentJsonObj.images[0].vuri)
        //   uvid.src = globalContentJsonObj.images[1].vuri
        //   uvid.play();

        // });
        // playButton.addEventListener('click', function () {
        //   uvid.pause();
        //   // messageDiv.innerHTML = 'Video paused. Click "Resume" to continue.';
        // });

        // resumeButton.addEventListener('click', function () {
        //   uvid.play();
        //   // messageDiv.innerHTML = '';
        // });    
        // // Add event listener to toggle between play and pause
        

        playplayButton.addEventListener('click', function () {
          let buttonValue = playplayButton.textContent;
         
          if (buttonValue == 'Pause') {
              // uvid.play();
              playplayButton.textContent = 'Resume';
              responsiveVoice.speak(' ', "UK English Male");
              historyArea.value += 'Activity paused. Click "Resume" to continue.'+ '\n';
              historyArea.scrollTop = historyArea.scrollHeight;
              // messageDiv.innerHTML = '';
              nextbtn.removeAttribute('disabled');
          } else {
              // uvid.pause();
              flag =  false;
            
              playNextTopic(count);
              playplayButton.textContent = 'Pause';
              // messageDiv.innerHTML = 'Video paused. Click "Play" to resume.';
              historyArea.value += 'Resuming back from last point.'+ '\n';
              historyArea.scrollTop = historyArea.scrollHeight;

          }
        });
        // updateImage(nextImage.uri);
        if (uvid.src.includes('alice.idle.')){
          responsiveVoice.speak(nextTopic.description, "UK English Female");
        }
        if (uvid.src.includes('esd.idle.')){
          responsiveVoice.speak(nextTopic.description, "UK English Male");
        }
        // if (uvid.src.includes('ES_P00')){
        //   responsiveVoice.speak(nextTopic.description, "UK English Female");
        // } 

        if (nextTopic.instructor_content){
          responsiveVoice.speak(nextTopic.instructor_content, "UK English Male");
        }

        // responsiveVoice.speak(nextTopic.description, "UK English Male");

        historyArea.value += nextTopic.description + '\n';
        historyArea.scrollTop = historyArea.scrollHeight;
        
        responsiveVoice.speak(nextTopic.description, "UK English Male", {
          onstart: function() {
              startTime = new Date().getTime();
              nextbtn.setAttribute('disabled', false);
              console.log("Text started speaking at " + startTime);
          },
          onend: function() {
              endTime = new Date().getTime();
              console.log("Text ended speaking at " + endTime);
              console.log("Text was spoken for " + (endTime - startTime) + " milliseconds");
              count++;
              flag =  true;
              if(count < globalTopicJsonObj.topics.length){
                setTimeout('playNextTopic('+count+')', 0);
              } 
          }
      });
 
        if (count < topiccount) {    
          // prevbtn.addEventListener('click', () => {
          //   if (count > 0) {
          //     count--;
          //     // alert(count+' '+slidecount)
          //     playNextTopic(count);
          //     // nextbtn.removeAttribute('disabled'); // Re-enable nextbtn when moving backward
          //   }
          // });
          
          nextbtn.addEventListener('click', () => {
            if (count < topiccount - 1) {
              count++;
              // alert(count+' '+slidecount)
              stopTextToSpeech();
              playNextTopic(count);
              if (count === topiccount - 1) {
                nextbtn.setAttribute('disabled', true); // Disable nextbtn when reaching the last slide
              }            
            }
          });
          // responsiveVoice.speak(document.getElementById(cid).value, "UK English Male");
        }

      
        // // var duration = nextImage.duration
        // var duration = nextImage.duration; // 1 minute and 3 seconds
        // alert(duration)
        // var milliseconds = durationToMilliseconds(duration);
        // console.log(milliseconds); // Output: 60030
        //   // Example usage:
        const videoDurationInSeconds =nextTopic.duration; // 1 minute and 3 seconds
        const milliseconds = durationToMilliseconds(videoDurationInSeconds);
        console.log(milliseconds); // Output: 63000
        // alert(duration)
                   
        // narrateText(nText, iUrl);
        // count++;
        
        if(count < globalTopicJsonObj.topics.length){
          // setTimeout('playNextTopic('+count+')', milliseconds);
        } else {
          // document.getElementById("toggle").click();
          responsiveVoice.speak(globalTopicJsonObj.outro, "UK English Male");
          return;
        }
    }  

    function send_txt(ar01) {

      show_send_btn();
      if (ar01=="chatInput"){ 
        if(ncnt > 0 ) {
          //var cfid = 'fi0'+ncnt.toString();
          
          var fid = document.getElementById('fi0'+ncnt.toString());
          fid.value = chatInput.value;
        }

      } else {
      
        var x = document.getElementById(ar01);
        //x.value = x.value.toUpperCase();
        chatInput.value = x.value;
        
      }
    }
  

    function chartFunc(xValuesRT, yValuesRT, barColors){

      // document.getElementById("spnChart").style.display = "block";

      // var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
      // var yValues = [55, 49, 44, 24, 15];
      // var barColors = ["red", "green","blue","orange","brown"];

      new Chart("spnChart", {
        type: "horizontalBar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "World Wine Production 2018"
          }
        }
      });
    }


    function siteControls(inputText) {

        inputText = inputText.toLowerCase().trim();

        if (inputText.toUpperCase().trim() == "STOP SOD" ){
          return;
        }

        if (inputText == 'pause video' || inputText == 'pause' || inputText == 'stop video' || inputText == 'stop')  {
          vid.pause();
          return;
        } 

        if (inputText == 'play video'|| inputText == 'play')  {
          vid.play();
          return;
        } 
        if (inputText == 'show mic'|| inputText == 'use speech' || inputText == 'use mic' || inputText == 'use microphone')  {
          document.getElementById("panel").style.display = "block";
          return;
        } 
        if (inputText == 'hide mic'|| inputText == 'no speech' || inputText == 'no mic' || inputText == 'hide microphone')  {
          document.getElementById("panel").style.display = "none";
          return;
        }    
        if (inputText == 'mute'|| inputText == 'mute sound' || inputText == 'sound off' || inputText == 'no sound')  {
          vid.muted = true;
          return;
        }
        if (inputText == 'enable sound' || inputText == 'keep sound' || inputText == 'set volume on' || inputText == 'unmute')  {
          vid.muted = false;
          return;
        }  
        if (inputText == 'show video controls' || inputText == 'show controls' || inputText == 'toggle video controls') {
          showAVControl();
          return;
        }  
        if (inputText == 'hide video controls' || inputText == 'hide controls' || inputText == 'toggle video controls') {
          showAVControl();
          return;
        } 
        if (inputText == 'show camera' || inputText == 'on camera' || inputText == 'on video' || inputText == 'enable camera')  {
          toggleAppInfo();
          return;
        } 
        if (inputText == 'hide camera' || inputText == 'off camera' || inputText == 'off video' || inputText == 'disable camera')  {
          toggleAppInfo();
          return;
        }   
        if (inputText == 'click' || inputText == 'capture' || inputText == 'start video')  {
          snapClick();
          return;
        } 

        if (inputText == 'save' || inputText == 'save' )  {
          saveFunc();
          return;
        } 

        if (inputText == 'chart' || inputText == 'incident report' || inputText == 'line chart' || inputText == 'vertical bar chart')  {
          document.getElementById("history_area").style.display = "none";
          document.getElementById("toggle").click();
          charton = !charton;
          storedValues = [];
          var newElement = document.createElement("canvas");
          newElement.setAttribute("style", "width:100%;");
        
          newElement.setAttribute("ID", id="stackedChart");


          // Get a reference to the existing element
          const existingElement = document.getElementById('cmsImg');

          // Insert the new element before the existing element
          existingElement.parentNode.insertBefore(newElement, existingElement);

          // // document.getElementById("recordBtn").appendChild(can);
          // // document.getElementById("asideLabel").insertBefore("")
          // alert(charton);
          // var c = document.querySelector('canvas');
              
          // var timeoutId = '';
          // ctr = ctr+1;

          // let bid = 'btn'+ctr.toString();

          //   var btn = document.createElement("button");
          //   btn.setAttribute("class", "accordion");
          //   btn.setAttribute("id", bid);
          //   btn.setAttribute("onclick","myFunction()");

          //   var t = document.createTextNode(inputText);
          //   btn.appendChild(t);
          //   //para.appendChild(btn);
          //   document.getElementById("tcon").appendChild(btn);


          // let cvsid = 'can-'+ctr.toString();
          
          
          // var can = document.createElement("canvas");
          // can.setAttribute("style", "width:100%;");
        
        
          // can.setAttribute("ID", cvsid);

          // document.getElementById("tcon").appendChild(can);


          // const myList = document.querySelector('#tcon')
          // const lastListItem = myList.lastElementChild;
          // myList.insertBefore(lastListItem, myList.firstElementChild)
          // const lastListItem2 = myList.lastElementChild;
          // myList.insertBefore(lastListItem2, myList.firstElementChild)

          const synth = window.speechSynthesis; // Initialize the synth object
          const canvas = document.getElementById("stackedChart");
          var vmData = [ 
              {
                  squad_name: "APPS",
                  incidents: {
                      New: { P1: 2, P2: 3, P3: 6, P4: 50, P5: 60  },
                      "In Progress": { P1: 2, P2: 5, P3: 7, P4: 3, P5: 1 },
                      Resolved: { P1: 8, P2: 12, P3: 18, P4: 10, P5: 5 },
                      Closed: { P1: 3, P2: 6, P3: 8, P4: 4, P5: 2 }
                  }
              },
              {
                  squad_name: "BACKUP",
                  incidents: {
                      New: { P1: 5, P2: 10, P3: 15, P4: 8, P5: 3 },
                      "In Progress": { P1: 2, P2: 5, P3: 7, P4: 3, P5: 1 },
                      Resolved: { P1: 8, P2: 12, P3: 18, P4: 10, P5: 5 },
                      Closed: { P1: 3, P2: 6, P3: 8, P4: 4, P5: 2 }
                  }
              },
              {
                  squad_name: "LINUX",
                  incidents: {
                      New: { P1: 5, P2: 10, P3: 15, P4: 8, P5: 3 },
                      "In Progress": { P1: 2, P2: 5, P3: 7, P4: 3, P5: 1 },
                      Resolved: { P1: 8, P2: 12, P3: 18, P4: 10, P5: 5 },
                      Closed: { P1: 3, P2: 6, P3: 8, P4: 4, P5: 2 }
                  }
              },
              {
                  squad_name: "NETWORK",
                  incidents: {
                      New: { P1: 5, P2: 10, P3: 15, P4: 8, P5: 3 },
                      "In Progress": { P1: 2, P2: 5, P3: 7, P4: 3, P5: 1 },
                      Resolved: { P1: 8, P2: 12, P3: 18, P4: 10, P5: 5 },
                      Closed: { P1: 3, P2: 6, P3: 8, P4: 4, P5: 2 }
                  }
              },
              {
                  squad_name: "SECURITY",
                  incidents: {
                      New: { P1: 2, P2: 3, P3: 6, P4: 50, P5: 60  },
                      "In Progress": { P1: 2, P2: 5, P3: 7, P4: 3, P5: 1 },
                      Resolved: { P1: 8, P2: 12, P3: 18, P4: 10, P5: 5 },
                      Closed: { P1: 3, P2: 6, P3: 8, P4: 4, P5: 2 }
                  }
              },
              {
                  squad_name: "STORAGE",
                  incidents: {
                      New: { P1: 5, P2: 10, P3: 15, P4: 8, P5: 3 },
                      "In Progress": { P1: 2, P2: 5, P3: 7, P4: 3, P5: 1 },
                      Resolved: { P1: 8, P2: 12, P3: 18, P4: 10, P5: 5 },
                      Closed: { P1: 3, P2: 6, P3: 8, P4: 4, P5: 2 }
                  }
              },
              {
                  squad_name: "WINDOWS",
                  incidents: {
                      New: { P1: 5, P2: 10, P3: 15, P4: 8, P5: 3 },
                      "In Progress": { P1: 2, P2: 5, P3: 7, P4: 3, P5: 1 },
                      Resolved: { P1: 8, P2: 12, P3: 18, P4: 10, P5: 5 },
                      Closed: { P1: 3, P2: 6, P3: 8, P4: 4, P5: 2 }
                  }
              }
          ];
  
          // Extract unique categories and severities
          var categories = Object.keys(vmData[0].incidents);
          var severities = Object.keys(vmData[0].incidents[categories[0]]);
  
          // alert(severities)
  
          var storedValues = [];
          var storedValues2 = [];
          // Create labels for the chart (squad names)
          // var squadNames = vmData.map(squad => squad.squad_name);
          // Extract unique squad names
          var squadNames = vmData.map(item => item.squad_name);
  
          // Create data for the chart
          var datasets = [];
          var categoryColors = {
              New: 'red',
              "In Progress": 'yellow',
              Resolved: 'green',
              Closed: 'blue',
              Predicted: 'cyan' // New color for predicted incidents
          };
          // Function to get color based on category
          function getColor(category, severity) {
              // getColor2(severity);
              // Return colors based on category
              // You can customize the colors here
              // alert(category +" "+severity);
              if (category === "New") return "rgba(255, 0, 0, 0.8)";
              if (category === "In Progress") return "rgba(255, 165, 0, 0.8)";
              if (category === "Resolved") return "rgba(255, 255, 0, 0.8)";
              if (category === "Closed") return "rgba(0, 128, 0, 0.8)";
              // if (category === "Re_Opened") return "rgba(0, 0, 255, 0.8)";
              if (severity === "P1") return "rgba(55, 0, 0, 0.8)";
              if (severity === "P2") return "rgba(255, 165, 0, 0.8)";
              if (severity === "P3") return "rgba(255, 155, 0, 0.8)";
              if (severity === "P4") return "rgba(10, 128, 0, 0.8)";
              if (severity === "P5") return "rgba(0, 0, 25, 0.8)";
          }
  
          var labels = vmData.map(vm => vm.vm);
          var datasets = categories.map(category => {
              return {
                  // label: [category, severities],
                  label: [category],
                  data: vmData.map(vm => calculateCategoryTotal(vm.incidents, category)),
                  backgroundColor: severities.map(severity => getColor(category)),
                  borderWidth: 1
              };
          });        
          var pi = [];
          // Function to calculate total incidents for a category across all severities
          function calculateCategoryTotal(incidents, category) {
              totalSum = Object.values(incidents[category]).reduce((total, severity) => total + severity, 0);
              // alert(totalSum)
              return totalSum;
          }
   
          // Create a bar chart using Chart.js
          var ctx = canvas.getContext('2d');
  
          const config = {
              type: 'bar',
              data: {
                  labels: squadNames,
                  datasets: datasets
              },
              options: {
                maintainAspectRatio: false, // Set to false to control width manually
                responsive: true, // Make the chart responsive
                  scales: {
                      y: {
                          beginAtZero: true
                      }
                  },
              animation: {
                  duration: 0.1,
                  onComplete: function (chart) {
                      
                      const datasets = stackedChart.data.datasets;
                      ctx.font = "12px sans-serif";
                      ctx.fillStyle = "black";
                      ctx.textAlign = "center";
                      // var squadsTeams = squadNames;
                      // Extract unique squad names
                      var squadsTeams = vmData.map(item => item.squad_name);
  
                      for (let i = 0; i < datasets.length; i++) {
                          console.log(datasets.length);
  
                          const meta = stackedChart.getDatasetMeta(i);
                          meta.data.forEach((bar, index) => {
                              var squad = squadsTeams[index];
                              // alert(squad)
                              
                              var data = datasets[i].data[index];;
                              var lbl = datasets[i].label;
                              
                              const value = datasets[i].data[index];
                              const x = bar.x;
                              const y = bar.y +7 ; // Adjust the vertical position
                              // console.log(squad, lbl, value);
                              ctx.fillText(value, x, y);
                              if (storedValues.length < 35) {
                              storedValues.push({ squad: squad, label: lbl, data: data, x: x, y: y });
                              console.log('SPNIZE - >> ',storedValues.length);
                              }
                          });
                      }
                  }
              },
              plugins: {
                  title: {
                      display: true,
                      color: "cyan",
                      font: {size: 14},
                      text: 'Daily Incident Status',
                      padding: {
                          top: 10,
                          bottom: 10
                      },
  
                  }
              }
          }
      };
  
      const stackedChart = new Chart(canvas, config);
  
      // Sample past data for prediction
      const pastData = [100, 150, 200, 250, 300, 350, 400];
  
      // Function to predict severity based on past performance
      function predictSeverity(pastData) {
          // Add your prediction logic here (e.g., using machine learning models)
  
          // For simplicity, let's assume we add 10% to the past data for prediction
          return pastData.map(value => Math.round(value * 1.1));
      }
      
      // Calculate predicted incidents
      var predictedData = vmData.map(vm => Math.round(calculateCategoryTotal(vm.incidents, 'New') * 1.1));
      // var predictedData = vmData.map(squad => severities.map(severity => Math.round(squad.incidents.New[severity] * 1.1)));
      // alert(predictedData)
      
      datasets.push({
          label: 'Predicted',
          data: [].concat.apply([], predictedData), // Flatten the nested array
          backgroundColor: categoryColors.Predicted,
          // borderColor: categoryColors.Predicted,
          borderWidth: 1
      });
  
      stackedChart.update();
  
      // Function to retrieve values with a delay
      function retrieveValuesWithDelay(delay) {
          // Sort the storedValues array based on the "squad" property
          storedValues.sort((a, b) => a.squad.localeCompare(b.squad));
  
          // Now you can retrieve the sorted values with a delay
          storedValues.forEach((item, index) => {
            
              const squad = item.squad;
              const label = item.label;
              const data = item.data;
              const x = item.x;
              const y = item.y;
              
              // Retrieve the values after a delay of 7 seconds for each iteration
              timeoutId = setTimeout(() => {
                  // console.log(`Squad: ${squad}, Label: ${label}, Data: ${data}, X: ${x}, Y: ${y}`);
                  var mouseMoveEvent = new MouseEvent("mousemove", {
                              bubbles: true,
                              cancelable: true,
                              clientX: x,
                              clientY: y + 7,
                          });
  
                          canvas.dispatchEvent(mouseMoveEvent);
                          
  
                          // Use text-to-speech to announce the status and severity for each squad
                          if (label == "New") {
                              announcementText = `For ${squad}: we have ${data}: ${label} incidents.`;
                              // canvas.click();
                          } else if (label == "Resolved") {
                              announcementText = `We have ${data} incidents ${label} for ${squad}.`;
                          } else if (label == "In Progress") {
                              announcementText = `The ${squad} Squad has ${data} incidents which are ${label}`;
                          } else if (label == "Closed") {
                              announcementText = `Total incidents ${label} by ${squad} Squad are around ${data}.`;
                          } else if (label == "Re-opened") {
                              announcementText = `${squad}: ${label}: ${data} incidents re-opened.`;
                          } else if (label == "Predicted") {
                              announcementText = `The Overall ${label}: number of incidents for ${squad} Squad is around ${data}.`;
                          } else {
                              announcementText = `${squad}: ${label}: ${data} incidents.`;
                          }
  
                          speakWithBuffer(announcementText);

                          if (index == 34){
                              // clearTimeout(timeoutId);
                              recordBtn.click();
                          }
     
              }, index * 7000); // Delay of 7 seconds (7000 milliseconds)
              timeoutIds.push(timeoutId); 
              // alert(timeoutId);
          });
          
      }
  
          // Announce the predicted severity after 3 seconds
          // setTimeout(retrieveValuesWithDelay, 7000);
  
          // const canvas = document.getElementById('canvas');
          const context = canvas.getContext("2d");
          // const recordBtn = document.querySelector("button");
          
          const recordBtn = document.getElementById("recordBtn");

          // alert(recordBtn.id)
  
          let recording = false;
          let mediaRecorder;
          let recordedChunks = [];
          let audioBuffers = [];
  
          recordBtn.addEventListener("click", async () => {
              recording = !recording;
              if (recording) {
                  recordBtn.textContent = "Stop Meeting";
                  const stream = canvas.captureStream(25);
                  mediaRecorder = new MediaRecorder(stream, {
                      mimeType: 'video/webm;codecs=vp8',
                      ignoreMutedMedia: true
                  });
                  recordedChunks = [];
                  audioBuffers = [];
  
                  mediaRecorder.ondataavailable = (e) => {
                      if (e.data.size > 0) {
                          recordedChunks.push(e.data);
                      }
                  };
  
                  mediaRecorder.start();
                  
                  // Start recording canvas events and text-to-speech audio
                  startCanvasEventRecording();
                  
              } else {
                  recordBtn.textContent = "Start Meeting";
                  mediaRecorder.stop();
  
                  // Stop recording canvas events and text-to-speech audio
                  stopCanvasEventRecording();
  
              }
          });
  
  // Function to start recording canvas events and text-to-speech audio
  function startCanvasEventRecording() {
      // var delay = 3000;
      speakWithBuffer("Hi Squad Leaders and others, Thanks for joining the Daily Incident Status Meeting.");
      setTimeout(retrieveValuesWithDelay, 1000);
      // canvas.addEventListener("mousemove", handleMouseMove);
  }
  
  // Function to stop recording canvas events and text-to-speech audio
  async function stopCanvasEventRecording() {
      clearTimeout(timeoutId);  
      // storedValues = []; 
      
      const announcementText = "Thanks for attending the meeting, the session is now open for questions and clarification.";
      const bufferArray = await speakWithBuffer(announcementText);
      console.log("Received bufferArray:", bufferArray);
      audioBuffers.push(...(Array.isArray(bufferArray) ? bufferArray : [bufferArray]));
  
      // Ensure that audioBuffers are populated before proceeding
      if (recordedChunks.length > 0 && audioBuffers.length > 0) {
          // const combinedBlob = await mergeAudioBuffers(audioBuffers) //mergeVideoAndAudio(recordedChunks, audioBuffers);
          const combinedBlob = await mergeVideoAndAudio(recordedChunks, audioBuffers);
          // const url = URL.createObjectURL(combinedBlob);
          // const a = document.createElement("a");
          // a.href = url;
          // a.download = "canvas_recording_with_audio.webm";
          // a.click();
          // URL.revokeObjectURL(url);
          
          
          // var c = document.querySelector('canvas');
              
          // var timeoutId = '';
          ctr = ctr+1;

          let bid = 'btn'+ctr.toString();



            var btn = document.createElement("button");
            btn.setAttribute("class", "accordion");
            btn.setAttribute("id", bid);
            btn.setAttribute("onclick","myFunction()");

            var t = document.createTextNode(inputText);
            btn.appendChild(t);
            //para.appendChild(btn);
            document.getElementById("tcon").appendChild(btn);


          let cvsid = 'can-'+ctr.toString();
          
          
          var can = document.createElement("video");
          can.setAttribute("style", "width:100%;");
          can.setAttribute('autoplay', 'false');
          // can.setAttribute('loop', 'false');
          can.setAttribute('controls', 'true');
          // can.setAttribute('type', 'video/webm');
        
          can.setAttribute("ID", cvsid);

          document.getElementById("tcon").appendChild(can);


          const myList = document.querySelector('#tcon')
          const lastListItem = myList.lastElementChild;
          myList.insertBefore(lastListItem, myList.firstElementChild)
          const lastListItem2 = myList.lastElementChild;
          myList.insertBefore(lastListItem2, myList.firstElementChild)

          const videoURL = window.URL.createObjectURL(combinedBlob);
          can.src = videoURL;
          can.loop = false;

          document.getElementById('stackedChart').remove();
          
          charton = !charton;
          // // modal.style.display = "none";
          if (typeof stackedChart !== 'undefined' && stackedChart !== null) {
            stackedChart.destroy(); // Destroy the existing chart instance
                  // Restore canvas dimensions to initial values
              // stackedChart.width = "100%"; //initialMyChartWidth;
              // stackedChart.height = "100%" //initialMyChartHeight;
              // style="height: 490px; width: 90%;"
              storedValues = []; 
              recordedChunks = [];
              audioBuffers = [];
              synth.cancel();
          }
          
      } else {
          console.log("audioBuffers array is empty.");
      }
  }
  
  // Function to merge video and audio
  async function mergeVideoAndAudio(videoChunks, audioBuffers) {
      const videoBlob = new Blob(videoChunks, { type: 'video/webm' });
  
      const audioContext = new (window.AudioContext || window.webkitAudioContext)(); // Create an AudioContext
  
      // Check if audioBuffers is an array and not empty
      if (!Array.isArray(audioBuffers) || audioBuffers.length === 0) {
          throw new Error('Invalid or empty audioBuffers array.');
      }
  
      // Create an OfflineAudioContext for rendering the combined audio
      const offlineAudioContext = new OfflineAudioContext({
          numberOfChannels: audioBuffers[0].numberOfChannels,
          length: audioBuffers[0].length * audioBuffers.length,
          sampleRate: audioBuffers[0].sampleRate,
      });
  
      audioBuffers.forEach((audioBuffer, index) => {
          const source = offlineAudioContext.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(offlineAudioContext.destination);
          source.start(index * audioBuffer.length);
      });
  
      // Start the rendering process
      const renderedAudioBuffer = await offlineAudioContext.startRendering();
  
      const audioBufferArrayBuffer = audioBufferToWavArrayBuffer(renderedAudioBuffer);
      const audioUint8Array = new Uint8Array(audioBufferArrayBuffer);
  
      const audioBlob = new Blob([audioUint8Array], { type: 'audio/wav' });
  
      return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = async () => {
              const audioArrayBuffer = reader.result;
              const videoArrayBuffer = await videoBlob.arrayBuffer();
              const videoUint8Array = new Uint8Array(videoArrayBuffer);
  
              const combinedUint8Array = new Uint8Array(videoUint8Array.length + audioArrayBuffer.byteLength);
              combinedUint8Array.set(videoUint8Array, 0);
              combinedUint8Array.set(new Uint8Array(audioArrayBuffer), videoUint8Array.length);
  
              resolve(new Blob([combinedUint8Array], { type: 'video/webm' }));
          };
          reader.readAsArrayBuffer(audioBlob);
      });
  }
  
  
  // Handle mouse move event
  function handleMouseMove(event) {
      // ... (your canvas event handling logic)
  
      const announcementText = "Your announcement text here";
      speakWithBuffer(announcementText).then(bufferArray => {
          audioBuffers.push(...bufferArray);
      });
  }
  
  // Function to speak and return an audio buffer
  async function speakWithBuffer(text) {
      return new Promise(async (resolve, reject) => {
          try {
                  const utterance = new SpeechSynthesisUtterance(text);
                  utterance.lang = 'en-US';
  
              const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
              const analyserNode = audioContext.createAnalyser();
              analyserNode.fftSize = 2048;
              const bufferLength = analyserNode.frequencyBinCount;
              const dataArray = new Float32Array(bufferLength);
  
              const source = audioContext.createBufferSource();
              source.connect(analyserNode);
              analyserNode.connect(audioContext.destination);
  
              const chunks = [];
  
              utterance.onend = async () => {
                  source.stop();
                  analyserNode.disconnect();
                  const audioBuffer = audioContext.createBuffer(1, chunks.length * bufferLength, audioContext.sampleRate);
                  const audioBufferChannelData = audioBuffer.getChannelData(0);
  
                  for (let i = 0; i < chunks.length; i++) {
                      audioBufferChannelData.set(chunks[i], i * bufferLength);
                  }
  
                  resolve(audioBuffer);
              };
  
              source.onended = () => {
                  resolve(null); // Resolve with null if playback ends unexpectedly
              };
  
              source.start();
  
              // Capture audio data using analyserNode
              function captureAudioData() {
                  analyserNode.getFloatTimeDomainData(dataArray);
                  chunks.push(new Float32Array(dataArray));
                  requestAnimationFrame(captureAudioData);
              }
  
              captureAudioData();
  
              synth.speak(utterance);
          } catch (error) {
              console.error("Error in speakWithBuffer:", error);
              reject(error);
          }
      });
  }
  function audioBufferToWavArrayBuffer(audioBuffer) {
      const numChannels = audioBuffer.numberOfChannels;
      const sampleRate = audioBuffer.sampleRate;
      const numFrames = audioBuffer.length;
      const samples = new Float32Array(numFrames * numChannels);
  
      for (let channel = 0; channel < numChannels; channel++) {
          const channelData = audioBuffer.getChannelData(channel);
          samples.set(channelData, channel * numFrames);
      }
  
      const buffer = new ArrayBuffer(44 + samples.length * 2);
      const view = new DataView(buffer);
  
      // RIFF chunk descriptor
      writeString(view, 0, 'RIFF');
      view.setUint32(4, 36 + samples.length * 2, true);
      writeString(view, 8, 'WAVE');
  
      // Format chunk
      writeString(view, 12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, numChannels, true);
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, sampleRate * numChannels * 2, true);
      view.setUint16(32, numChannels * 2, true);
      view.setUint16(34, 16, true);
  
      // Data chunk
      writeString(view, 36, 'data');
      view.setUint32(40, samples.length * 2, true);
  
      // Write the PCM samples
      floatTo16BitPCM(view, 44, samples);
  
      return buffer;
  }
  
  function writeString(view, offset, string) {
      for (let i = 0; i < string.length; i++) {
          view.setUint8(offset + i, string.charCodeAt(i));
      }
  }
  
  function floatTo16BitPCM(output, offset, input) {
      for (let i = 0; i < input.length; i++, offset += 2) {
          const s = Math.max(-1, Math.min(1, input[i]));
          output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
      }
  }
  
      canvas.addEventListener("click", function(evt) {
          var activePoint = stackedChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
  
          if (activePoint.length > 0) {
              var datasetIndex = activePoint[0].datasetIndex;
              var selectedIndex = activePoint[0].index;
              var squad = stackedChart.data.labels[selectedIndex];
              var label = stackedChart.data.datasets[datasetIndex].label;
              var value = stackedChart.data.datasets[datasetIndex].data[selectedIndex];
              // alert(`Squad: ${squad}\nSeverity: ${label}\nCount: ${value}`);
              console.log('>>>>>>>>>>>>>>>>>>>>>>', squad);
              var modal = document.getElementById("myModal");
              var span = document.getElementsByClassName("close")[0];
              modal.style.display = "block";
  
              // For Slide-in Pane
              // var slidePane = document.getElementById("slidePane");
              // slidePane.style.right = "0";
              var sn = vmData.map(vm => vm.squad_name);
  
              function calculateSeverityTotal(vmData, squad, category, severity) {
                  const squadData = vmData.find(vm => vm.squad_name === squad);
                  if (squadData) {
                      return squadData.incidents[category][severity];
                  }
                  return 0;
              }
  
              var datasets = severities.map(severity => {
                  return {
                      label: severity,
                      data: categories.map(category => calculateSeverityTotal(vmData, squad, category, severity)),
                      backgroundColor: getColor(severity),
                      borderWidth: 1
                  };
              });
  
  
  
              var chartData2 = {
                  type: 'bar',
                  scales: {
                      x: {
                          stacked: false
                      },
                      y: {
                          stacked: false
                      }
                  },
                  data: {
                      labels: categories,
                      datasets: datasets
                  },
                  options: {
                      "animation": {
                      "duration": 0.1,
                      onComplete: function (chart) {
                          const datasets = myChart.data.datasets;
                          
                          ctx2.font = "12px sans-serif";
                          ctx2.fillStyle = "black";
                          ctx2.textAlign = "center";
                          // var squadsTeams = stackedChart.data.labels;
  
                          for (let i = 0; i < datasets.length; i++) {
                              const meta = myChart.getDatasetMeta(i);
                              meta.data.forEach((bar, index) => {
                                  // var squad = squadsTeams[index];
                                  // var data = datasets[i].data[index];;
                                  // var lbl = datasets[i].label;
  
                                  const value = datasets[i].data[index];
                                  const x = bar.x;
                                  const y = bar.y +7 ; // Adjust the vertical position
  
                                  ctx2.fillText(value, x, y);
                                  // storedValues.push({ squad: squad, label: lbl, data: data, x: x, y: y });
                              });
                          }
                      }
                      },
                      plugins: {
                          title: {
                              display: true,
                              color: "blue",
                              font: {size: 14},
                              text: 'Incident Severity Break-up Report for: '+squad+ ' Squad',
                              padding: {
                                  top: 10,
                                  bottom: 10
                              },
  
                          }
                      }
                  }
              };
  
              var canvas2 = document.getElementById('myChart');
              var ctx2 = canvas2.getContext('2d');
              var myChart = new Chart(ctx2, chartData2);
  
              // Close modal or slide-in pane when the close button is clicked
              span.onclick = function() {
                  modal.style.display = "none";
                  if (typeof myChart !== 'undefined' && myChart !== null) {
                      myChart.destroy(); // Destroy the existing chart instance
                          // Restore canvas dimensions to initial values
                      // myChartCanvas.width = "90%"; //initialMyChartWidth;
                      // myChartCanvas.height = "490px" //initialMyChartHeight;
                      // style="height: 490px; width: 90%;"
                  }
                  // slidePane.style.right = "-400px";
              };
          }
      });          

          // // document.getElementById(cvsid).style.display = "block";
          // var xValues = ["Italy", "France", "Spain", "USA", "Argentina", "Italy", "France", "Spain", "USA", "Argentina", "Italy", "France", "Spain", "USA", "Argentina"];
          // var yValues = [55, 49, 44, 24, 15, 55, 49, 44, 24, 15, 55, 49, 44, 24, 15];
          // var barColors = ["red", "green","blue","orange","brown"];
          // var btype = "bar" //nputText.substring(0,1);

          // // alert(btype);

          //   new Chart(cvsid, {
          //     type: btype,
          //     data: {
          //       labels: xValues,
          //       datasets: [{
          //         backgroundColor: barColors,
          //         data: yValues
          //       }]
          //     },
          //     options: {
          //       legend: {display: false},
          //       title: {
          //         display: true,
          //         text: "World Wine Production 2018"
          //       },
          //       scales: {
          //         xAxes: [{ticks: {min: 10, max:60}}]
          //       }
          //     }
          //   });
            //chartFunc(xValues,yValues,barColors);
            //inputText = text +' countries '+ xValues + ' versus in percent' + yValues

            return;
        } 


        
        if (inputText == 'clear' || inputText == 'restart' )  {
          
          var list = document.getElementById("tcon");
          while (list.hasChildNodes()) {
              list.removeChild(list.firstChild);
          }
        } 

        if (inputText == 'snapClick')  {
          
          ctr = ctr+1;

          let bid = 'btn'+ctr.toString();
          var context = snapshot.getContext('2d');
          context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
          //ImgData = context.getImageData(0, 0, snapshotCanvas.width, snapshotCanvas.height);
          // var fullQuality = snapshotCanvas.toDataURL("image/jpeg", 1.0);
          // var image = new Image();
          // image.src = snapshotCanvas.toDataURL("image/jpeg", 1.0);
      
          var btn = document.createElement("button");
          btn.setAttribute("class", "accordion");
          btn.setAttribute("id", bid);
          btn.setAttribute("onclick","myFunction()");

          var t = document.createTextNode(inputText);
          btn.appendChild(t);
          //para.appendChild(btn);
          document.getElementById("tcon").appendChild(btn);

          let cvsid = 'can-'+ctr.toString();
          
          var can = document.createElement("img");
          can.setAttribute("width", "100%");
                    
          can.setAttribute("ID", cvsid);
          
          can.src = snapshotCanvas.toDataURL("image/jpeg", 1.0);
          usrImg.src = snapshotCanvas.toDataURL("image/jpeg", 1.0);

          document.getElementById("tcon").appendChild(can);


          const myList = document.querySelector('#tcon')
          const lastListItem = myList.lastElementChild;
          myList.insertBefore(lastListItem, myList.firstElementChild)
          const lastListItem2 = myList.lastElementChild;
          myList.insertBefore(lastListItem2, myList.firstElementChild)

          // return;
        } 

}   

    function viewAssets() {

      var url = "viewAssets";

      var jsondata = { requestId: "sridhar", assistant_id: assistantid, session_id: sessionid };

      ajaxJSONPost(url, jsondata, function(aresult) {
          
        jsondata = JSON.stringify(aresult);
        //alert(jsondata);
                var list = document.getElementById("tcon");
                while (list.hasChildNodes()) {
                    list.removeChild(list.firstChild);
                }
        var i, x = "";

        for (i in aresult) {

          x = i +' '+aresult[i]._id;
          an = aresult[i].assetName;
          bn = aresult[i].buildingName;
          sn = aresult[i].spaceId;
          pn = aresult[i].phone;

                var para = document.createElement("P");
                var btn = document.createElement("Button");
                btn.setAttribute("class", "accordion");
                var t = document.createTextNode(x);
                btn.appendChild(t);
                //para.appendChild(btn);
                document.getElementById("tcon").appendChild(btn);
                var dv = document.createElement("DIV");
                dv.setAttribute("class", "panel");


                var tt = document.createTextNode("Asset Name");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);
               
                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", an);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);


                var tt = document.createTextNode("Building Name");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);
               
                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", bn);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);


                var tt = document.createTextNode("Space Id");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);
               
                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", sn);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);


                var tt = document.createTextNode("Phone");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);

                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", pn);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);

                    
        }

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

      });
      
    }


    function viewTickets() {

      var url = "viewTickets";

      var jsondata = { requestId: "sridhar", assistant_id: assistantid, session_id: sessionid };

      ajaxJSONPost(url, jsondata, function(aresult) {
          
        jsondata = JSON.stringify(aresult);
        //alert(jsondata);
                var list = document.getElementById("tcon");
                while (list.hasChildNodes()) {
                    list.removeChild(list.firstChild);
                }
        var i, x = "";

        for (i in aresult) {

          x = i +' '+aresult[i]._id;
          ip = aresult[i].issue;
          bn = aresult[i].buildingName;
          wd = aresult[i].weekDay;
          dt = aresult[i].dayTime;
          pn = aresult[i].phone;

                var para = document.createElement("P");
                var btn = document.createElement("Button");
                btn.setAttribute("class", "accordion");
                var t = document.createTextNode(x);
                btn.appendChild(t);
                //para.appendChild(btn);
                document.getElementById("tcon").appendChild(btn);
                var dv = document.createElement("DIV");
                dv.setAttribute("class", "panel");


                var tt = document.createTextNode("Issue");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);
               
                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", ip);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);


                var tt = document.createTextNode("Building Name");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);
               
                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", bn);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);


                var tt = document.createTextNode("Week Day");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);
               
                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", wd);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);


                var tt = document.createTextNode("Time");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);
               
                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", dt);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);

                var tt = document.createTextNode("Phone");
                dv.appendChild(tt);
                document.getElementById("tcon").appendChild(dv);

                var inf = document.createElement("INPUT");
                inf.setAttribute("type", "text");
                inf.setAttribute("value", pn);
                //inf.setAttribute("id", ar0);
                //inf.setAttribute("onkeyup", "send_txt(id)");
                inf.setAttribute("class", "form-control");
                dv.appendChild(inf);
                document.getElementById("tcon").appendChild(dv);

                    
        }

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

      }); 
      

    }


    function delsession() {

      var url = "delsession";

      var jsondata = { requestId: "sridhar", assistant_id: assistantid, session_id: sessionid };
    
      ajaxJSONPosta(url, jsondata, function(response) {
          
        // alert(JSON.stringify(response))

      });
    }
    
    window
        .addEventListener(
            'load',
            function() {
              // showVButtons('none');
              // updateImage('');
              // var c = document.querySelector('canvas');

              // var v = document.querySelector('video'); 
              
              // alert(v.id);
              // alert(c.id);
              // Get the canvas element
              // const can = document.getElementById("defaultCanvas0");
              

              // // alert(can.id);
              // // Get the label element
              // const aside = document.getElementById("asideLabel");
              
              // // Move the canvas inside the label
              // aside.appendChild(can);

              // // Shp = "onload"
              // // document.getElementById("toggle").click();
              // // document.getElementById("panel").style.display = "none";
              // document.getElementById("history_area").style.display = "block";
                 
              // siteControls(inputText);  




              // initiate(assistantid);
              if(uname==""){
                 historyArea.value += "me>> "+ "You're not authenticated :(" + "\n";
              }
              historyArea.scrollTop = historyArea.scrollHeight; 
              // document.getElementById("spnChart").style.display = "none";
              // const canvas = document.getElementById("defaultCanvas0");
              // const canvasContainer = document.getElementById("canvasContainer");
              // if (canvas && canvasContainer) {
              //     canvasContainer.appendChild(canvas);
              // }
              // uvid.src="https://cdn2.veltra.com/ptr/20180427105257_558150640_10498_0.jpg";
              waitImg.src="";
              // uvid.style.display = "none"; 
              // uvid.src = "";
              
              // usrImg.src='./public/images/naidu.jpeg'; //"https://cdn2.veltra.com/ptr/20180427105257_558150640_10498_0.jpg";
            //   cmsImg.src="https://responsivevoice.org/wp-content/uploads/2020/01/parrot-flight.png"
              //startButton(event);
              //  sendConverse("DETECT");
            //   uvid.play();
              setTimeout('loadJson("' + BASE_CMS_URL + '/content/json/escape102.json")', 100);

            });
    
    (function() {
      document
          .getElementById('chatInput')
          .addEventListener(
              'keydown',
              function(e) {
                if (e.key === "Enter") {
                  //send_button.style.display = 'none';
                  var inputText = this.value;
                  if (inputText != ""){
                    historyArea.value += 
                      'me>> '+ inputText + '\n';
                    historyArea.scrollTop = historyArea.scrollHeight;                  
                  // siteControls(inputText);  
                    sendConverse(inputText);
                  }
                  this.value = ''; 
                }
                if (e.key === "Escape") {
                  sendConverse("CLEAR");
                }  
                // if (e.keyCode === 37) {
                //   sendConverse("MOVE LEFT");
                // }   
                // if (e.keyCode === 38) { 
                //   sendConverse("MOVE TOP");
                // }
                // if (e.keyCode === 39) {
                //   sendConverse("MOVE RIGHT");
                // }   
                // if (e.keyCode === 40) {
                //   sendConverse("MOVE DOWN");
                // }  
              });
    })();

/*  
    $(window).on("beforeunload", function() { 
      var closeText = 'Okay, bye!';
      kathaClose(closeText);
      return closeText; 
    })
*/


    function updateImage(srcUri) {
      //console.log('Locating image: ' + BASE_CMS_URL + '/' + srcUri);
      //$('cmsImage').attr('src', BASE_CMS_URL + '/' + srcUri);  
      //document.getElementById("usrImg").src = BASE_CMS_URL + '/' + srcUri;
      if (srcUri.substr(0,4) == 'http')
      {
		    document.getElementById("cmsImg").src = srcUri;
      } else {
      	document.getElementById("cmsImg").src = BASE_CMS_URL + '/' + srcUri;
      }

    }
    // var count = 0;
    var bid ;
    var tid ;
    var sid ;
    var flg = true;
    var title; 
    var btn;
    var playButton;
    var addButton;
    var prevbtn;
    var nextbtn;
    var pbtnlbl;
    var nbtnlbl;

    function playNextImage(count) { 
      var slidecount = globalContentJsonObj.images.length;
      var nextImage = globalContentJsonObj.images[+count];
      // if (nextImage.vuri.includes('.json' || '.JSON')){
      //   // alert(nextImage.vuri)
      //   setTimeout('loadJson("' + BASE_CMS_URL + '/content/json/'+nextImage.vuri+'")', 10);
      //   return;
      // }

      title = nextImage.title;
      var labelElement = document.getElementById("vdolbl");
      labelElement.textContent = title;
      
      if (flg) {
        // flg=false;
        ctr = ctr+1;
        bid = 'btn'+ctr.toString();
        tid = 'txt-'+ctr.toString()+bid;
        sid = 'tae-'+ctr.toString()+bid;
        
        // alert(sid);
        btn = document.createElement("button");
        btn.setAttribute("class", "accordion");
        btn.setAttribute("id", bid);
        btn.setAttribute("onclick","myFunction()");
        var t = document.createTextNode('SNo#'+ctr+' '+title);
        btn.appendChild(t);
        //para.appendChild(btn);
        document.getElementById("tcon").appendChild(btn);
    

        var dv = document.createElement("DIV");
        dv.setAttribute("class", "panel");
        // dv.setAttribute("style", "display: block;");
        dv.setAttribute("style", "display: block; font-size: 14px; font-family: Arial, sans-serif;");
      
        // alert(sid);
        var inf = document.createElement("TEXTAREA");
        inf.setAttribute('readonly', 'readonly');
        inf.setAttribute("type", "text");
        inf.setAttribute("style", "color:#444;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:180px;resize:none;overflow-y:scroll;");
        inf.setAttribute("id", sid);
        inf.setAttribute("onclick","myFunction()");
        inf.setAttribute("class", "form-control");
        dv.appendChild(inf);
        document.getElementById("tcon").appendChild(dv);
        var tt = document.createTextNode('controls:');
        dv.appendChild(tt);
        document.getElementById("tcon").appendChild(dv);

        // addButton = document.createElement('button');
        // addButton.id = 'cb'+count.toString();
        // // addButton.onclick='myFunction()';
        // addButton.textContent = 'Add Role';
        // addButton.setAttribute("onclick","myFunction()");
        // dv.appendChild(addButton);
        // document.getElementById("tcon").appendChild(dv);

        if (slidecount > 1){
          // addButton = document.createElement('button');
          // addButton.id = sid;
          // addButton.textContent = 'Add Role';
          // dv.appendChild(addButton);
          // document.getElementById("tcon").appendChild(dv);    
                
          // Create the Play/Pause button
          // 'cbp-'+ctr.toString()+bid;
          playButton = document.createElement('button');
          playButton.id = 'bpp'+ctr.toString()+bid;
          playButton.textContent = 'Pause';
          playButton.setAttribute("onclick","myFunction()");
          dv.appendChild(playButton);
          document.getElementById("tcon").appendChild(dv);

          if (nextImage.vuri.includes('idle.mp4')){
            pbtnlbl = 'Current Role';
            nbtnlbl = 'Previous Role';
            // playButton.style.display = 'none';
          } else {
            pbtnlbl = 'Start Again';
            nbtnlbl = 'Next';
            // playButton.style.display = 'block'; 
          }
          prevbtn = document.createElement("button");
          prevbtn.id = sid;
          prevbtn.textContent = pbtnlbl;
          // prevbtn.onclick='playPreviousImage()';
          dv.appendChild(prevbtn);
          document.getElementById("tcon").appendChild(dv);

          nextbtn = document.createElement("button");
          nextbtn.id = sid;
          nextbtn.textContent = nbtnlbl;
          // nextbtn.onclick='playNextImage()';
          dv.appendChild(nextbtn);
          document.getElementById("tcon").appendChild(dv);  
        } else {

        }

        // responsiveVoice.speak(array[j], "UK English Male");    
        const myList = document.querySelector('#tcon')
        const lastListItem = myList.lastElementChild;
        myList.insertBefore(lastListItem, myList.firstElementChild)
        const lastListItem2 = myList.lastElementChild;
        myList.insertBefore(lastListItem2, myList.firstElementChild)     

      } 

      let cid = document.getElementsByTagName("textarea")[sid].id;
      
      document.getElementById(cid).value = nextImage.description;
      
      title = nextImage.title;//' Automation as a Service for Fire Detection & Protection';
      btn.name = title;
      // alert(title+' :'+document.getElementById(cid).value);
      // alert(title)
      // alert(cid);
      if (nextImage.instructor_content){
        document.getElementById(cid).value = nextImage.description +"\n"+nextImage.instructor_content;
      }
      if (count == 0){
        if (nextImage.instructor_content){
          document.getElementById(cid).value = "Intro: "+ globalContentJsonObj.intro +"\n\n"+ nextImage.description +"\n\n"+nextImage.instructor_content;
        } else {
          document.getElementById(cid).value = "Intro: "+ globalContentJsonObj.intro +"\n\n"+ nextImage.description;
        }
      } 

      // if (nextImage.iuri.includes('.jpg' || '.jpeg')){
      //   document.getElementById("usrImg").style.display = "block";  
      //   usrImg.src =  nextImage.iuri;
      //   uvid.style.display = 'none';
      // }
      // if (nextImage.vuri.includes('.mp4' || '.mov')){
      //   document.getElementById("usrImg").style.display = "none";  
      //   cmsImg.src =  nextImage.iuri;
      //   uvid.style.display = 'block';
      // }

      if (uvid.src.includes('.mov')){
      }
      if (uvid.src.includes('idle.mp4')){

      } else {
        // Add event listener to toggle between play and pause
        if (slidecount > 1){
          playButton.addEventListener('click', function () {
            // uvid = document.getElementById('usrVideo')
            // alert(document.getElementsByTagName("textarea")[sid].id);
            if (uvid.paused) {
                uvid.play();
                playButton.textContent = 'Pause';
                // historyArea.value += ''+ '\n';
                // messageDiv.innerHTML = '';

            } else {
                uvid.pause();
                playButton.textContent = 'Play';
                // messageDiv.innerHTML = 'Video paused. Click "Play" to resume.';
                // historyArea.value += 'Video paused. Click "Resume" to resume.'+ '\n';
                // historyArea.scrollTop = historyArea.scrollHeight;
            }
          });
        }
      }

      if (uvid.src.includes('ES_P00')){

      } else {
          uvid.src = nextImage.vuri;
          uvid.play();
          document.getElementById("cmsImg").style.display = "none";   
                   
          // alert(nextImage.vuri)
          // fingers = createVideo([iUrl]);
          // fingers.hide();	
          // alert(iUrl)
          // Add an event listener for when video metadata is loaded
      }
           


        // updateImage(nextImage.uri);        
        // usrImg.src=nextImage.iuri;

        historyArea.value += nextImage.description + '\n';
        historyArea.scrollTop = historyArea.scrollHeight;
        // responsiveVoice.speak(globalTopicJsonObj.outro, "UK English Male");
      //   // Example usage:
        // const videoDurationInSeconds =nextImage.duration; // 1 minute and 3 seconds
        // const milliseconds = durationToMilliseconds(videoDurationInSeconds);
        // console.log(milliseconds); // Output: 63000
        // alert(milliseconds);
                   
        // narrateText(nText, iUrl);
        if (flg) {
          // flg=false;        
          if (count < slidecount) {   
            if (slidecount > 1){ 
              prevbtn.addEventListener('click', () => {
                if (count > 0) {
                  count = 0;
                  // alert(count+' '+slidecount)
                  playNextImage(count);
                  nextbtn.removeAttribute('disabled'); // Re-enable nextbtn when moving backward
                }
              });
              
              nextbtn.addEventListener('click', () => {
                if (currentSlide < slidecount - 1) {
                  count++;
                  // alert(count+' '+slidecount)
                  stopTextToSpeech();
                  playNextImage(count);
                  if (count === slidecount - 1) {
                    nextbtn.setAttribute('disabled', true); // Disable nextbtn when reaching the last slide
                    // alert(jfn);
                    setTimeout('loadJson("' + BASE_CMS_URL + '/content/json/'+jfn+'")', 100);
                    return;
                  }            

                }
              });
            }
            // responsiveVoice.speak("Please type next or click on the next button to see more roles", "UK English Male");
          }
        }    // if(count < globalContentJsonObj.images.length){
        //   prevbtn.addEventListener('click', function () {
            
        //     // if(count < globalContentJsonObj.images.length){

        //     // milliseconds = 0;
        //     // if (count < slidecount - 1) {
              
        //     // }
        //     if ( count > 0) {
        //       count--;
        //       // showSlide(currentSlide - 1);
        //       alert(count+' '+slidecount)
        //       playNextImage(count);
        //     }
        //   });  
        //   nextbtn.addEventListener('click', function () {
        //     if (count < slidecount - 1) {
              
        //       alert(count+' '+slidecount)
        //       playNextImage(count);
        //       if (count === slidecount - 1) {
        //         nextbtn.setAttribute('disabled', true); // Disable nextbtn when reaching the last slide
        //       }
        //     }
        //   });   

        //   // setTimeout('playNextImage('+count+')', milliseconds);
        // } else {
        //   // document.getElementById("toggle").click();
        //   responsiveVoice.speak(globalContentJsonObj.outro, "UK English Male");
        //   // return;
        // }
    }
    // var bid;
    // var tid;
    // var sid;
    // var flg = true;
    // var btn;
    // var playButton;
    // var prevbtn;
    // var nextbtn;
    // var count = 0; // Ensure count is declared globally
    // var uvid = document.getElementById('usrVideo'); // Replace 'yourVideoId' with the actual ID of your video element
    // var milliseconds = 5000; // Adjust the delay as needed
    
    // function playNextRole11() {
    //   var rolecount = globalRoleJsonObj.roles.length;
    //   var nextRole = globalRoleJsonObj.roles[count];
    
    //   if (flg) {
    //     flg = false;
    //     // ... (Your existing logic for creating buttons and textareas)
    //     ctr = ctr+1;
    //     alert(ctr);
    //     bid = 'btn'+ctr.toString();
    //     tid = 'txt-'+ctr.toString()+bid;
    //     sid = 'tae-'+ctr.toString()+bid;
    //     // let bid = 'btn'+ctr.toString();
    //     // alert(sid);
    //     btn = document.createElement("button");
    //     btn.setAttribute("class", "accordion");
    //     btn.setAttribute("id", bid);
    //     btn.setAttribute("onclick","myFunction()");
    
        
    //     var t = document.createTextNode('SNo#'+ctr);
    //     btn.appendChild(t);
    //     //para.appendChild(btn);
    //     document.getElementById("tcon").appendChild(btn);
      
    
    //     var dv = document.createElement("DIV");
    //     dv.setAttribute("class", "panel");
    //     // dv.setAttribute("style", "display: block;");
    //     dv.setAttribute("style", "display: block; font-size: 14px; font-family: Arial, sans-serif;");
    //     var inf = document.createElement("TEXTAREA");
    //     inf.setAttribute('readonly', 'readonly');
    //     inf.setAttribute("type", "text");
    //     inf.setAttribute("style", "color:#444;background-color:transparen;border:1px solid #ddd;font-size:14px;width:100%;height:180px;resize:none;overflow-y:scroll;");
    //     inf.setAttribute("id", sid);
    //     inf.setAttribute("onclick","myFunction()");
    //     inf.setAttribute("class", "form-control");
    //     dv.appendChild(inf);
    //     document.getElementById("tcon").appendChild(dv);
    //     var tt = document.createTextNode('controls:');
    //     dv.appendChild(tt);
    //     document.getElementById("tcon").appendChild(dv);
        
    //     // Create the Play/Pause button
    //     playButton = document.createElement('button');
    //     playButton.id = 'playButton';
    //     playButton.textContent = 'Play Content';
    //     dv.appendChild(playButton);
    
    //     prevbtn = document.createElement('button');
    //     prevbtn.id = 'prevButton';
    //     prevbtn.textContent = 'Previous';
    //     dv.appendChild(prevbtn);
    
    //     nextbtn = document.createElement('button');
    //     nextbtn.id = 'nextButton';
    //     nextbtn.textContent = 'Next';
    //     dv.appendChild(nextbtn);
    
    //   // responsiveVoice.speak(array[j], "UK English Male");    
    //   const myList = document.querySelector('#tcon')
    //   const lastListItem = myList.lastElementChild;
    //   myList.insertBefore(lastListItem, myList.firstElementChild)
    //   const lastListItem2 = myList.lastElementChild;
    //   myList.insertBefore(lastListItem2, myList.firstElementChild)     
    
    
    //     // ... (Your existing logic for appending elements to the DOM)
    
    //     // Add event listener to toggle between play and pause
    //     playButton.addEventListener('click', function () {
    //       if (uvid.paused) {
    //         uvid.play();
    //         playButton.textContent = 'Pause';
    //         // ... (Your existing logic)
    //       } else {
    //         uvid.pause();
    //         playButton.textContent = 'Play';
    //         // ... (Your existing logic)
    //       }
    //     });
    
    //     prevbtn.addEventListener('click', function () {
    //       if (count > 0) {
    //         count--;
    //         playNextRole();
    //         nextbtn.removeAttribute('disabled');
    //       }
    //     });
    
    //     nextbtn.addEventListener('click', function () {
    //       if (count < rolecount - 1) {
    //         count++;
    //         playNextRole();
    //         if (count === rolecount - 1) {
    //           nextbtn.setAttribute('disabled', true);
    //         }
    //       }
    //     });
    
    //     // ... (Your existing logic)
            
    //   }
    
    // let cid = document.getElementsByTagName("textarea")[sid].id;
      
    //   document.getElementById(cid).value = nextRole.description;
      
    //   title = nextRole.title;//' Automation as a Service for Fire Detection & Protection';
    //   btn.name = title;
    //   // alert(title+' :'+document.getElementById(cid).value);
    //   // alert(title)
    //   // alert(cid);
    //   if (nextRole.instructor_content){
    //     document.getElementById(cid).value = nextRole.description +"\n"+nextRole.instructor_conten;
    //   }
    //   if (count == 0){
    
    //     if (nextRole.instructor_content){
    //     document.getElementById(cid).value = "Intro: "+ globalRoleJsonObj.intro +"\n\n"+ nextRole.description +"\n\n"+nextRole.instructor_conten;
    //     } else {
    //     document.getElementById(cid).value = "Intro: "+ globalRoleJsonObj.intro +"\n\n"+ nextRole.description;
    //     }
    //     responsiveVoice.speak(globalRoleJsonObj.intro, "UK English Male");
    //   } 
    
    
    
    
    //   if (uvid.src.includes('ES_P00')){
    
    //   } else {
    //     uvid.src = nextRole.vuri;
    //     uvid.play();
    //     document.getElementById("cmsImg").style.display = "none";   
             
    //     // alert(nextImage.vuri)
    //     // fingers = createVideo([iUrl]);
    //     // fingers.hide();	
    //     // alert(iUrl)
    //     // Add an event listener for when video metadata is loaded
    //   }
         
    //     // Add event listener to toggle between play and pause
    //     playButton.addEventListener('click', function () {
    //       // if (!isSpeaking) {
    //       //   isSpeaking = true;
    //       //   startTextToSpeech(document.getElementById(cidt).value);
    //       //   playButtont.textContent = 'Pause/Stop';
    //       // } else {
            
    //       //   stopTextToSpeech();
    //       //   isSpeaking = false;
    //       //   playButtont.textContent = 'Play Content';
    //       // }
    //     if (uvid.paused) {
    //       uvid.play();
    //       playButton.textContent = 'Pause';
    //       historyArea.value += ''+ '\n';
    //       // messageDiv.innerHTML = '';
    //     } else {
    //       uvid.pause();
    //       playButton.textContent = 'Play';
    //       // messageDiv.innerHTML = 'Video paused. Click "Play" to resume.';
    //       historyArea.value += 'Video paused. Click "Resume" to resume.'+ '\n';
    //       historyArea.scrollTop = historyArea.scrollHeigh;
    //     }
    //     });
    
    //     // updateImage(nextImage.uri);        
    //     // usrImg.src=nextImage.iuri;
    
    //     historyArea.value += nextRole.description + '\n';
    //     historyArea.scrollTop = historyArea.scrollHeigh;
    //     responsiveVoice.speak(nextRole.description, "UK English Male");
    //   //   // Example usage:
    //     const videoDurationInSeconds =nextRole.duration; // 1 minute and 3 seconds
    //     const milliseconds = durationToMilliseconds(videoDurationInSeconds);
    //     console.log(milliseconds); // Output: 63000
    //     // alert(milliseconds);
             
    //     // narrateText(nText, iUrl);
    //     // ... (Your existing logic for updating content based on the topic)
    
    //   // Call the next topic after a delay
    //   // setTimeout(function () {
    //   //   if (count < rolecount - 1) {
    //   //     count++;
    //   //     playNextRole();
    //   //     nextbtnt.removeAttribute('disabled');
    //   //   }
    //   // }, milliseconds);
    // }
    
    // var bidt;
    // var tidt;
    // var sidt;
    // var flgt = true;
    // var btnt;
    // var playButtont;
    // var prevbtnt;
    // var nextbtnt;
    // // var count = 0; // Ensure count is declared globally
    // var uvid = document.getElementById('usrVideo'); // Replace 'yourVideoId' with the actual ID of your video element
    // var milliseconds = 5000; // Adjust the delay as needed
    
    // // function playNextTopic0old(count) {
    // //   var topiccount = globalTopicJsonObj.topics.length;
    // //   var nextTopic = globalTopicJsonObj.topics[count];
    // //   alert('Count '+ count)

    // //   if (flgt) {
    // //     flgt = false;
    // //     // ... (Your existing logic for creating buttons and textareas)
    // //     ctr = ctr+1;
    // //     alert(ctr);
    // //     bidt = 'btn'+ctr.toString();
    // //     tidt = 'txt-'+ctr.toString()+bidt;
    // //     sidt = 'tae-'+ctr.toString()+bidt;
    // //     // let bid = 'btn'+ctr.toString();
    // //     alert(sidt);
    // //     btnt = document.createElement("button");
    // //     btnt.setAttribute("class", "accordion");
    // //     btnt.setAttribute("id", bidt);
    // //     btnt.setAttribute("onclick","myFunction()");
    
        
    // //     var t = document.createTextNode('SNo#'+ctr);
    // //     btnt.appendChild(t);
    // //     //para.appendChild(btn);
    // //     document.getElementById("tcon").appendChild(btnt);
      
    
    // //     var dv = document.createElement("DIV");
    // //     dv.setAttribute("class", "panel");
    // //     // dv.setAttribute("style", "display: block;");
    // //     dv.setAttribute("style", "display: block; font-size: 14px; font-family: Arial, sans-serif;");
    // //     var inf = document.createElement("TEXTAREA");
    // //     inf.setAttribute('readonly', 'readonly');
    // //     inf.setAttribute("type", "text");
    // //     inf.setAttribute("style", "color:#444;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:180px;resize:none;overflow-y:scroll;");
    // //     inf.setAttribute("id", sidt);
    // //     inf.setAttribute("onclick","myFunction()");
    // //     inf.setAttribute("class", "form-control");
    // //     dv.appendChild(inf);
    // //     document.getElementById("tcon").appendChild(dv);
    // //     var tt = document.createTextNode('controls:');
    // //     dv.appendChild(tt);
    // //     document.getElementById("tcon").appendChild(dv);
        
    // //     // Create the Play/Pause button
    // //     playButtont = document.createElement('button');
    // //     playButtont.id = sidt;//'playButton';
    // //     playButtont.textContent = 'Play Content';
    // //     dv.appendChild(playButtont);
    
    // //     prevbtnt = document.createElement('button');
    // //     prevbtnt.id = 'prevButton';
    // //     prevbtnt.textContent = 'Previous';
    // //     dv.appendChild(prevbtnt);
    
    // //     nextbtnt = document.createElement('button');
    // //     nextbtnt.id = 'nextButton';
    // //     nextbtnt.textContent = 'Next';
    // //     dv.appendChild(nextbtnt);

    // //     // responsiveVoice.speak(array[j], "UK English Male");    
    // //     const myList = document.querySelector('#tcon')
    // //     const lastListItem = myList.lastElementChild;
    // //     myList.insertBefore(lastListItem, myList.firstElementChild)
    // //     const lastListItem2 = myList.lastElementChild;
    // //     myList.insertBefore(lastListItem2, myList.firstElementChild)     
      
      
    // //       // ... (Your existing logic for appending elements to the DOM)
    
      
    // //       // ... (Your existing logic)
            
    // //   }
    
    // //   var cidt = document.getElementsByTagName("textarea")[sidt].id;
      
    // //   document.getElementById(cidt).value = nextTopic.description;
      
    // //   title = nextTopic.title;//' Automation as a Service for Fire Detection & Protection';
    // //   btnt.name = title;
    // //   // alert(title+' :'+document.getElementById(cid).value);
    // //   // alert(title)
    // //   // alert(cid);
    // //   if (nextTopic.instructor_content){
    // //     document.getElementById(cidt).value = nextTopic.description +"\n"+nextTopic.instructor_content;
    // //   }
    // //   if (count == 0){
    
    // //     if (nextTopic.instructor_content){
    // //     document.getElementById(cidt).value = "Intro: "+ globalTopicJsonObj.intro +"\n\n"+ nextTopic.description +"\n\n"+nextTopic.instructor_content;
    // //     } else {
    // //     document.getElementById(cidt).value = "Intro: "+ globalTopicJsonObj.intro +"\n\n"+ nextTopic.description;
    // //     }
    // //     responsiveVoice.speak(globalTopicJsonObj.intro, "UK English Male");
    // //   } 

    // //   if (uvid.src.includes('ES_P00')){
    
    // //   } else {
    // //     uvid.src = nextTopic.vuri;
    // //     uvid.play();
    // //     document.getElementById("cmsImg").style.display = "none";   
             
    // //     // alert(nextImage.vuri)
    // //     // fingers = createVideo([iUrl]);
    // //     // fingers.hide();	
    // //     // alert(iUrl)
    // //     // Add an event listener for when video metadata is loaded
    // //   }
         
    // //     // Add event listener to toggle between play and pause
    // //     playButtont.addEventListener('click', function () {
    // //       // if (!isSpeaking) {
    // //       //   isSpeaking = true;
    // //       //   startTextToSpeech(document.getElementById(cidt).value);
    // //       //   playButtont.textContent = 'Pause/Stop';
    // //       // } else {
            
    // //       //   stopTextToSpeech();
    // //       //   isSpeaking = false;
    // //       //   playButtont.textContent = 'Play Content';
    // //       // }
    // //       if (uvid.paused) {
    // //         uvid.play();
    // //         playButtont.textContent = 'Pause';
    // //         historyArea.value += ''+ '\n';
    // //         // messageDiv.innerHTML = '';
    // //       } else {
    // //         uvid.pause();
    // //         playButtont.textContent = 'Play';
    // //         // messageDiv.innerHTML = 'Video paused. Click "Play" to resume.';
    // //         historyArea.value += 'Video paused. Click "Resume" to resume.'+ '\n';
    // //         historyArea.scrollTop = historyArea.scrollHeight;
    // //       }
    // //     });
    
    // //     // updateImage(nextImage.uri);        
    // //     // usrImg.src=nextImage.iuri;
    
    // //     historyArea.value += nextTopic.description + '\n';
    // //     historyArea.scrollTop = historyArea.scrollHeight;
    // //     responsiveVoice.speak(nextTopic.description, "UK English Male");
    // //   / /   // Example usage:
    // //     const videoDurationInSeconds =nextTopic.duration; // 1 minute and 3 seconds
    // //     const milliseconds = durationToMilliseconds(videoDurationInSeconds);
    // //     console.log(milliseconds); // Output: 63000
    // //     // alert(milliseconds);
             
    // //     // narrateText(nText, iUrl);
    // //     // ... (Your existing logic for updating content based on the topic)
    // //     // Add event listener to toggle between play and pause
    // //     playButtont.addEventListener('click', function () {
    // //       if (uvid.paused) {
    // //         uvid.play();
    // //         playButtont.textContent = 'Pause';
    // //         // ... (Your existing logic)
    // //       } else {
    // //         uvid.pause();
    // //         playButtont.textContent = 'Play';
    // //         // ... (Your existing logic)
    // //       }
    // //     });
    
    // //     prevbtnt.addEventListener('click', function () {
    // //       if (count > 0) {
    // //         count--;
    // //         playNextTopic(count);
    // //         nextbtnt.removeAttribute('disabled');
    // //       }
    // //     });
    
    // //     nextbtnt.addEventListener('click', function () {
    // //       if (count < topiccount - 1) {
    // //         count++;
    // //         playNextTopic(count);
    // //         if (count === topiccount - 1) {
    // //           nextbtnt.setAttribute('disabled', true);
    // //         }
    // //       }
    // //     });    
    // //     // Call the next topic after a delay
    // //     setTimeout(function () {
    // //       if (count < topiccount - 1) {
    // //         count++;
    // //         playNextTopic(count);
    // //         nextbtnt.removeAttribute('disabled');
    // //       }
    // //     }, milliseconds);
    // // }
    
    // // Start the presentation
    // // playNextTopic();
    
    // var bidt ;
    // var tidt ;
    // var sidt ;
    // var flgt = true;
    // // var title; 
    // var btnt;
    // var playButtont;
    // var prevbtnt;
    // var nextbtnt;

    // function playNextTopic999(count) { 
    //   var topiccount = globalTopicJsonObj.topics.length;
    //   var nextTopic = globalTopicJsonObj.topics[+count];
    
    
    //   if (flgt) {
    //     flgt=false;
    //     ctr = ctr+1;
    //     bidt = 'btn'+ctr.toString();
    //     tidt = 'txt-'+ctr.toString()+bidt;
    //     sidt = 'tae-'+ctr.toString()+bidt;
    //     // let bid = 'btn'+ctr.toString();
    //     // alert(sid);
    //     btnt = document.createElement("button");
    //     btnt.setAttribute("class", "accordion");
    //     btnt.setAttribute("id", bidt);
    //     btnt.setAttribute("onclick","myFunction()");
    
        
    //     var t = document.createTextNode('SNo#'+ctr);
    //     btnt.appendChild(t);
    //     //para.appendChild(btn);
    //     document.getElementById("tcon").appendChild(btnt);
      
    
    //     var dv = document.createElement("DIV");
    //     dv.setAttribute("class", "panel");
    //     // dv.setAttribute("style", "display: block;");
    //     dv.setAttribute("style", "display: block; font-size: 14px; font-family: Arial, sans-serif;");
      
    
      
    
    
    //       // var inf = document.createElement("INPUT");
    //       // inf.setAttribute("type", "text");
    
    //       // inf.setAttribute("id", tid);
    
    //       // inf.setAttribute("value", 'video controls:'+nextImage.vuri);
    //       // inf.setAttribute("onclick","myFunction()");
    //       // inf.setAttribute("class", "form-control");
    //       // dv.appendChild(inf);
    //       // document.getElementById("tcon").appendChild(dv);
    
    
    
    
    //       // // Create the Play button
    //       // var playButton = document.createElement('button');
    //       // playButton.id = 'playButton'+bid;
    //       // playButton.textContent = 'Play from Start';
    //       // dv.appendChild(playButton);
    //       // document.getElementById("tcon").appendChild(dv);
    
    
    
          
    //       // // Create the Pause button
    //       // var playButton = document.createElement('button');
    //       // playButton.id = 'playButton';
    //       // playButton.textContent = 'Pause';
    //       // dv.appendChild(playButton);
    //       // document.getElementById("tcon").appendChild(dv);
    //       // // Create the Resume button
    //       // var resumeButton = document.createElement('button');
    //       // resumeButton.id = 'resumeButton';
    //       // resumeButton.textContent = 'Resume';
    //       // dv.appendChild(resumeButton);
    //       // document.getElementById("tcon").appendChild(dv);
    
      
    //   // alert(sid);
    //     var inf = document.createElement("TEXTAREA");
    //     inf.setAttribute('readonly', 'readonly');
    //     inf.setAttribute("type", "text");
    //     inf.setAttribute("style", "color:#444;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:180px;resize:none;overflow-y:scroll;");
    //     inf.setAttribute("id", sidt);
    //     inf.setAttribute("onclick","myFunction()");
    //     inf.setAttribute("class", "form-control");
    //     dv.appendChild(inf);
    //     document.getElementById("tcon").appendChild(dv);
    //     var tt = document.createTextNode('controls:');
    //     dv.appendChild(tt);
    //     document.getElementById("tcon").appendChild(dv);
    
    //   // Create the Play/Pause button
    //   playButtont = document.createElement('button');
    //   playButtont.id = 'playButton';
    //   playButtont.textContent = 'Play Content';
    //   dv.appendChild(playButtont);
    //   document.getElementById("tcon").appendChild(dv);
      
    
    //   prevbtnt = document.createElement("button");
    //   prevbtnt.id = sidt;
    //   prevbtnt.textContent = 'Previous';
    //   // prevbtn.onclick='playPreviousImage()';
    //   dv.appendChild(prevbtnt);
    //   document.getElementById("tcon").appendChild(dv);
    
    //   nextbtnt = document.createElement("button");
    //   nextbtnt.id = sidt;
    //   nextbtnt.textContent = 'Next';
    //   // nextbtn.onclick='playNextTopic()';
    //   dv.appendChild(nextbtnt);
    //   document.getElementById("tcon").appendChild(dv);  
        
    //   // responsiveVoice.speak(array[j], "UK English Male");    
    //   const myList = document.querySelector('#tcon')
    //   const lastListItem = myList.lastElementChild;
    //   myList.insertBefore(lastListItem, myList.firstElementChild)
    //   const lastListItem2 = myList.lastElementChild;
    //   myList.insertBefore(lastListItem2, myList.firstElementChild)     
    
    //   } 
    //   let cidt = document.getElementsByTagName("textarea")[sidt].id;
      
    //   document.getElementById(cidt).value = nextTopic.description;
      
    //   title = nextTopic.title;//' Automation as a Service for Fire Detection & Protection';
    //   btnt.name = title;
    //   // alert(title+' :'+document.getElementById(cid).value);
    //   // alert(title)
    //   // alert(cid);
    //   if (nextTopic.instructor_content){
    //     document.getElementById(cidt).value = nextTopic.description +"\n"+nextTopic.instructor_content;
    //   }
    //   if (count == 0){
    
    //     if (nextTopic.instructor_content){
    //     document.getElementById(cidt).value = "Intro: "+ globalTopicJsonObj.intro +"\n\n"+ nextTopic.description +"\n\n"+nextTopic.instructor_content;
    //     } else {
    //     document.getElementById(cidt).value = "Intro: "+ globalTopicJsonObj.intro +"\n\n"+ nextTopic.description;
    //     }
    //     responsiveVoice.speak(globalTopicJsonObj.intro, "UK English Male");
    //   } 
    
    
    
    
    //   if (uvid.src.includes('ES_P00')){
    
    //   } else {
    //     uvid.src = nextTopic.vuri;
    //     uvid.play();
    //     document.getElementById("cmsImg").style.display = "none";   
             
    //     // alert(nextImage.vuri)
    //     // fingers = createVideo([iUrl]);
    //     // fingers.hide();	
    //     // alert(iUrl)
    //     // Add an event listener for when video metadata is loaded
    //   }
         
    //     // Add event listener to toggle between play and pause
    //     playButtont.addEventListener('click', function () {
    //       // if (!isSpeaking) {
    //       //   isSpeaking = true;
    //       //   startTextToSpeech(document.getElementById(cidt).value);
    //       //   playButtont.textContent = 'Pause/Stop';
    //       // } else {
            
    //       //   stopTextToSpeech();
    //       //   isSpeaking = false;
    //       //   playButtont.textContent = 'Play Content';
    //       // }
    //     if (uvid.paused) {
    //       uvid.play();
    //       playButtont.textContent = 'Pause';
    //       historyArea.value += ''+ '\n';
    //       // messageDiv.innerHTML = '';
    //     } else {
    //       uvid.pause();
    //       playButtont.textContent = 'Play';
    //       // messageDiv.innerHTML = 'Video paused. Click "Play" to resume.';
    //       historyArea.value += 'Video paused. Click "Resume" to resume.'+ '\n';
    //       historyArea.scrollTop = historyArea.scrollHeight;
    //     }
    //     });
    
    //     // updateImage(nextImage.uri);        
    //     // usrImg.src=nextImage.iuri;
    
    //     historyArea.value += nextTopic.description + '\n';
    //     historyArea.scrollTop = historyArea.scrollHeight;
    
    //   //   // Example usage:
    //     const videoDurationInSeconds =nextTopic.duration; // 1 minute and 3 seconds
    //     const milliseconds = durationToMilliseconds(videoDurationInSeconds);
    //     console.log(milliseconds); // Output: 63000
    //     // alert(milliseconds);
             
    //     // narrateText(nText, iUrl);
        
    //   if (count < topiccount) {    
    //     prevbtnt.addEventListener('click', () => {
    //     if (count > 0) {
    //       count--;
    //       // alert(count+' '+slidecount)
    //       playNextTopic(count);
    //       nextbtnt.removeAttribute('disabled'); // Re-enable nextbtn when moving backward
    //     }
    //     });
        
    //     nextbtnt.addEventListener('click', () => {
    //     if (currentSlide < topiccount - 1) {
    //       count++;
    //       // alert(count+' '+slidecount)
    //       stopTextToSpeech()
    //       playNextTopic(count);
    //       if (count === topiccount - 1) {
    //       nextbtnt.setAttribute('disabled', true); // Disable nextbtn when reaching the last slide
    //       }            
    //     }
    //     });
    //   }
    //     // if(count < globalTopicJsonObj.topics.length){
    //     //   prevbtn.addEventListener('click', function () {
          
    //     //     // if(count < globalTopicJsonObj.topics.length){
    
    //     //     // milliseconds = 0;
    //     //     // if (count < slidecount - 1) {
          
    //     //     // }
    //     //     if ( count > 0) {
    //     //       count--;
    //     //       // showSlide(currentSlide - 1);
    //     //       alert(count+' '+slidecount)
    //     //       playNextTopic(count);
    //     //     }
    //     //   });  
    //     //   nextbtn.addEventListener('click', function () {
    //     //     if (count < slidecount - 1) {
          
    //     //       alert(count+' '+slidecount)
    //     //       playNextTopic(count);
    //     //       if (count === slidecount - 1) {
    //     //         nextbtn.setAttribute('disabled', true); // Disable nextbtn when reaching the last slide
    //     //       }
    //     //     }
    //     //   });   
    
    //     //   // setTimeout('playNextTopic('+count+')', milliseconds);
    //     // } else {
    //     //   // document.getElementById("toggle").click();
    //     //   responsiveVoice.speak(globalContentJsonObj.outro, "UK English Male");
    //     //   // return;
    //     // }
    //   }

    function durationToMilliseconds(durationInSeconds) {
      // Split the duration into minutes and seconds
      const minutes = Math.floor(durationInSeconds);
      const seconds = (durationInSeconds - minutes) * 100;
  
      // Convert minutes and seconds to milliseconds and sum them
      const durationInMilliseconds = (minutes * 60 * 1000) + (seconds * 1000);
  
      return durationInMilliseconds;
  }
  

  // Event triggered when speaking starts
  responsiveVoice.OnStart = function () {
    isSpeaking = true;
  };
  
  // Event triggered when speaking ends
  responsiveVoice.OnEnd = function () {
    isSpeaking = false;
  };
  
  function startTextToSpeech(text) {
    responsiveVoice.speak(text, "UK English Male");
  }
  
  function stopTextToSpeech() {
    responsiveVoice.cancel();
  }
  
  function resumeTextToSpeech(text) {
    if (!isSpeaking) {
      startTextToSpeech(text,"UK English Male");
    }
  }
  
  // Example usage
  // startTextToSpeech("This is a sample text.");
  
  // To stop
  // stopTextToSpeech();
  
  // To resume
  // resumeTextToSpeech("Resuming the sample text.");
  
    function playImageList() {      
      playNextImage(0);   // playNextImage(0);
    }
    function playTopicList() {      
      playNextTopic(0);
    }
    function playBotList() {      
      showBotDetails(currentBotIndex);
      // playNextBot(2);
    }
    function playRoleList() {      
      playNextRole(0)
    }
    function playNextBot(count) { 
      var nextBot = globalContentJsonObj.bots[+count];

      var vdourl = "";
      //var vid = document.getElementById("myVideo");
      var jid = globalContentJsonObj.id;
      if(nextBot.description != ""){
      ctr = ctr+1;
  
      let bid = 'btn'+ctr.toString();
      if (ctr >= 1 ) {
        // let bid = 'btn'+ctr.toString();
        // alert(ctr);
        var btn = document.createElement("button");
        btn.setAttribute("class", "accordion");
        btn.setAttribute("id", bid);
        btn.setAttribute("onclick","myFunction()");
  
        var title = nextBot.title;//' Automation as a Service for Fire Detection & Protection';
  
        
        var t = document.createTextNode('SNo#'+ctr+' '+title);
        btn.appendChild(t);
        //para.appendChild(btn);
        document.getElementById("tcon").appendChild(btn);
      }     
  
      var dv = document.createElement("DIV");
      dv.setAttribute("class", "panel");
      // dv.setAttribute("style", "display: block;");
      dv.setAttribute("style", "display: block; font-size: 14px; font-family: Arial, sans-serif;");
      
  
      
      let tid = 'txt-'+ctr.toString()+bid;
  
      // var inf = document.createElement("INPUT");
      // inf.setAttribute("type", "text");
  
      // inf.setAttribute("id", tid);
  
      // inf.setAttribute("value", 'video controls:'+nextImage.vuri);
      // inf.setAttribute("onclick","myFunction()");
      // inf.setAttribute("class", "form-control");
      // dv.appendChild(inf);
      // document.getElementById("tcon").appendChild(dv);
  
  
  
  
              // Create the Play button
              // var playButton = document.createElement('button');
              // playButton.id = 'playButton'+bid;
              // playButton.textContent = 'Play from Start';
              // dv.appendChild(playButton);
              // document.getElementById("tcon").appendChild(dv);
  
              // Create the Play/Pause button
              // var playplayButton = document.createElement('button');
              // playplayButton.id = 'playplayButton';
              // playplayButton.textContent = 'Pause';
              // dv.appendChild(playplayButton);
              // document.getElementById("tcon").appendChild(dv);
              
              var tt = document.createTextNode('video controls:');
              dv.appendChild(tt);
              document.getElementById("tcon").appendChild(dv);
  
              
              // // Create the Pause button
              // var playButton = document.createElement('button');
              // playButton.id = 'playButton';
              // playButton.textContent = 'Pause';
              // dv.appendChild(playButton);
              // document.getElementById("tcon").appendChild(dv);
              // // Create the Resume button
              // var resumeButton = document.createElement('button');
              // resumeButton.id = 'resumeButton';
              // resumeButton.textContent = 'Resume';
              // dv.appendChild(resumeButton);
              // document.getElementById("tcon").appendChild(dv);
  
      let sid = 'tae-'+ctr.toString()+bid;
      // alert(sid);
      var inf = document.createElement("TEXTAREA");
      inf.setAttribute('readonly', 'readonly');
      inf.setAttribute("type", "text");
      inf.setAttribute("style", "color:#444;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:180px;resize:none;overflow-y:scroll;");
      inf.setAttribute("id", sid);
      inf.setAttribute("onclick","myFunction()");
      inf.setAttribute("class", "form-control");
      dv.appendChild(inf);
      document.getElementById("tcon").appendChild(dv);
  
      let cid = document.getElementsByTagName("textarea")[sid].id;
      // alert(cid);
      document.getElementById(cid).value = nextBot.description;
      if (nextBot.intro){
        document.getElementById(cid).value = nextBot.intro +"\n"+nextBot.description;
      }
      if (count == 0){
  
        if (nextBot.instructor_content){
          document.getElementById(cid).value = "Intro: "+ globalContentJsonObj.intro +"\n\n"+ nextBot.description +"\n\n"+nextBot.instructor_content;
        } else {
          document.getElementById(cid).value = "Intro: "+ globalContentJsonObj.intro +"\n\n"+ nextBot.description;
        }
        responsiveVoice.speak(globalContentJsonObj.intro, "UK English Male");
      } 
      const textContainer = document.getElementById(cid);
      const text = nextBot.description; //array[0];
      textContainer.style.whiteSpace = "pre-line";
      textContainer.innerText = text;
  
      // responsiveVoice.speak(array[j], "UK English Male");    
      const myList = document.querySelector('#tcon')
      const lastListItem = myList.lastElementChild;
      myList.insertBefore(lastListItem, myList.firstElementChild)
      const lastListItem2 = myList.lastElementChild;
      myList.insertBefore(lastListItem2, myList.firstElementChild)     
  
    }
    if (uvid.src.includes('ES_P00')){
  
    } else {
        uvid.src = nextBot.vuri;
        uvid.play();
        document.getElementById("cmsImg").style.display = "block";   
    }
        
  
  
        // playButton.addEventListener('click', function () {
        //   // alert(globalContentJsonObj.images[0].vuri)
        //   uvid.src = globalContentJsonObj.images[1].vuri
        //   uvid.play();
  
        // });
        // playButton.addEventListener('click', function () {
        //   uvid.pause();
        //   // messageDiv.innerHTML = 'Video paused. Click "Resume" to continue.';
        // });
  
        // resumeButton.addEventListener('click', function () {
        //   uvid.play();
        //   // messageDiv.innerHTML = '';
        // });    
        // Add event listener to toggle between play and pause
        // playplayButton.addEventListener('click', function () {
        //   if (uvid.paused) {
        //       uvid.play();
        //       playplayButton.textContent = 'Pause';
        //       historyArea.value += ''+ '\n';
        //       // messageDiv.innerHTML = '';
        //   } else {
        //       uvid.pause();
        //       playplayButton.textContent = 'Resume';
        //       // messageDiv.innerHTML = 'Video paused. Click "Play" to resume.';
        //       historyArea.value += 'Video paused. Click "Resume" to resume.'+ '\n';
        //       historyArea.scrollTop = historyArea.scrollHeight;
        //   }
        // });
        // updateImage(nextImage.uri);
        
        if (uvid.src.includes('alice.idle.')){
          responsiveVoice.speak(nextBot.description, "UK English Female");
        }
        if (uvid.src.includes('esd.idle.')){
          responsiveVoice.speak(nextBot.description, "UK English Male");
        }
        if (uvid.src.includes('ES_P00')){
          responsiveVoice.speak(nextBot.description, "UK English Female");
        } 
  
        if (nextBot.instructor_content){
          responsiveVoice.speak(nextBot.instructor_content, "UK English Male");
        }
  
  
  
        historyArea.value += nextBot.description + '\n';
        historyArea.scrollTop = historyArea.scrollHeight;
  
  
  
  
      
      // // var duration = nextImage.duration
      // var duration = nextImage.duration; // 1 minute and 3 seconds
      // alert(duration)
      // var milliseconds = durationToMilliseconds(duration);
      // console.log(milliseconds); // Output: 60030
      //   // Example usage:
        const videoDurationInSeconds =nextBot.duration; // 1 minute and 3 seconds
        const milliseconds = durationToMilliseconds(videoDurationInSeconds);
        console.log(milliseconds); // Output: 63000
        // alert(duration)
                   
        // narrateText(nText, iUrl);
        count++;
        
        if(count < globalContentJsonObj.bots.length){
   
          setTimeout('playNextBot('+count+')', milliseconds);
        } else {
          // document.getElementById("toggle").click();
          responsiveVoice.speak(globalContentJsonObj.outro, "UK English Male");
          return;
        }
    } 

    function startmic() {
      start_button(event);
    }
    function aloadJson(jsonUri, response) {
      //alert('jsonUri - ', jsonUri);
      console.log('Locating content json: '+jsonUri);
      var axhr = new XMLHttpRequest();
      axhr.open("POST", jsonUri, true);
      axhr.withCredentials = true;
      axhr.setRequestHeader('Content-Type', 'application/json');
      axhr.onload = function() {
        if (axhr.status === 200) {
          //alert(JSON.stringify(response));
          //alert('GET JSON: ', axhr.responseText);
          globalContentJsonObj = JSON.parse(axhr.responseText);
          //alert('in NewloadJson '+ JSON.stringify(globalContentJsonObj));
          console.log('JSON received: '+JSON.stringify(globalContentJsonObj));
          //console.log(globalContentJsonObj.images.length + ' images in the json file.');
          var imglen = globalContentJsonObj.images.length;
          //alert(imglen);
        if(globalContentJsonObj.images && (globalContentJsonObj.images.length > 0))
          playImageList(); 
        }
        else {
            //alert('Request failed.  Returned status of ' + axhr.status);
            document.getElementById('statusLine').value = "Return status = " + axhr.status;
        }
      }
      axhr.send();
    }
    function cloadJson(jsonUri) {
          console.log('Locating content json: '+jsonUri);

        $.getJSON(jsonUri, function(jsonObj) {
          globalContentJsonObj = jsonObj;

          console.log('JSON received: '+JSON.stringify(globalContentJsonObj));
          console.log(globalContentJsonObj.images.length + ' images in the json file.');
          //var imglen = globalContentJsonObj.images.length;
          if(globalContentJsonObj.images && (globalContentJsonObj.images.length > 0)) {
                  // // Extract the "images" array from the JSON
                  // const imagesArray = globalContentJsonObj.images;

                  // // Create an empty array to store the converted data
                  // const storedValues = [];

                  // // Loop through the "images" array and convert each object
                  // for (const image of imagesArray) {
                  //     const item = {
                  //         thumbnail: image.thumbnail,
                  //         uri: image.uri,
                  //         title: image.title,
                  //         description: image.description,
                  //     };
                  //     storedValues.push(item);
                  // }

                  // // Now, the "storedValues" array contains the converted data
                  // console.log(storedValues);  
            cplayImageList(); 
          }
          
      });
    }
    function playNextVideo(currentIndex) {
      var videos = globalContentJsonObj.images; // Assuming you have an array of video objects
      // var  = 0;
      
      if (currentIndex < videos.length) {

        var video = videos[currentIndex];
        uvid.src = video.vuri;
        ctr = ctr+1;
        uvid.play(); // Start playing the video
        // fill('black');
        // textSize(25);
        // stroke('');
        // strokeWeight(2);
        // clear(); 


    

        if (ctr == 1 ) {
          let bid = 'btn'+ctr.toString();
          // alert(ctr);
          var btn = document.createElement("button");
          btn.setAttribute("class", "accordion");
          btn.setAttribute("id", bid);
          btn.setAttribute("onclick","myFunction()");

          var t = document.createTextNode("Introduction to Eureka and ESCApe!!");
          btn.appendChild(t);
          //para.appendChild(btn);
          document.getElementById("tcon").appendChild(btn);
        }     

        var dv = document.createElement("DIV");
        dv.setAttribute("class", "panel");
        // dv.setAttribute("style", "display: block;");
        dv.setAttribute("style", "display: block; font-size: 14px; font-family: Arial, sans-serif;");
        
        var tt = document.createTextNode('Slide#'+ctr);
        dv.appendChild(tt);
        document.getElementById("tcon").appendChild(dv);
        
        let tid = 'txt-'+ctr.toString()+bid;

        var inf = document.createElement("INPUT");
        inf.setAttribute("type", "text");

        inf.setAttribute("id", tid);
        // if (charlen > 121 ) {
        //   inf.setAttribute("rows", "4");
        //   document.getElementById(tid).style.height = "200px";
        // }
        inf.setAttribute("value", 'video controls:'+uvid.src);
        inf.setAttribute("onclick","myFunction()");
        inf.setAttribute("class", "form-control");
        dv.appendChild(inf);
        document.getElementById("tcon").appendChild(dv);



        let sid = 'tae-'+ctr.toString()+bid;
        // alert(sid);
        var inf = document.createElement("TEXTAREA");
        inf.setAttribute('readonly', 'readonly');
        inf.setAttribute("type", "text");
        inf.setAttribute("style", "color:#444;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:160px;resize:none;overflow-y:scroll;");
        inf.setAttribute("id", sid);
        inf.setAttribute("onclick","myFunction()");
        inf.setAttribute("class", "form-control");
        dv.appendChild(inf);
        document.getElementById("tcon").appendChild(dv);

        let cid = document.getElementsByTagName("textarea")[sid].id;
        // alert(cid);
        document.getElementById(cid).value = video.description;;

        const textContainer = document.getElementById(cid);
        const text = video.description; //array[0];
        textContainer.style.whiteSpace = "pre-line";
        textContainer.innerText = text;

        // responsiveVoice.speak(array[j], "UK English Male");           


  
        // historyArea.value += video.description + '\n';
        // historyArea.scrollTop = historyArea.scrollHeight;
        // text(Cd, mouseX, mouseY, windowWidth - 380, 480);
        // text(video.description, 40, 90, windowWidth - 400, windowHeight); 

        uvid.addEventListener('loadedmetadata', function() {
          // Get the video duration (tenure) in seconds
          var duration = uvid.duration;
    
          // Calculate the time (in seconds) at which you want to end the video, e.g., at 10 seconds
          var endTime = 10;
    
          // Set a timeout to end the video at the specified time
          setTimeout(function() {
            uvid.pause(); // Pause the video
            currentIndex++; // Move to the next video
            playNextVideo(); // Play the next video
          }, (duration) * 1000); // Convert seconds to milliseconds
        });
        
      } else {
        // All videos have been played
        // document.getElementById("toggle").click();
        // uvid.src = "/cognitive-automation/public/videos/esd0008.mov";
        uvid.play();
        return;
      }
    }
    
    // Start playing the videos from the first one
    // playNextVideo();

    function playVideoList() {
      playNextVideo();
    }

    function loadJson(jsonUri) {
      flgt = false;
      fetch(jsonUri)
      .then(response => response.json())
      .then(data => {
          globalContentJsonObj = data;
          globalRoleJsonObj = data;
          if(globalRoleJsonObj.roles && (globalRoleJsonObj.roles.length > 0))
          playRoleList(); 
          // if(globalContentJsonObj.bots && (globalContentJsonObj.bots.length > 0))
          // playBotList(); 
          // document.getElementById("jsonOutput").textContent = JSON.stringify(data, null, 2);
          if(globalContentJsonObj.images && (globalContentJsonObj.images.length > 0))
          playImageList(); 
      })
      .catch(error => {
          console.error("Error loading JSON:", error);
      });

    }

    const personas = [
      {
        name: 'Alice',
        greeting: 'Yeah, WHats Up!!',
        skills: ['programming', 'design'],
        display_image: 'alice.jpg',
        intro_video: 'alice_intro.mp4',
        languages_spoken: ['English', 'Spanish']
      },
      {
        name: 'Margarita',
        greeting: 'I am listening',
        skills: ['marketing', 'sales'],
        display_image: 'margarita.jpg',
        intro_video: 'bob_intro.mp4',
        languages_spoken: ['English', 'French']
      },
      {
        name: 'SPN',
        greeting: 'Hey There, nice to hear your voice!!',
        skills: ['marketing', 'sales'],
        display_image: 'margarita.jpg',
        intro_video: 'bob_intro.mp4',
        languages_spoken: ['English', 'French']
      },
      // Add more personas as needed
    ];


var langs =
[['Afrikaans',       ['af-ZA']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Deutsch',         ['de-DE']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Español',         ['es-AR', 'Argentina'],
                     ['es-BO', 'Bolivia'],
                     ['es-CL', 'Chile'],
                     ['es-CO', 'Colombia'],
                     ['es-CR', 'Costa Rica'],
                     ['es-EC', 'Ecuador'],
                     ['es-SV', 'El Salvador'],
                     ['es-ES', 'España'],
                     ['es-US', 'Estados Unidos'],
                     ['es-GT', 'Guatemala'],
                     ['es-HN', 'Honduras'],
                     ['es-MX', 'México'],
                     ['es-NI', 'Nicaragua'],
                     ['es-PA', 'Panamá'],
                     ['es-PY', 'Paraguay'],
                     ['es-PE', 'Perú'],
                     ['es-PR', 'Puerto Rico'],
                     ['es-DO', 'República Dominicana'],
                     ['es-UY', 'Uruguay'],
                     ['es-VE', 'Venezuela']],
 ['Euskara',         ['eu-ES']],
 ['Français',        ['fr-FR']],
 ['Galego',          ['gl-ES']],
 ['Hrvatski',        ['hr_HR']],
 ['IsiZulu',         ['zu-ZA']],
 ['Íslenska',        ['is-IS']],
 ['Italiano',        ['it-IT', 'Italia'],
                     ['it-CH', 'Svizzera']],
 ['Magyar',          ['hu-HU']],
 ['Nederlands',      ['nl-NL']],
 ['Norsk bokmål',    ['nb-NO']],
 ['Polski',          ['pl-PL']],
 ['Português',       ['pt-BR', 'Brasil'],
                     ['pt-PT', 'Portugal']],
 ['Română',          ['ro-RO']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Türkçe',          ['tr-TR']],
 ['български',       ['bg-BG']],
 ['Pусский',         ['ru-RU']],
 ['Српски',          ['sr-RS']],
 ['한국어',            ['ko-KR']],
 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                     ['cmn-Hans-HK', '普通话 (香港)'],
                     ['cmn-Hant-TW', '中文 (台灣)'],
                     ['yue-Hant-HK', '粵語 (香港)']],
 ['日本語',           ['ja-JP']],
 ['Lingua latīna',   ['la']]];
for (var i = 0; i < langs.length; i++) {
  select_language.options[i] = new Option(langs[i][0], i);
}
select_language.selectedIndex = 6;
updateCountry();
select_dialect.selectedIndex = 6;
showInfo('info_start');
function updateCountry() {
  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
    select_dialect.remove(i);
  }
  var list = langs[select_language.selectedIndex];
  for (var i = 1; i < list.length; i++) {
    select_dialect.options.add(new Option(list[i][1], list[i][0]));
  }
  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}
var create_email = false;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  start_button.style.display = 'inline-block';
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = function() {
    recognizing = true;
    showInfo('info_speak_now');
    start_img.src = 'mic-animate.gif';
  };
  recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
      start_img.src = 'mic.gif';
      showInfo('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      start_img.src = 'mic.gif';
      showInfo('info_no_microphone');
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        showInfo('info_blocked');
      } else {
        showInfo('info_denied');
      }
      ignore_onend = true;
    }
  };
  recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    start_img.src = 'mic.gif';
    if (!final_transcript) {
      showInfo('info_start');
      return;
    }
    showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
    if (final_transcript) {
      showInfo('info_start');
      var inputText = final_transcript;
      final_transcript = '';
      final_span.innerHTML = '';
      interim_span.innerHTML = '';
      chatInput.value = inputText;
      send_txt("chatInput");
    }
    if (create_email) {
      create_email = false;
      createEmail();
    }
  };
//   recognition.onresult = function(event) {
//     var interim_transcript = '';
//     for (var i = event.resultIndex; i < event.results.length; ++i) {
//       if (event.results[i].isFinal) {
//         final_transcript += event.results[i][0].transcript;
//       } else {
//         interim_transcript += event.results[i][0].transcript;
//       }
//     }
//     final_transcript = capitalize(final_transcript);
//     final_span.innerHTML = linebreak(final_transcript);
//     interim_span.innerHTML = linebreak(interim_transcript);
//     if (final_transcript || interim_transcript) {
//       //showButtons('inline-block');
//     }
//   };
// }

recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);    
    
    if (final_transcript == 'Alice'|| final_transcript == 'alice' || interim_transcript == 'Alice') {
        wakeWord = true;
          if (wakeWord) {
            uvid.src="./public/alice.mp4";
            persona = "ALICE";
            recognition.stop();
            responsiveVoice.speak("Hey, I am listening. ");
            
            historyArea.value += 'Hey, I am listening. ' + '\n';
            historyArea.scrollTop = historyArea.scrollHeight;    
            final_transcript = '';      
          } 
          setTimeout(function() {recognition.start()}, 5000);
            //showButtons('inline-block');
    }
    if (final_transcript == 'Margarita'|| final_transcript == 'Margaritha' || interim_transcript == 'Margarita') {
        wakeWord = true;
          if (wakeWord) {
            uvid.src="./public/alice.mp4";
            persona = "MARGARITA";
            recognition.stop();
            responsiveVoice.speak("Hey, I am listening. ");
            
            historyArea.value += 'Hey, I am listening. ' + '\n';
            historyArea.scrollTop = historyArea.scrollHeight;    
            final_transcript = '';      
          } 
          setTimeout(function() {recognition.start()}, 5000);
            //showButtons('inline-block');
    }
    if (final_transcript == 'Brian'|| final_transcript == 'Bryan' || interim_transcript == 'Brian') {
        wakeWord = true;
          if (wakeWord) {
            uvid.src="./public/brian.mp4";
            persona = "BRIAN";
            recognition.stop();
            responsiveVoice.speak("Hello There, Shoud I start the SOD meeting?", "UK English Male");
            
            historyArea.value += 'Hello There, Shoud I get started with the SOD meeting?' + '\n';
            historyArea.scrollTop = historyArea.scrollHeight;    
            final_transcript = '';      
          } 
          setTimeout(function() {recognition.start()}, 5000);
            //showButtons('inline-block');
    }
    if (final_transcript == 'SPN'|| final_transcript == 'SRI' || interim_transcript == 'SPN'|| interim_transcript == 'SRI') {
        wakeWord = true;
          if (wakeWord) {
            uvid.src="./public/videos/spn.idle.mov";
            persona = "SPN";
            recognition.stop();
            responsiveVoice.speak("Hey There, Been a Long time?", "UK English Male");
            
            historyArea.value += 'Hey There, Been a Long time?' + '\n';
            historyArea.scrollTop = historyArea.scrollHeight;    
            final_transcript = '';      
          } 
          setTimeout(function() {recognition.start()}, 5000);
            //showButtons('inline-block');
    }

    // if (recognizing && wakeWord == true) {
      if (final_transcript.length >= 2){
        recognition.stop();
        chatInput.value = final_transcript;
        var inputText = final_transcript;
        var sb = final_transcript;
        final_transcript = '';  
        recognizing = false;
        historyArea.value += 'me>> '+ sb + '\n';
        historyArea.scrollTop = historyArea.scrollHeight;
        final_span.innerHTML = '';
        interim_span.innerHTML = '';
        chatInput.value = inputText;
        send_txt("chatInput");
        sendConverse(sb);

      }
    // }
  };
}



function wakeWordF(event) {
  
  final_transcript = '';
  recognition.lang = select_dialect.value;
  if (!recognizing && wakeWord == false) {
    recognition.start();
    wakeWord == true;
  }
  ignore_onend = false;
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
  //start_img.src = 'mic-slash.gif';
  showInfo('info_allow');
  showButtons('none');
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}
var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}
var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}
function createEmail() {
  var n = final_transcript.indexOf('\n');
  if (n < 0 || n >= 80) {
    n = 40 + final_transcript.substring(40).indexOf(' ');
  }
  var subject = encodeURI(final_transcript.substring(0, n));
  var body = encodeURI(final_transcript.substring(n + 1));
  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
}
function sendButton() {

  //send_button.style.display = 'none';
  var sb = chatInput.value;
  // alert(sb)
  historyArea.value += 'me>> '+ sb + '\n';
  historyArea.scrollTop = historyArea.scrollHeight;
  chatInput.value = '';
  // siteControls(sb);
  sendConverse(sb);

  //kathaConverse(sb);
}
function copyButton() {
  if (recognizing) {
    recognizing = false;
    recognition.stop();
  }
  copy_button.style.display = 'none';
  copy_info.style.display = 'inline-block';
  showInfo('');
}
function emailButton() {
  if (recognizing) {
    create_email = true;
    recognizing = false;
    recognition.stop();
  } else {
    createEmail();
  }
  email_button.style.display = 'none';
  email_info.style.display = 'inline-block';
  showInfo('');
}
function startButton(event) {
  
  if (recognizing) {
    recognition.stop();
    showButtons('inline-block');
    return;
  }
  final_transcript = '';
  recognition.lang = select_dialect.value;
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
  start_img.src = 'mic-slash.gif';
  showInfo('info_allow');
  showButtons('none');
  start_timestamp = event.timeStamp;

}
function showInfo(s) {
  if (s) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'inline' : 'none';
      }
    }
    info.style.visibility = 'visible';
  } else {
    info.style.visibility = 'hidden';
  }
}
var current_style;
function showButtons(style) {
  if (style == current_style) {
    return;
  }
  current_style = style;
  //send_button.style.display = style;
  //copy_button.style.display = style; 
  //email_button.style.display = style;
 // copy_info.style.display = 'none';
 // email_info.style.display = 'none';
}
