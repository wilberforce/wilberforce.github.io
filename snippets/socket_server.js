var fs=require("fs");
function put_filex(req,res){
  //console.log("put_file",req.url);
  console.log("put_file",req);
  var f = E.openFile(req.url,"w");
  req.pipe(f,{chunkSize:512, end:false,
                 complete:function(){
                f.close();
                 res.end();
                   console.log('Completed!');
              }
             });
  res.end('pipe upload done!');
}
function put_file(req,res){
    console.log("req.url",req.url);
    var f = E.openFile(req.url,"w");
    req.pipe(f,{chunkSize:1024, end:false,
      complete:function(){
          console.log("Complete");
          f.close();
          res.end("pipe upload done");
      }
    });
    res.end();
  }

function onPageRequest(req, res) {

	var a = url.parse(req.url, true);
	console.log(a);

    file=a.pathname;
	if (file == '/') {
		file='/index.htm';
	}
    //console.log('available():',req.available());
  
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
        console.log('still not found');
      }
    }
	if (f !== undefined) {
        var mime_t={js:'application/javascript',css:'text/css',ico:'image/vnd.microsoft.icon',
             'jpg':'image/jpeg','png':'image/png','gif':'image/gif'};
  var mime='text/plain';
  var ext=file.split('.').pop();
      //debugger;
    mime=mime_t[ext];
  if ( mime === undefined ) mime='text/html';
      headers['Content-Type']= mime;
	  res.writeHead(200, headers);
      console.log('started ' + file, headers );
      f.pipe(res,{chunkSize:512});
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

function onInit(){Start();}

//var files = require("fs").readdirSync();
//console.log(require("fs").readFileSync("/DS18B20.js"));
//console.log(require("fs").readFileSync("www/pure.html"));
//var h=require("fs").readFileSync("www");
//fs.statSync('www/upload-new.htm');
//fs.statSync('www/upload-new2.htm');
//fs.unlink('www/upload-new.htm');
