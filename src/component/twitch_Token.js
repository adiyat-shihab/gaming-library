export const twitch_Token = async () => {
  return await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
    },
  ).then((res) => res.json());
};
