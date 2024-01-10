import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="m-20">
            <svg viewBox="0 0 1208 1024"
               className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
                <ellipse cx={604}
                cy={512}
                fill="url(#radial-gradient-pricing)"
                rx={604}
                ry={512}/>
                <defs>
                    <radialGradient id="radial-gradient-pricing">
                        <stop  stopColor="#7775D6"/>
                        <stop offset={1} stopColor="#E935C1"/>
                    </radialGradient>
                </defs>
               </svg>
      <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 p-40">
        <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Speech to Text Converter
        </h2>
        <p className="text-gray-300 mb-6">
          Click on the button and start speaking. <br />
          Tap on the text area and then click on the copy button to copy the text. <br />
          Stop whenever the speech is completed.
          </p>
          </div>
        <div
          className="main-content bg-white bg-opacity-30 p-4 rounded-md mb-6"
          onClick={() => setTextToCopy(transcript)}
        >
          {transcript}
        </div>

        <div className="btn-style">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={setCopied}
          >
            {isCopied ? 'Copied!' : 'Copy to clipboard'}
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={startListening}
          >
            Start Listening
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={SpeechRecognition.stopListening}
          >
            Stop Listening
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
