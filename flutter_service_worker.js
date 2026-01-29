'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8adb87ffe7918da5c7a889bd50b79921",
"assets/AssetManifest.bin.json": "cf0dc60990d9d1d19ada2998ea2586c9",
"assets/AssetManifest.json": "f66cb50aee40e83124d4f528389a61a2",
"assets/assets/icons/ic_appstore.png": "e32670cd6d37a3a1cc5d281655e24102",
"assets/assets/icons/ic_fiver.png": "d7216b8f975ec266ecc9079d96474c8c",
"assets/assets/icons/ic_fiverr.png": "b05924327e5063160e905a1fdb1cf4e6",
"assets/assets/icons/ic_github.png": "2190072c30ea9da712e9f3b6fe5587d2",
"assets/assets/icons/ic_gmail.png": "e819b6a8860c9f813501e9dff82a471e",
"assets/assets/icons/ic_instagram.png": "af2868cec3d50232f31d43bc6eccb5dc",
"assets/assets/icons/ic_linkedin.png": "6c4f5daedf0873b24c843a7705837361",
"assets/assets/icons/ic_playstore.png": "79b24f246c0b4231fb9536d3d100e3a8",
"assets/assets/icons/ic_whatsapp.png": "35323afcb9d6c0f3949a0b44619b85db",
"assets/assets/icons/ic_youtube.png": "ad516e33e876a80fe0a6889d636cb05f",
"assets/assets/images/aaaa.png": "a0566f5c94f14c9a173366990b5dde96",
"assets/assets/images/ahmed.jpeg": "9243d191c3f8b8d33483a69eb9c03c1c",
"assets/assets/images/Ahmedimg.jpeg": "36b60c6d2b9a69f04fce9d9f47900b10",
"assets/assets/images/Ahmedimg.png": "e9d1cc288271c453f609325a095345bf",
"assets/assets/images/Ahmed_Zahran.jpeg": "b498b515b92becfda20633c2a184f85a",
"assets/assets/images/img_profile.jpeg": "2d87311ba27941007934e08d6af234d4",
"assets/assets/images/ProfilePIC.jpeg": "d1e5ce29f9ed7288aa6442ec7d2a9b48",
"assets/assets/logos/logo_app.png": "e5e90a1264e793364c90d3ad981c7d4c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1a7352b8b0786d959b99e461b2d814a2",
"assets/NOTICES": "7358ad6a0f0bfbc1df3bd77708b4b842",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "db4981cb88577d674d7ea23eaf82448c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "63659c19164c23acaee19c8187bde16f",
"icons/Icon-192.png": "0100be26a1cdf89ea50dc202cffef4d4",
"icons/Icon-512.png": "1a399926cc4689fa2a131a03f0b9730d",
"icons/Icon-maskable-192.png": "0100be26a1cdf89ea50dc202cffef4d4",
"icons/Icon-maskable-512.png": "1a399926cc4689fa2a131a03f0b9730d",
"index.html": "0318fa4e932f9ba27da433a37524e8b6",
"/": "0318fa4e932f9ba27da433a37524e8b6",
"main.dart.js": "acbd3df60e42dc0a96d7a85c783ec2ae",
"manifest.json": "b091461ed2943e018d43afd0336bc6ac",
"version.json": "03acefc4795e8573b194262cd3a4419f"};
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
