"use client"

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  async function generateImage() {
    setLoading(true);
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": process.env.CAT_KEY!,
    });

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: headers,
    };

    try {
      setImage("");
      setImageLoaded(false);

      const response = await fetch("https://api.thecatapi.com/v1/images/search", requestOptions);
      const data = await response.json();
      setImage(data[0].url);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <>
      <main>
        <div className="">
          <div id="background" className="w-[100vw] h-[100%]  absolute -z-10 brightness-50" style={{ backgroundImage: `url(/background.jpg)` }}></div>
          <div id="main-content" className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Cute Cat</h1>
            <p className="text-white text-2xl mb-4">Générer des photos de chat en cliquant sur un bouton.</p>
            {image &&  <img src={image} alt="cat" className="w-[500px] h-[500px] object-cover rounded-md" onLoad={() => setImageLoaded(true)} />}
            {!imageLoaded && image && <p className="text-green-400 text-2xl mt-4">Chargement...</p>}
            <button className="bg-white text-black px-4 py-2 rounded-md mt-5 hover:bg-gray-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300" disabled={loading} onClick={generateImage}>Generate a cat 🐱</button>
          </div>
        </div>
      </main>
      <footer className="absolute top-[90vh] flex items-center justify-center w-[100vw] bg-red-500 h-[10vh] underline">
        <a href="https://github.com/RayanEreteo/cutecat" target="_blank" className="underline text-white">Check the source code.</a>
      </footer>
    </>
  )
}