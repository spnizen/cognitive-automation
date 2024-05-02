---
template: overrides/main.html
search:
  boost: 2.0
watson_url: https://www.example.com/watson-url

hide:
  - navigation
  - toc
---
# SPN
<div class="container">
  <div class="row">
    <div class="col-sm-3">
      <!-- drift-widget-container -->
      <div id="drift-widget-container" style="position: absolute; z-index: 7;">
        <div id="mydiv" style="border: none; display: block; height: 220px !important; width: 300px !important; position: fixed; top: auto; left: auto; top: 4%; right: 0px; visibility: visible; z-index: 2147483647; max-height: 100vh; max-width: 100vw; transition: none; background: none transparent; opacity: 1;">
          <!-- Add your content here -->
          <!-- WhenNotAuthenticated -->
          <!-- usrImg -->
          <img id="usrImg" src="" class="responsive">
          <!-- video-container -->
          <div class="video-container">
            <!-- usrVideo -->
            <video id="usrVideo" playsinline loop poster="" style='display: none;'>
              <!-- source -->
              <source id="mp4_src" src="" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <!-- history_area -->
          </div> 
          <!-- charCount -->
          <p id="charCount" style='display: none;'>0 characters</p>
          <!-- chatInput -->
          <input id="chatInput" type="text" class="form-control" placeholder="Type in text here .. " autofocus="autofocus"/>
            <span>
              <div class="flex-center dsg-Regular color-gray-dark _30acjYOY3KpZb6rcrQtycV">
                <button style="color: blue" id="send_button" onclick="sendButton(event)">Send</button>
              </div>
            </span>
      </div>        
    </div>
    <div class="col-sm-9"> 
                <div id="history_area" class="responsive" style='display: block;'>
              <textarea readonly class="form-control" id="historyArea" style="color:#777;background-color:transparent;border:1px solid #ddd;font-size:12px;width:100%;height:115px;resize:none;overflow-y:scroll;">
              </textarea>                         
            </div>     
      <img id="waitImg" class="responsive">
      <div id="tcon">
      </div>      
    </div>
  </div>
</div>
<script src="../public/scripts/sjs.js"></script>
<script src="https://code.responsivevoice.org/responsivevoice.js?key=zYY4ho3R"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>



