
const path = "neerajsingh@Neerajs-MacBook-Pro";

const echoCommmand = function (args) {
  return args;
};

const cdCommand = function (args) {
  return path + " /" + args + " %";
};

while (true) {
  const command = prompt(path);
  const [runCommand, ...args] = command.split(' ');

  const executeCommand = function (runCommand, args) {
    switch (runCommand) {
      case "echo": return echoCommmand(args);
      case "cd": return cdCommand(args);
      case "pwd": return path;
    }
  };

  console.log(executeCommand(runCommand, args));
}
