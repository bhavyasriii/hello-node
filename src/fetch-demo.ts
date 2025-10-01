import axios from "axios";

async function main() {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      { timeout: 10_000 }
    );
    const firstThree=(res.data.slice(0,3).map((u:any)=> ({
        id: u.id,
        username: u.username,
        email: u.email,
        address: `${u.address.street}, ${u.address.suite}, ${u.address.city}, ${u.address.zipcode}`
    })
    ));

    console.table(firstThree);
  } catch (err: any) {
    console.error("Request failed:", err?.message ?? err);
  }
}

main();
