import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./App.css";

function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

function App() {
  useEffect(() => {
    // Initialize the scanner when the component is mounted
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    // Start the scanner
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    // Cleanup: Stop the scanner when the component is unmounted
    return () => {
      html5QrcodeScanner.clear();
    };
  }, []); // Empty dependen cy array ensures this effect runs only once (on mount)

  return (
    <>
      <div>
        <h1>QR Code Scanner</h1>
      </div>
      <div id="reader" style={{ width: "600px", height: "auto" }}></div>
    </>
  );
}

export default App;
