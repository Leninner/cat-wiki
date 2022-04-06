export const getCatsInfo = async () => {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
    headers: {
      'x-api-key': '274f31b1-d8a7-43dd-855c-cd91492b85b1',
    },
  });

  const data = await response.json();

  return data;
};
