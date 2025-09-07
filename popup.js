// popup.js
const STORAGE_KEY = "youtube_autopause_enabled";
const toggle = document.getElementById("toggle");
const status = document.getElementById("status");

// Initialize state from storage
chrome.storage.local.get([STORAGE_KEY], (res) => {
  const enabled =
    typeof res[STORAGE_KEY] === "undefined" ? true : !!res[STORAGE_KEY];
  toggle.checked = enabled;
  status.textContent = enabled ? "Enabled" : "Disabled";
});

// On toggle change, save to storage
toggle.addEventListener("change", () => {
  const val = !!toggle.checked;
  chrome.storage.local.set({ [STORAGE_KEY]: val }, () => {
    status.textContent = val ? "Enabled" : "Disabled";
  });
});

// Show simple tooltip if clicked again
