'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d519934eb86b0a59df49535eb08085e9",
".git/config": "66fca8419663b6fe9cf36e81bacc8450",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e78daa3f6aa821d5b179611149c1089",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "539e5b264b1b554954373801c1d5f074",
".git/logs/refs/heads/main": "539e5b264b1b554954373801c1d5f074",
".git/logs/refs/remotes/origin/main": "439ab7e97bd089ce3c532e30a83a77d9",
".git/objects/00/1a36b68edee3aabc67e8a68cc24d5201aef407": "41432d11ba80e4ce0e73842e289991f1",
".git/objects/01/f231010c980717d32731ccde6acaa4da0f16de": "a28216b436c23c0cd91f0149b2dca47a",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/27/a30ff8ddafed13122fa8fbc7587ab96d032bc5": "844fe60d94da8c9730a3036c26f3c0f4",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/30/9d705d7cf043ddbb26c30f26ccfbc91fac4a00": "525ccfabf0410e9728bea470eeda0035",
".git/objects/33/abb726013ac3540ab176ed3331bec04a2bf0f5": "bd54ed953c212b295b9b42822ed1e0ce",
".git/objects/38/cfdd242526abf37ca502bdc9b407342b3610fa": "36c02a49bf9ea6a87c29e0e4ed4d9bbe",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c97ac28b691b19648871a5f66b838c03ce7c33": "19003164d86aeb9174ccd966b7135780",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/ef36b0496bedd7a5f8a436f04761fc9e9939ef": "f77dee837979d3de6112c4444053b23e",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/1a6c95f5ea49c6dd9d60d2c777e66895dc8188": "a2d5b8f7797075062f39c632432b46b2",
".git/objects/54/3681a62f4a187231504f5ff60f5bac59532e68": "fb32a3d8cf3959df774f74e4ffeb6835",
".git/objects/5f/f105a25311a5b09f50b50375aef1a7d87da3ca": "52b2056f1be2be4056e34478e0afd6ec",
".git/objects/64/893e04a490cc24ca270814bcccdaffafaf7bea": "4cc096c2ecfdaaeb035566bd9ea4ead3",
".git/objects/67/2a7be0912c27a75743dd4ede78344f82ddf5f1": "27ba6e495aa41e39789b4f7519c54a70",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/5f5598fd7e21394a82ad07d1937e70ec6fadf3": "a788238c36000061b2a4ed103c23f382",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/e7d249bdbfd987a00e8081cb02f9a5bffe18f1": "389842cc773c891f6b3b961399d01795",
".git/objects/81/b1a96329240d77598518ab402a1d86e9c8c172": "39e6323f534d08f61fab6dffb7e01930",
".git/objects/88/dc119cba9a8aa0f27ecbd806d6f6fd1a300f5c": "73b5ca59e9b532dfe4714cf4813190a9",
".git/objects/91/e1dadbac36f9d046d27fed50307ef7484bd0dc": "460429c2854947e56a3422a1646f6816",
".git/objects/93/2526e3ac82d03e2fcb87e758f77e5bf4b08f79": "fad201bb3662ff96f248623ffd9467d9",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3cbb78df5d6d5a4447eff528a8aa9290d47c94": "d3058d0f68a60b78e5066509b3718ff7",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/ac/15b5cdbb9034036790632ccbcb9c9250e74594": "00a4cec9c12adf78fdef84485ceaa389",
".git/objects/ad/5ff8690d47e480c3557d8ecf0db3adf038b908": "30e48cb3793e10157bce180cccf5ae3b",
".git/objects/ad/b60bfc1391643682fc0f466672dd7073f53098": "191966e90ce2c313c642ee963624ef62",
".git/objects/b5/3af26c53577bfd4ec480167bb3179abf9eedbc": "ecf9761e1c34ff86a61390c88d53918e",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/bc3077a193a5a2271337d705531c3e9d1eddaf": "84820257c780c49633dba1d79dbe5b31",
".git/objects/b7/70e0fa341e106ad95e5fa248d56f1b956fa6b5": "fc867c9a191095232d4bba0066b103a3",
".git/objects/ba/4fd21ce414b673e2c135ab07659df5deb7e03f": "6000e219d0f429810b5218c4aaabf1ee",
".git/objects/ba/8da60d3ee7fcc2c2354858c862759302b09cb9": "7dc60d0ddf2e5557c77ccd4217df33fe",
".git/objects/bd/9774ed558c569ff5e2f585262777f90384dafe": "96d5ac4fd77f1830000a0ece2b5ad358",
".git/objects/c0/81e59acf872f19e0cfc3989c7d828361c64903": "5f63c1e977627ed6a2ddc16236ba8b63",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/1b141b0394981450c710d8036fcabd5c9624c5": "2594d8b7f39413cb7d706710a7391d02",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/801bb5f6cb88f2e80a9cc40f90d23a9410672d": "54747fd1adfffc6db4371cf7fa59ec2e",
".git/objects/de/39dbc7330caed4f77bc874fad7cbbd71f38c65": "bd89db159bcf0e49604f2c721ad5cc38",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/b35b5feb0bac049cf4b44c52b75ff6b76ab582": "58374345268766baa4bee6d56c80c5da",
".git/objects/e6/981e7b7e36679556c8808a8dec4486c4bb0a43": "6d03f745a34a3409c1d568a4b085d6fe",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/e12dd31d0fa340c92a860023762085d7fe461c": "a6b3795e4d23c4d9df060629f5315b47",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/25b288f0caed2f9e0146f9713b248d57da97f2": "6430633879eab9c138e2676c90812cf6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/61ae49a89064dd1aefc871d0e1509e8855046c": "76d697de0dab72a904e97060aeb1d1bb",
".git/objects/f9/7ed2fac95639709dace6bffe833b6c4e137328": "d32d9eedbfee661a0282ebb1dd65a53f",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/8333610aa97337ef218b23c337919c5d2ad546": "07f8a4ac00a95f85c8a50dba457dfa93",
".git/refs/heads/main": "3c8d741b319853fa77606ce97ff8e2ed",
".git/refs/remotes/origin/main": "3c8d741b319853fa77606ce97ff8e2ed",
"assets/AssetManifest.bin": "8adb87ffe7918da5c7a889bd50b79921",
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
"flutter_bootstrap.js": "a979c5db5dae7d8e4289fd71c68da48d",
"icons/Icon-192.png": "0100be26a1cdf89ea50dc202cffef4d4",
"icons/Icon-512.png": "1a399926cc4689fa2a131a03f0b9730d",
"icons/Icon-maskable-192.png": "0100be26a1cdf89ea50dc202cffef4d4",
"icons/Icon-maskable-512.png": "1a399926cc4689fa2a131a03f0b9730d",
"index.html": "4f91e75f416092f9f755fbee64ae8a4d",
"/": "4f91e75f416092f9f755fbee64ae8a4d",
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
