let path = "neerajsingh@Neerajs-MacBook-Pro ";
let currentDir = "users/neerajSingh";

const echoCommmand = function (args) {
  return args.join("");
};

const cdCommand = function (args) {
  currentDir += "/" + args;
  path = path + " " + currentDir + " %";
};

while (true) {
  const command = prompt(path + currentDir + " %");
  const [runCommand, ...args] = command.split(' ');


  const executeCommand = function (runCommand, args) {
    switch (runCommand) {
      case "echo": return echoCommmand(args);
      case "cd": return cdCommand(args.join(""));
      case "pwd": return currentDir;

      default : return "zsh : command not found";
    }
  };

  console.log(executeCommand(runCommand, args));
}
