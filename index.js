const SQL = require("./lib/sql");

console.log(`Hello world, gonna try some database stuff`);

const db = new SQL("127.0.0.1", "root", "PASSWORD", "cactus");
db.select((error, results) => {
  if (error) {
    throw error;
  } else {
    for (let result of results) {
      console.log(`User is called: ${result.name}`);
    }
    process.exit();
  }
});
