import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";

export default function App() {

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
      return null
  }

  return (
    <>
    <div className="flex items-center justify-center flex-col">
      <h2>
        Speech to Text Converter
      </h2>
      <p></p>
      <div className="" >
      {transcript}
      </div>
      <div className="flex ">
        <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Copy</button>
        <button onClick={startListening} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start Listening</button>
        <button onClick={SpeechRecognition.stopListening} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Stop</button>
      </div>
    </div>
    </>
  )
}