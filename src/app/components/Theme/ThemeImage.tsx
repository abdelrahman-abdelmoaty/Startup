"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

function ThemedImage() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/light.png";
      break;
    case "dark":
      src = "/dark.png";
      break;
    default:
      src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }

  return <Image width="100" height="100" src={src} alt={""} />;
}

export default ThemedImage;
