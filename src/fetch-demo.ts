import axios from "axios";

async function main() {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      { timeout: 10_000 }
    );

    console.log("Total users fetched:", res.data.length);

  } catch (err: any) {
    console.error("Request failed:", err?.message ?? err);
  }
}

main();
