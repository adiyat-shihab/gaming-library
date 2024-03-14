"use client";
import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({ children }) => {
  // useEffect(() => {
  //   customCurses().then((library) => {
  //     const { Cursor, Pointer, initializeCanvas } = library;
  //     const pointer1 = new Pointer({
  //       pointerShape: ["image", "./public/pointer.webp"],
  //       size: 50,
  //       drag: 0.1,
  //       xCharOffset: 9,
  //       yCharOffset: 40,
  //       rotation: -40,
  //       xOffset: 0,
  //       yOffset: 0,
  //     });
  //
  //     const cursor1 = new Cursor({
  //       pointers: [pointer1],
  //       drag: 0, //where 1 is max
  //       hideMouse: true,
  //     });
  //
  //     let canvasLol = initializeCanvas(cursor1);
  //   });
  // }, []);
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
