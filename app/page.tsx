import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="">
          <div className="w-[100vw] h-[100%]  absolute -z-10 brightness-50" style={{ backgroundImage: `url(/background.jpg)` }}>
            asdasda
          </div>
        </div>
      </main>
      <footer className="absolute top-[90vh] flex items-center justify-center w-[100vw] bg-red-500 h-[10vh] underline">
        <a href="https://github.com/RayanEreteo/cutecat" target="_blank" className="underline text-white">Accéder au code source.</a>
      </footer>
    </>
  );
}