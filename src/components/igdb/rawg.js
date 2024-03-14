export const rawg = async () => {
  const data = await fetch(
    "https://api.rawg.io/api/games?key=de544cd25a1f4401b89236f68dfc466d&page_size=10&metacritic=70,100&page_size=40&page=5",
    {
      next: {
        revalidate: 1,
      },
    },
  );
  return data.json();
};
