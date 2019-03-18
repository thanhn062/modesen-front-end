import handleCookie from '~/assets/js/utils/cookie.js'
function sendTokenToServer(token){
	console.log(token);
	var old_token = handleCookie.get('ms_notification');
	handleCookie.set('ms_notification', token+lsuid, 1);
	if (old_token == token+lsuid){
		return;
	}
	var data = {};
	data.device_typ = 'FCM';
	data.device_registration_id = token;
	myajax('post', '/adddevice/', data);
}

function requestFCMToken(){
	messaging.requestPermission().then(function() {
		console.log('Notification permission granted.');
		// TODO(developer): Retrieve an Instance ID token for use with FCM.
		// subsequent calls to getToken will return from cache.			
		ga('send', 'event', 'FCM', 'RequestPermissionGranted');
		
		messaging.getToken().then(function(currentToken) {
		  if (currentToken) {
			sendTokenToServer(currentToken);
			//updateUIForPushEnabled(currentToken);
		  } else {
			// Show permission request.
			console.log('No Instance ID token available. Request permission to generate one.');
			// Show permission UI.
			//updateUIForPushPermissionRequired();
			//setTokenSentToServer(false);
		  }
		}).catch(function(err) {
		  console.log('An error occurred while retrieving token. ', err);			  
		  ga('send', 'event', 'FCM', 'GetTokenError', err);
		  //showToken('Error retrieving Instance ID token. ', err);
		  //setTokenSentToServer(false);
		});
	}).catch(function(err) {
	  console.log('Unable to get permission to notify.', err);		  
	  ga('send', 'event', 'FCM', 'RequestPermissionError', err);
	  handleCookie.set('ms_notification', true, 1);
	});
	$('#fcmmodal').modal('hide');
}

firebase.initializeApp({
  "apiKey": "AIzaSyCgiJcGjK2JNt_o6UOEcPPUP2GvBjpsm80",
  "databaseURL": "https://sonorous-veld-95923.firebaseio.com",
  "storageBucket": "sonorous-veld-95923.appspot.com",
  "authDomain": "sonorous-veld-95923.firebaseapp.com",
  "messagingSenderId": "985405782985",
  "projectId": "sonorous-veld-95923"
});

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BD4iDfxlD_FalzscVlfjiw4fN3YKp6X2u2DxbsLiRzUT6scSBAxvHlzH4ctfnYV--joqcjWh4M4_SDRZ3pOcuVQ");
if (process.browser){
	$(document).ready(function(){
		// if (lsuname) {
		// 	messaging.getToken().then(function(currentToken) {
		// 		if (currentToken) {
		// 		sendTokenToServer(currentToken);
		// 		//showMemberShip();
		// 		//updateUIForPushEnabled(currentToken);
		// 		} else {
		// 		// Show permission request.
		// 		console.log('No Instance ID token available. Request permission to generate one.');
		// 		setTimeout(function(){
		// 			if (!($("#abtestbassistant").data('bs.modal') || {}).isShown && ($("#modesensinstalled")[0] || handle.get('modelinkmodal'))){
		// 				if (!handle.get('ms_notification')){
		// 					$('#fcmmodal').modal('show');				  
		// 					ga('send', 'event', 'FCM', 'FCMModalShow');
		// 					handle.set('ms_notification', true, 1);
		// 				} else {
		// 					//showMemberShip();
		// 				}
		// 			}
		// 		}, 15000);
		// 		// Show permission UI.
		// 		//updateUIForPushPermissionRequired();
		// 		//setTokenSentToServer(false);
		// 		}
		// 	}).catch(function(err) {
		// 		console.log('An error occurred while retrieving token. ', err);	  
		// 		ga('send', 'event', 'FCM', 'GetTokenError', err);
		// 		//showMemberShip();
		// 		//showToken('Error retrieving Instance ID token. ', err);
		// 		//setTokenSentToServer(false);
		// 	});
		// }
	});
}

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
  messaging.getToken().then(function(refreshedToken) {
	console.log('Token refreshed.');
	// Send Instance ID token to app server.
	sendTokenToServer(refreshedToken);
	ga('send', 'event', 'FCM', 'TokenRefreshed');
	// Indicate that the new Instance ID token has not yet been sent to the
	// app server.
	//setTokenSentToServer(false);
  }).catch(function(err) {
	console.log('Unable to retrieve refreshed token ', err);
	ga('send', 'event', 'FCM', 'TokenRefreshedError', err);
	//showToken('Unable to retrieve refreshed token ', err);
  });
});

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
  // ...
  appendMessage(payload);
});

// Add a message to the messages element.
function appendMessage(payload) {
	//const messagesElement = document.querySelector('#messages');
	//const dataHeaderELement = document.createElement('h5');
	//const dataElement = document.createElement('pre');
	//dataElement.style = 'overflow-x:hidden;';
	//dataHeaderELement.textContent = 'Received message:';
	//dataElement.textContent = JSON.stringify(payload, null, 2);
	//messagesElement.appendChild(dataHeaderELement);
	//messagesElement.appendChild(dataElement);
}