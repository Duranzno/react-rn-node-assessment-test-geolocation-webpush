export async function getCandidates(
  url: string,
  callback: (candidates: string[]) => void,
): Promise<void> {
  try {
    const res = await fetch(url);
    const data = await res.text();
    const { candidates } = JSON.parse(data) as {
      candidates: string[];
    };
    callback(candidates);
    // steCandidates(data)
  } catch (error) {
    console.error(error);
    callback([]);
  }
}
