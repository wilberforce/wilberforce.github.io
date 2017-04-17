var ws,
count = 1;
var model = {
  model: {},
  btn_activate : 'Activate!',
  now : Date.now(),
//  stopWatch : Date.now(),
  setpoint : 66,
  bomb:0,
  temp : [0, 0],
  timings: [0,5,10,15,20,30,45,60,90],
  setpoints: [0,66,72,97,100],
  cycles: ['Auto','Manual','Off'],
  logs : [{
      info : 'init log'
    }
  ]
};

var app = new Ractive({
    el : '#root',
    template : '#esp-app',
    data : model
  });

app.observe('timer setpoint dutycycle duty', function (newValue, oldValue, keypath) {
  if (ws) {
    var upd={};
	upd[keypath]=newValue;
    ws.jsend(upd);
	} 
});

app.on('activate', function (event) {
  ws.jsend({
    click : {
      count : ++count
    }
  });
  count = count + 1;
  model.btn_activate = 'Activate ' + count;
});

//setTimeout(function () {

  ws = new WebSocket("ws://" + location.host + ":88/my_websocket", "protocolOne");
  ws.jsend = function (o) {
    this.send(JSON.stringify(o));
  };
    ws.onopen = function (event) {
		console.log('open');
		ws.jsend({
      date : {
        date : new Date()
      }
    });
	}
    ws.onclose = function (event) {
		console.log('close');
	}
	
  ws.onmessage = function (event) {
    app.unshift('logs', {
      info : event.data
    });
	if ( model.logs.length > 5 ) model.logs.pop();

    var data = JSON.parse(event.data);

    _.forIn(data, function (value, key) {
      app.set(key, value);  // update model
    });

  };
