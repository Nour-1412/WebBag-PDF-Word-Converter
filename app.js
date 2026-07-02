// ==========================
// ELEMENTS
// ==========================

const pdfToWordBtn = document.getElementById("pdfToWordBtn");
const wordToPdfBtn = document.getElementById("wordToPdfBtn");

const toolTitle = document.getElementById("toolTitle");

const fileInput = document.getElementById("fileInput");

const chooseFile = document.getElementById("chooseFile");

const fileName = document.getElementById("fileName");

const fileSize = document.getElementById("fileSize");

const fileType = document.getElementById("fileType");

const fileStatus = document.getElementById("fileStatus");

let currentMode = "pdf-to-word";
// ==========================
// CHOOSE FILE
// ==========================

chooseFile.addEventListener("click", () => {

    fileInput.click();
});
// ==========================
// PDF → WORD
// ==========================

pdfToWordBtn.addEventListener("click", () => {

    currentMode = "pdf-to-word";

    pdfToWordBtn.classList.add("active");

    wordToPdfBtn.classList.remove("active");

    toolTitle.textContent = "PDF → Word";

    fileInput.accept = ".pdf";

});
// ==========================
// WORD → PDF
// ==========================

wordToPdfBtn.addEventListener("click", () => {

    currentMode = "word-to-pdf";

    wordToPdfBtn.classList.add("active");

    pdfToWordBtn.classList.remove("active");

    toolTitle.textContent = "Word → PDF";

    fileInput.accept = ".doc,.docx";

});
// ==========================
// FILE INFO
// ==========================

fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];

    if (!file) return;

    fileName.textContent = file.name;

    fileSize.textContent =
        (file.size / 1024 / 1024).toFixed(2) + " MB";

    fileType.textContent = file.type || "Unknown";

    fileStatus.textContent = "Ready";

});
