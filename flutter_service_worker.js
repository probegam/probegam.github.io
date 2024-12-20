'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c3b123c751a51b584bf6657ea1becaf9",
"version.json": "25fa61215898e70b8be6f62adccf0856",
"favicon.ico": "86145b12c5a31ada22fe606906c7bc81",
"index.html": "ebd874d1ca0fdb5a6a0514ddf43fd252",
"/": "ebd874d1ca0fdb5a6a0514ddf43fd252",
"images/banner1.jpg": "0a865c8b889c1e23a082aa27ed8f03d9",
"main.dart.js": "69a6fbba6ab4e58b7cd329345f9b1752",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0db037f5fe5ea7fa8776188b86df4392",
"assets/AssetManifest.json": "b6220d4cee11da46a8216e58451476f3",
"assets/NOTICES": "03c113d3341b7320af8f80d0f603a380",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e35b7ef325380eefe40670faabecac3d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "80acf6e2c4ca08855b765266e10826a5",
"assets/fonts/MaterialIcons-Regular.otf": "ee3b60d501c99d2eac6d9820ab0241d0",
"assets/assets/stitmo.png": "2f6fd37b614357fa59d2d59ab6bb18f2",
"assets/assets/moskovinsaat.png": "74bc176ed279a731b24cb0b429e3a7b1",
"assets/assets/you.png": "3d8b39ed9bbaf10403c1300fe67056c0",
"assets/assets/kfuyurt.png": "07c96c1d2f1cb286c6df1eb9e6c45386",
"assets/assets/sivilhavacilik.png": "d13279b64bc99c9b80485160b545da39",
"assets/assets/banner2.jpg": "7de6e4de7c6fc246e5960ba05da03d74",
"assets/assets/enerji.png": "37720f2c42e9da84b8d4fe5ec9304667",
"assets/assets/sthava.png": "c885c30130b2c1b75666b42546800a68",
"assets/assets/jijnypedeloji.png": "18c0ff596e8e465310996d2c1823000f",
"assets/assets/banner3.jpg": "607136f6c4825242e231852042e69f3b",
"assets/assets/banner1.jpg": "0a865c8b889c1e23a082aa27ed8f03d9",
"assets/assets/moskovadevletu.png": "f93507561e12b6f4901ef7052d7b5a0e",
"assets/assets/meryem.png": "3fe19fa8d45a19f0c5be1f393107ffa1",
"assets/assets/federal-u.png": "bc5d274d577bef2dfcac111bb2e4e985",
"assets/assets/tekonolojikazan.png": "a6bd465aa388823301cf6b5576ead47b",
"assets/assets/halklarind.png": "5342985450735b85296dec07c5afa51d",
"assets/assets/nijnydevlet.png": "b36c0a9948a16e0ff135d54fdbc0af74",
"assets/assets/st-peters-u.png": "c7dac746b9a35fab5d380b056f6ed3c3",
"assets/assets/Moskova-devlet-u.png": "06f36264036c151e8871e87316544fb1",
"assets/assets/ins.png": "d52be1a827a7c28e9b172973996a86b0",
"assets/assets/stdevlet.png": "b87e4c10d73f7cabee4e15eb1a886232",
"assets/assets/stpoli.png": "f281eb4e2ff1a291ac6c3b02cf9bf9c9",
"assets/assets/eren.png": "3e5e0e3d98eba42dea10f0d6e3b6bade",
"assets/assets/logo.png": "71bce901cdb385d699e122c7f9a35a1c",
"assets/assets/talha.png": "5660d53cae8a4c6f95b7b7a710d9036d",
"assets/assets/kfuyurt2.png": "026b94bddb6f41fc2bb2a5cac20d2559",
"assets/assets/devletteknik.png": "c9f2aff3cb2c3d772b344f3a7a873843",
"assets/assets/video1.png": "a0e6e5d80fc6d7cf8857db728a8d165f",
"assets/assets/erdem.png": "11e16bb860e101fa0306ab1a5bf2bfd2",
"assets/assets/nijnyinsaat.png": "928e37c2302d13fe52579e7719fca7e8",
"assets/assets/stmimar.png": "317205294067750d3b556d4c10a5ddb8",
"assets/assets/hazirlik.png": "0a63c64b8fe207980cd9be8583102a2f",
"assets/assets/vize.png": "176a02a109ad6dfa06cd6aa8a27c6570",
"assets/assets/federal.png": "64a487ec848b39f3fb1604cc99d47b6b",
"assets/assets/kaan.png": "471c6f3937b9ed6a8c412ed01121d124",
"assets/assets/nijnytip.png": "f8ad43c75fcb73bfdf2090b0d6ff92ee",
"assets/assets/nijny.png": "18a3b92437deab0be39463fd3ebaad53",
"assets/assets/wp.png": "8d6715a5b07247fdb4d289f4fc29253c",
"assets/assets/medikal.png": "030f3cdd91b6f9dbedf572985fe0c2b3",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
