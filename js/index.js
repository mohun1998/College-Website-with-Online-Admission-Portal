const divInstall = document.getElementById('installBanner');
const butInstall = document.getElementById('InstallButton');

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (evt) => {
  // Prevent the mini-infobar from appearing on mobile
  evt.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = evt;
  // Update UI notify the user they can install the PWA
  divInstall.classList.toggle('hidden', false);
  //Console log
  console.log(`'beforeinstallprompt' event was fired.`);
});

butInstall.addEventListener('click', async () => {
  console.log('Install button clicked');
  if (!deferredPrompt) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log('User response to the install prompt: ${outcome}');
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
  // Hide the app provided install promotion
  divInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (evt) => {
  // Hide the app-provided install promotion
  divInstall.classList.toggle('hidden', true);
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics event to indicate successful install
  console.log('PWA was installed', evt);
});


const InstallClose = document.getElementById('install_close');
const InstallContainer = document.getElementById('install_container');
function installerClose() {
	InstallContainer.classList.remove('install_banner_container');
    InstallContainer.classList.add('install_banner_container_hider');
}


var isOnline = true;														// Can be used to check if device is in offline/online mode
var isWebAPK = window.matchMedia('(display-mode: standalone)').matches;		// Can be used to check if browser or webapk currently running
console.log("[*] The app is running as a "+(isWebAPK?"WebAPK":"Browser-Page"));

function checkOnlineStatus(){
	isOnline = navigator.onLine;
	console.log("[*] Connection status: "+(isOnline?"online":"offline"));
	if (isOnline){
		return;
	}
	else {
		return caches.match('/fallback.htm');
	}
}


function init(){
	// Register service worker
	if ('serviceWorker' in navigator) {
		console.log("Register serviceWorker ...");
		navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
			// Registration was successful
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, function(err) {
			// registration failed :(
			console.log('ServiceWorker registration failed: ', err);
		});
	}
	else console.log("ServiceWorker not supported by your browser!");
	
	// Trigger install prompt for WebAPK
	window.addEventListener("beforeinstallprompt",function(event){
		console.log("WebAPK install event fired!");
    divInstall.classList.toggle('hidden', false);
		butInstall.click(function(e){
			event.prompt();
			butInstall.remove();
		});
	});
	
	// Initialize online/offline detection
	checkOnlineStatus();
	window.addEventListener("online",checkOnlineStatus);
	window.addEventListener("offline",checkOnlineStatus);
}

init();