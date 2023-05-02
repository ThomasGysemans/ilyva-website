import type { Handle } from "@sveltejs/kit";
import redirect from "$lib/server/redirect";

export const handle: Handle = async ({ resolve, event }) => {  
  if (event.url.pathname === "/notion") {
    return redirect("https://ilyva.notion.site/88b5c7f2f8e1423a8e817f3fe3abfc30?v=33a6902f1da842798b3c2d26d8ac519b", 301);
  } else if (event.url.pathname === "/game") {
    return redirect("https://yoshiip.xyz/ilyva/html");
  }

  return resolve(event);
}