import * as pdfjsLib from "pdfjs-dist";

export async function extractTextFromPDF(file) {
  const reader = new FileReader();

  return new Promise((resolve) => {
    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(i => i.str).join(" ");
      }

      resolve(text);
    };

    reader.readAsArrayBuffer(file);
  });
}