/*
Challenge
Your challenge is to figure out how to update the return type annotations
to make TypeScript happy.
*/

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });
  console.log(data.name);

  return data;
};

// OR

export const fetchLukeSkywalkerX = async () => {
  const data: LukeSkywalker = await fetch(
    "https://swapi.dev/api/people/1"
  ).then((res) => {
    return res.json();
  });
  console.log(data);

  return data as LukeSkywalker; // casting data as LukeSkywalker
};
