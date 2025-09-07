const STORAGE_KEY = "youtube_autopause_enabled";

function findVideo() {
  return document.querySelector("video");
}

function pauseVideo() {
  const v = findVideo();
  if (v && !v.paused) v.pause();
}

function playVideo() {
  const v = findVideo();
  if (v && v.paused) {
    v.currentTime = Math.max(0, v.currentTime - 1.5);
    v.play().catch(() => {});
  }
}

function handleVisibilityChange() {
  if (document.visibilityState === "hidden") {
    pauseVideo();
  } else if (document.visibilityState === "visible") {
    playVideo();
  }
}

function attach() {
  document.addEventListener("visibilitychange", handleVisibilityChange);
}

function detach() {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
}

// Init
chrome.storage.local.get([STORAGE_KEY], (res) => {
  const enabled = res[STORAGE_KEY] ?? true;
  if (enabled) attach();
});

chrome.storage.onChanged.addListener((changes) => {
  if (STORAGE_KEY in changes) {
    if (changes[STORAGE_KEY].newValue) attach();
    else detach();
  }
});
