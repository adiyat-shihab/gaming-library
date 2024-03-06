import { twitch_Token } from "@/component/twitch_Token";

export const igdb = async () => {
  const token = await twitch_Token();
  return fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${token.access_token}`,
    },
    body: "fields *;",
  }).then((res) => res.json());
};
