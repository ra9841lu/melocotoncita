"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Estas segura?",
      "Y si te lo pido bonito?",
      "Por favor",
      "Con un pastel de arroz con chocolate encima",
      "MELOCOTONA!",
      "Ploxx",
      "Pero :*(",
      "Se modera",
      "Bueno ya no te lo pido bonito",
      "Me muero",
      "Me mori",
      ":((((",
      "Por fa LINDAAA",
      "Sigo muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnByNmQ0Znl6NnNlaW91amV5eHJwOXFvODNyN2p5MDFjbHo3a3B5NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/toyYGNqDME5gI/giphy.gif" />
          <div className="my-4 text-4xl font-bold">Yei!!! Te amo Melocotoncita!! <3</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGo5YnZscjNxYmJoaDVuaDFreDA4YXFuYXM0eTRja2dwcXU0NzA2aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9rgVLYnPzzUpLsaaxN/giphy.gif"
          />
          <h1 className="my-4 text-4xl">¿Quieres ser mi san Valentín?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
