type Id = number | string;

interface User {
  id: Id;
  name: string;
  active?: boolean; // optional
}

function greet(u: User) {
  return `Hello, ${u.name}${u.active ? ' 👋' : ''}`;
}

async function wait(ms: number): Promise<void> {
  return new Promise(res => setTimeout(res, ms));
}

async function main() {
  const u: User = { id: 1, name: 'Sai', active: true };
  console.log(greet(u));
  await wait(200);
  console.log('done');
  console.log('start');
  console.table([{ userId: 1, name: 'Bhavya', count:2}, {userId: 2, name: 'Sangavi', count:1}])
  console.time("work");
  for (let i=0; i<1e6; i++) {}
  console.timeEnd("work")
  console.error("something went wrong(demo)");
}
main();
