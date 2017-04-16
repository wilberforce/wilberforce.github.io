var fs=require("fs");
function put_filePipe(req,res){
  //console.log("put_file",req.url);
  console.log("put_file",req);
  var f = E.openFile(req.url,"w");
  // does not write last chunk...
  req.pipe(f,{chunkSize:512, end:false,
                 complete:function(){
                console.log("Complete");
                f.close();
                res.end("pipe upload done");
              }
             });
  //res.end();
}

function put_file(req,res){
  console.log("put_file",req.url);
  console.log("put_file",req);
  //console.log("put_file",req);
    var f = E.openFile(req.url,"w");
    req.on("data",function(data){
      console.log('Wrote: ',data.length);
      f.write(data);});
    req.on("close",function(){
      // never gets called ;-(
      f.close();
      res.end();
      console.log(fs.statSync(req.url));
    });
}

function onPageRequest(req, res) {

	var a = url.parse(req.url, true);
	console.log(a);

    file=a.pathname;
	if (file == '/') {
		file='/index.htm';
	}
  
  if( req.method == 'PUT') return put_file(req,res);

    var headers= {};
	var f = E.openFile('www' + file, "r");
    if (f === undefined) { // Look for compressed version
      console.log('looking for compressed');
      f = E.openFile('www' + file + '.gz', "r");
      if (f !== undefined) {
        console.log('found for compressed');
        headers['Content-Encoding']='gzip';
      } else {
        console.log('sill not found');
      }
    }
	if (f !== undefined) {
        var mime_t={js:'application/javascript',css:'text/css',ico:'image/vnd.microsoft.icon',
             'jpg':'image/jpeg','png':'image/png','gif':'image/gif'};
  var mime='text/plain';
  var ext=file.split('.').pop();
  try {
    mime=mime_t[ext];
  } catch (e) {}
  
      headers['Content-Type']= mime;
	  res.writeHead(200, headers);
    console.log('started ' + file, headers );
      if ( 0 ) {
      do{
        data = f.read(128);
        if (data) res.write(data);
      } while(data);
      res.end();
      f.close();
      console.log('streamed ' + file );
      } else {
        f.pipe(res,{chunkSize:512});
      }
      /*
          f.pipe(res,{chunkSize:512, end:false,  complete:function(){
          console.log("Complete");
          f.close();
          res.end();
          } } );
    */
		//f.pipe(res,{chunkSize:512}); // streams the file to the HTTP response
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end("404: Page " + a.pathname + " not found");
	}
}

var ws_outer;
  
  function sendTime() {
    ws_outer.send(JSON.stringify({data:new Date().ms}));
  }

function Start() {
console.log("starting servers");
var http = require('http').createServer(onPageRequest);
http.listen(80);

 var server = require('ws').createServer(onPageRequest);
 server.listen(88);
 server.on("websocket", function(ws) {
   ws_outer=ws;
    ws.on('message',function(msg) { console.log((msg)); });
    //ws.send({mango:"Hello from Espruino!"});
    sendTime();
 });
}

var wifi=require("Wifi");

wifi.on('connected', Start );

//var files = require("fs").readdirSync();
//console.log(require("fs").readFileSync("/DS18B20.js"));
//console.log(require("fs").readFileSync("www/pure.html"));
//var h=require("fs").readFileSync("www");