// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  pushState: true,
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },

  pushState : true

});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
app.loginScreen.open('#my-login-screen');
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  
  //if(username == "antaxzn" && password == "123456"){
    // Close login screen
    app.loginScreen.close('#my-login-screen');
  //}else{
    //app.dialog.alert("Wrong password");
  //}
  // Alert username and password  
});

//Back
$$('.back').on('click', function () {
  /*var cpage = mainView.activePage;
  var cpagename = cpage.name;
  alert(cpagename);*/
  app.loginScreen.open('#my-login-screen');
});

//Password Screen Demo
$$('#signup-button').on('click', function () {
    app.loginScreen.open('#my-create-password');
});

$$('#signup-button-do').on('click', function () {
    app.loginScreen.close('#my-create-password');
});


//Device Listener
var appminex = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.addEventListener("backbutton", 
           function(e){ 
                
                /*var cpage = mainView.activePage;
			    var cpagename = cpage.name;
			    console.log(cpagename);
			    if (($$('#leftpanel').hasClass('active')) || ($$('#rightpanel').hasClass('active'))) { // #leftpanel and #rightpanel are id of both panels.
			        myApp.closePanel();
			        return false;
			    } else if ($$('.modal-in').length > 0) {
			        myApp.closeModal();
			        return false;
			    } else if (cpagename == 'index') {
			        myApp.confirm('Are you sure you want to exit?', function() {
			            // var deviceType = device.platform;
			            // if(deviceType == “Android” || deviceType == “android”){
			            navigator.app.exitApp();
			            // }
			        },
			        function() {
			        });
			    } else {
			        mainView.router.back();
			    }*/

            }, false);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
    }
};

appminex.initialize();
//---------------------------------------


var dbSize = 5 * 1024 * 1024; // 5MB

var db = openDatabase("Todo", "", "Todo manager", dbSize, function() {
    console.log('db successfully opened or created');
});

function onSuccess(transaction, resultSet) {
    console.log('Query completed: ' + JSON.stringify(resultSet));
}

function onError(transaction, error) {
    console.log('Query failed: ' + error.message);
}

/*Framework7.request.get('pages/add.html', function (data) {
  $$(".popup .view .page").html(data);
});*/

//CREATE TABLE
db.transaction(function (tx) {
   tx.executeSql("CREATE TABLE IF NOT EXISTS data(ID INTEGER PRIMARY KEY ASC, NAME TEXT, USERNAME TEXT, PASSWORD TEXT)",
                [], onSuccess, onError);
});

db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS auth(PASSWORD TEXT)",
                [], onSuccess, onError);
});