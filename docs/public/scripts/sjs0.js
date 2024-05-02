function sendButton() {
    //send_button.style.display = 'none';
    var sb = chatInput.value;
    historyArea.value += 'me>> '+ sb + '\n';
    historyArea.scrollTop = historyArea.scrollHeight;
    chatInput.value = '';
    // siteControls(sb);
    sendConverse(sb);
    //kathaConverse(sb);
  }
  dFlag = false;
  var Shp = '';
  var iUrl = '';
  var formFlg1 = false;
  var formURL = "";
  var ncnt = 0;
  var html='';
  var ot = "";
  var ctr = 0;
  var bid = '';
  var userMessage = '';
  var baseUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';   
  const apiKey = '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'; 
  var i=0;
  var j, x = "";
  var mtg = false;
  var charton = false;
  var timeoutId = '';
  const timeoutIds = [];
  const synth = window.speechSynthesis; // Initialize the synth object
  let speakWithBufferInstance = null;
  var meetingsData;

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
        meetingsData = globalContentJsonObj.images;
        // alert(JSON.stringify(meetingsData));
        const meetingID = inputText;
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

    //   siteControls(inputText);



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

      if (inputText.toUpperCase().trim() == "QRCODE") {
        inputText = "Steps to scan the QR Code displayed using a mobile device"
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
      if (inputText.toUpperCase().trim() == "CHART") {
        document.getElementById("toggle").click();
        cmsImg.src=""; 
        document.getElementById("usrVideo").style.display = "none";
        document.getElementById("panel").style.display = "none";
        // recordBtn.click();
        inputText = "Please Explain the Incident details in the displayed Bar Chart ";
        return;
      }
      if (inputText.toUpperCase().trim() == "CANVAS") {
        Shp = "onload"
        document.getElementById("toggle").click();
        return;
      }
      if (inputText.toUpperCase().trim() == "USE CASES") {
        Shp = "usecase"
        document.getElementById("toggle").click();
        setTimeout('cloadJson("' + BASE_CMS_URL + '/content/json/aiusecases.json")', 100);

        return;
      }
      if (inputText.toUpperCase().trim() == "EVENT" || inputText.toUpperCase().trim() == "JOIN EVENT" || inputText.toUpperCase().trim() == "JOIN MEETING") {
        Shp = "event"
        // document.getElementById("toggle").click();
        uvid.style.display = "block"; 
        uvid.src = "./public/videos/alice.idle.mov"
        usrImg.src="";

       loadJson(BASE_CMS_URL + '/content/json/events.json');

       return;
      }
      if (inputText.toUpperCase().trim() == "INTRO") {
        uvid.style.display = "block"; 
        uvid.src = "./public/videos/spn.idle.mov"
        usrImg.src="";
        loadJson(BASE_CMS_URL + '/content/json/abc.json');
        return;
      }
      if (inputText.toUpperCase().trim() == "AAAS") {
        uvid.style.display = "block"; 
        uvid.src = "./public/videos/spn.idle.mov"
        usrImg.src="";
        loadJson(BASE_CMS_URL + '/content/json/aaas.json');
        return;
      }
      if (inputText.toUpperCase().trim() == "CWB") {
        uvid.style.display = "block"; 
        uvid.src = "./public/videos/spn.idle.mov"
        usrImg.src="";
        loadJson(BASE_CMS_URL + '/content/json/cwb.json');
        return;
      }
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
      if (inputText.toUpperCase() == "SAVE") {

        Shp = 'save'
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

        alert(arr);
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



      // var url = baseUrl+ "/process-message"; //"converse";
      
      // uvid.src="./public/alice.mp4";
      // waitImg.src="https://responsivevoice.org/wp-content/uploads/2020/01/parrot-flight.png";
      var fms = false;
      // Replace with your OpenAI API key
      // const apiKey = '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'; 
      const chatHistory = document.getElementById('chat-history');
      var url = baseUrl+ "/process-message"; //"converse";
      // baseUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';      
      userMessage = inputText;
      console.log('prompt>>'+userMessage)

      fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ prompt: userMessage,  max_tokens: 4000 }),
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
          // waitImg.src="";
          let array2 = response.choices[0].text;
          const searchValue = 3;
          const index = array2.indexOf('Article_id');
          if (index !== -1) {
            const foundValue = array2[index];
            // alert(`Element found at index ${index}: ${foundValue}`);
          } else {
            // alert(`Element not found in the array.`);
            console.log(`Element not found in the array. ${index}`);
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
            if (array.length > 0) {
              for (j in array) {
                let charlen = array[j].length;
                let tid = 'txt-'+j.toString()+bid;
                // var inf = document.createElement("INPUT");
                // inf.setAttribute("type", "text");
                // inf.style.width = "100%";
                // inf.style.border = "1px solid #ccc"; // Add a border style
                // inf.setAttribute("id", tid);
                // // if (charlen > 121 ) {
                // //   inf.setAttribute("cols", "4");
                // //   document.getElementById(tid).style.height = "200px";
                // // }
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
              // Create a checkbox
              var checkbox = document.createElement("input");
              checkbox.setAttribute("type", "checkbox");
              checkbox.id = "myCheckbox"+cid;
              dv.appendChild(checkbox);
              document.getElementById("tcon").appendChild(dv);

                // Add event listener to detect checkbox state
                document.getElementById("myCheckbox"+cid).addEventListener("change", function () {
                  if (document.getElementById("myCheckbox"+cid).checked) {
                    alert("Checkbox is checked");
                    // Perform actions when checkbox is checked
                  } else {
                    alert("Checkbox is unchecked");
                    // Perform actions when checkbox is unchecked
                  }
                });
              // responsiveVoice.speak(text, "UK English Male");
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
          // chatHistory.innerHTML += `<p>Error: ${botResponse}</p>`;
      });
      //     const botResponse = JSON.stringify(response);
      //     alert(botResponse);
      //     // const lines = botResponse.split('\n').filter(line => line.trim() !== '');

      //     // const text = lines;
      //     // textContainer.style.whiteSpace = "pre-line";
      //     // textContainer.innerText = text;

      //     historyArea.value += botResponse + '\n';
      //     historyArea.scrollTop = historyArea.scrollHeight;
      //     // uvid.src="./public/alice.mp4";

      //     // responsiveVoice.speak(inputText,"UK English Female");  

          
      //     // waitImg.src="";
      //     // let array = response.openaiResponseText.split("\n");
      //     array = response.choices[0].text.replace(/\\n/g, '\n').replace(/\\/g, '').replace(/^\n\n/, '');

      //       ctr = ctr+1;
      //       let bid = 'btn'+ctr.toString();
      //       // alert(ctr);
      //       var btn = document.createElement("button");
      //       btn.setAttribute("class", "accordion");
      //       btn.setAttribute("id", bid);
      //       btn.setAttribute("onclick","myFunction()");

      //       var t = document.createTextNode(inputText);
      //       btn.appendChild(t);
      //       //para.appendChild(btn);
      //       document.getElementById("tcon").appendChild(btn);
            
      //       var dv = document.createElement("DIV");
      //       dv.setAttribute("class", "panel");
      //       dv.setAttribute("style", "display: block;");
            
      //       var tt = document.createTextNode("eXS Response");
      //       dv.appendChild(tt);
      //       document.getElementById("tcon").appendChild(dv);
      //       if (array.length > 1) {
      //         for (j in array) {
      //           let charlen = array[j].length;

      //           let tid = 'txt-'+j.toString()+bid;

      //           var inf = document.createElement("INPUT");
      //           inf.setAttribute("type", "text");

      //           inf.setAttribute("id", tid);
      //           // if (charlen > 121 ) {
      //           //   inf.setAttribute("rows", "4");
      //           //   document.getElementById(tid).style.height = "200px";
      //           // }
      //           inf.setAttribute("value", array[j]);
      //           inf.setAttribute("onclick","myFunction()");
      //           inf.setAttribute("class", "form-control");
      //           dv.appendChild(inf);
      //           document.getElementById("tcon").appendChild(dv);

      //           responsiveVoice.speak(array[j], "UK English Male"); 


      //           // prs_brian.idle.mp4 prs_daryll.idle.mp4 prs_jason.idle.mp4 prs_sarah.idle.mp4
                               
      //         }
      //       } else {
      //         let sid = 'tae-'+ctr.toString()+bid;
      //         // alert(sid);
      //         var inf = document.createElement("TEXTAREA");
      //         inf.setAttribute("type", "text");
      //         inf.setAttribute("style", "color:#777;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:115px;resize:none;overflow-y:scroll;");
      //         inf.setAttribute("id", sid);
      //         inf.setAttribute("onclick","myFunction()");
      //         inf.setAttribute("class", "form-control");
      //         dv.appendChild(inf);
      //         document.getElementById("tcon").appendChild(dv);

      //         let cid = document.getElementsByTagName("textarea")[sid].id;
      //         // alert(cid);
      //         document.getElementById(cid).value = array[0];

      //         const textContainer = document.getElementById(cid);
      //         const text = array[0];
      //         textContainer.style.whiteSpace = "pre-line";
      //         textContainer.innerText = text;
              
      //         responsiveVoice.speak(array[0], "UK English Male");
      //       //   uvid.src="./public/videos/spn.idle.mov";
      //       }
      //       uvid.src="./public/videos/prs_jason.idle.mp4";
      //       uvid.style.display = "block"; 
      //       // uvid.src = "./public/videos/spn.idle.mov"
      //       usrImg.src="";
      //       uvid.play();
      //       const myList = document.querySelector('#tcon')
      //       const lastListItem = myList.lastElementChild;
      //       myList.insertBefore(lastListItem, myList.firstElementChild)
      //       const lastListItem2 = myList.lastElementChild;
      //       myList.insertBefore(lastListItem2, myList.firstElementChild)

      //       // alert(myList.innerHTML);

      //     var acc = document.getElementsByClassName("accordion");
      //     var i;

      //   })
      //   .catch(error => {
      //     // Handle any errors
      // });
      
    }
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
      if (sbsclickedElementID == "txt") {
        divValue = document.getElementById(clickedElementID).value;
        // responsiveVoice.speak(divValue, "UK English Male");
      chatInput.value = divValue;
      } else {
        divValue = document.getElementById(clickedElementID).innerHTML;
      }
      // alert(divValue);
      if(dFlag){
        // dFlag = true;
        userMessage = 'Describe the significance of '+divValue+' keep previous context and Use simple words and examples to convey the importance.';
        // responsiveVoice.speak(divValue, "UK English Male");
        const apiKey = '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'; 
        // getTopicDetails(''+)
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

            // const botResponse = JSON.stringify(response, null, 2);
            var arraymf = response.choices[0].text.split('\n').filter(line => line.trim() !== '');
            document.getElementById(clickedElementID).value = divValue+' \n'+response.choices[0].text.split('\n').filter(line => line.trim() !== '');

            const jsonString = JSON.stringify(response, null, 2);    
            // const cleanJsonString = jsonString
            // Create a Blob containing the JSON data
            const blob = new Blob([jsonString], { type: "application/json" });
            // Create a Blob URL
            const blobUrl = URL.createObjectURL(blob);
            // Create an anchor element
            const downloadLink = document.createElement("a");
            downloadLink.href = blobUrl;
            downloadLink.download = divValue+".json"; // Specify the file name
            // Programmatically trigger the download
            downloadLink.click();
            // Revoke the Blob URL to free up resources
            URL.revokeObjectURL(blobUrl);
            // alert(response, null, 2);
            if (arraymf.length > 0) {
              for (j in arraymf) {
              //   let charlen = array[j].length;
              //   let tid = 'txt-'+j.toString()+bid;
              var dv = document.createElement("DIV"); 
              //   var inf = document.createElement("INPUT");
              //   inf.setAttribute("type", "text");
              //   inf.setAttribute("id", tid);

              let ssid = clickedElementID+j.toString();
              // alert(sid);
              
              var inf = document.createElement("TEXTAREA");
              inf.setAttribute("type", "text");
              inf.setAttribute("style", "color:#777;background-color:transparent;border:1px solid #ddd;font-size:14px;width:100%;height:115px;resize:none;overflow-y:scroll;");
              inf.setAttribute("id", ssid);
              inf.setAttribute("onclick","myFunction()");
              inf.setAttribute("class", "form-control");
              dv.appendChild(inf);
              document.getElementById(clickedElementID).appendChild(dv);
              let ccid = document.getElementsByTagName("textarea")[ssid].id;
              // alert(cid);
              document.getElementById(ccid).value = arraymf[j];
              const textContainer = document.getElementById(ccid);
              const text = arraymf[j];
              textContainer.style.whiteSpace = "pre-line";
              textContainer.innerText = text;
              
              responsiveVoice.speak(text, "UK English Male");
            //   uvid.src="./public/videos/spn.idle.mov";
              }
            }
          
          })
          .catch(error => {
            // Handle any errors
            botResponse = JSON.stringify(error);
            console.error('Error:', error);
            // chatHistory.innerHTML += `<p>Error: ${botResponse}</p>`;
        });  
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
    }

    function countCharacters() {
      var textbox = document.getElementById("chatInput");
      var charCount = document.getElementById("charCount");
      charCount.innerText = textbox.value.length + " characters";
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