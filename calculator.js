const args = process.argv.slice(2);

const a = Number(args[0]);
const op = args[1];
const b = Number(args[2]);

if (isNaN(a) || isNaN(b)) {
    console.log("Invalid input");
} else if (op === "+") {
    console.log(`${a} + ${b} = ${a + b}`);
} else if (op === "-") {
    console.log(`${a} - ${b} = ${a - b}`);
} else {
    console.log("Unsupported operation");
}
