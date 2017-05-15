
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
  res.end();
}

function put_file(req,res){
  console.log("put_file",req.url);
  var len=req.headers['Content-Length'];
  //console.log("put_file",req);
    var f = E.openFile('w'+req.url.slice(1),"w");
    req.on("data",function(data){
      f.write(data);
      console.log(data.length);
      len-=data.length;
      if ( len === 0 ) {
        f.close();
        res.end('Done');
      }

    });
}
           

function onPageRequest(req, res) {

	var a = url.parse(req.url, true);
	console.log(a);

  console.log({sckt:req.sckt});
  console.log(req.headers);
  console.log(req.method);
    file=a.pathname;
	if (file == '/') {
		file='/index.htm';
	}
  var headers= {};
  if( req.method == 'PUT') return put_file(req,res);
    var f;
    try {
	f = E.openFile('www' + file, "r");
    }
      catch(e) {
        console.log('no file');
        // look for compressed
        try {
        f = E.openFile('www' + file + '.gz', "r");
        headers['Content-Encoding']='gzip';
        } catch(e) {}
    }
  
	if (f !== undefined) {
      mime='text/html';
      if ( file.substr(-2)  == 'js' ) mime='application/javascript';
      if ( file.substr(-3)  == 'css' ) mime='text/css';
      if ( file.substr(-3)  == 'ico' ) mime='image/vnd.microsoft.icon';
      
      headers['Content-Type']= mime;

	  res.writeHead(200, headers);
    console.log('started ' + file );
         f.pipe(res,{chunkSize:512, end:false,  complete:function(){
          console.log("Complete");
          f.close();
          res.end();
          } } );

	} else {
		res.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		res.end("404: Page " + a.pathname + " not found");
	}
}

var ws_outer;
  
  function sendTime() {
    ws_outer.send(JSON.stringify({data:new Date().ms}));
  }
 var server = require('ws').createServer(onPageRequest);
 server.listen(88);
 server.on("websocket", function(ws) {
   ws_outer=ws;
    ws.on('message',function(msg) { console.log((msg)); });
    ws.send("Hello from Espruino!");
    sendTime();
 });

//var files = require("fs").readdirSync();
//console.log(require("fs").readFileSync("/DS18B20.js"));
//console.log(require("fs").readFileSync("www/pure.html"));
//var h=require("fs").readFileSync("www/pure.html");