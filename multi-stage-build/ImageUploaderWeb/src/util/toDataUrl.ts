function toDataUrl(blob: Blob): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onerror = reject;
    fileReader.onload = () => resolve(fileReader.result);

    fileReader.readAsDataURL(blob);
  });
}

export default toDataUrl;
