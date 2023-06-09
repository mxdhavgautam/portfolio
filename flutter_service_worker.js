'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "cc7c8453dafafc348ed1fd4ab6a091f9",
"assets/AssetManifest.smcbin": "8420f842f061f382cea4a2b1f533936c",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "780816aee337834f104e68e102b84e89",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "979279665fd66f375d0c3dda4cabab07",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "cdbe81e9cedc156de0c35203d8bb1a1f",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/ddstechvira.png": "e8468c1307955ea1f2e64bb5b3f14a80",
"assets/assets/images/dileepabandara_dev.png": "3b07d4f121fb24862763aaaadbe22f3e",
"assets/assets/images/enactus.png": "cc7301f0b00df96693d26525561311fb",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/logo.png": "bbcab54b68dac0e7bc37c97d637e7ad8",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/ncs.png": "609b2c0208006f12123b2af5e4f26ee7",
"assets/assets/images/portfolio.png": "ebea65bc5d2a6869f457a9b70e6d2ef3",
"assets/assets/images/splash.png": "45703886ca5c0fcbb612ed5898b53261",
"assets/assets/images/vit.png": "b32fcda82625661c20c2992bcaaf7f6c",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "42865c166de14e85ceb56d5e4029eb0c",
"assets/NOTICES": "16fb0660629968dbc8b4d433b133aa69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "20d6020189912c08bb7dea1557fa6b40",
"icons/favicon.ico": "baed19faf2de49101a56c34e7a115f89",
"icons/icon-192-maskable.png": "20d6020189912c08bb7dea1557fa6b40",
"icons/icon-192.png": "bbcab54b68dac0e7bc37c97d637e7ad8",
"icons/icon-512-maskable.png": "20d6020189912c08bb7dea1557fa6b40",
"icons/icon-512.png": "bbcab54b68dac0e7bc37c97d637e7ad8",
"index.html": "b56c889ba43887f21344f98e21ac4a62",
"/": "b56c889ba43887f21344f98e21ac4a62",
"main.dart.js": "96a4b8324d35863dcca884ef139ed566",
"manifest.json": "eb87d74c1be4a44990f724fd92e00bff",
"splash/img/dark-1x.png": "191b2a16aec385ed68d58ea51220439e",
"splash/img/dark-2x.png": "ff178ff0d486d6a2425c007071afcff2",
"splash/img/dark-3x.png": "c2a0b138fe3b6d8d54467b18a2c2a52a",
"splash/img/dark-4x.png": "8e747128f5f221ad5582b48315dfdb30",
"splash/img/light-1x.png": "191b2a16aec385ed68d58ea51220439e",
"splash/img/light-2x.png": "ff178ff0d486d6a2425c007071afcff2",
"splash/img/light-3x.png": "c2a0b138fe3b6d8d54467b18a2c2a52a",
"splash/img/light-4x.png": "8e747128f5f221ad5582b48315dfdb30",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c0656a578b2610410ea1c2128a507b3a",
"version.json": "b9c08b878c7d71723178a18b9ac646f9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
