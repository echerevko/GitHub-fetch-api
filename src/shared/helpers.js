export const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    console.log(new Error(`Could not fetch ${url}, status ${response.status}`));
  }

  return await response.json();
};
