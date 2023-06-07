import { json, type RequestHandler } from "@sveltejs/kit";
import { DISCORD_TOKEN } from "$env/static/private";

interface Result {
  userId: string;
  url: string;
}

export const GET: RequestHandler = async ({ url }) => {
  try {
    if (!url.searchParams.has("ids")) {
      return new Response("Aucune image à fetch.", { status: 400 });
    }
    const ids = url.searchParams.get("ids")!.split(',');
    const result: Result[] = [];
    for (const id of ids) {
      const res = await fetch(`https://discord.com/api/v10/users/${id}`, {
        headers: {
          authorization: `Bot ${DISCORD_TOKEN}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        const url = `https://cdn.discordapp.com/avatars/${id}/${data.avatar}.png`;
        result.push({
          userId: id,
          url
        });
      }
    }
    return json(result);
  } catch (e) {
    return new Response("Erreur inattendue du serveur.", { status: 500 });
  }
}