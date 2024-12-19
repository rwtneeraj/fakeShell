const root = "neerajsingh@Neerajs-MacBook-Pro ";
let path = "neerajsingh@Neerajs-MacBook-Pro /users/neerajSingh";
let currentDir = "/users/neerajSingh";

const echoCommmand = function (args) {
  return args.join("");
};

const changeDirectory = function (args) {
  if (args === "..") {
    currentDir = currentDir.split("/");
    currentDir.pop();
    currentDir = currentDir.join("/");
    args = "";
  }

  if (args === "~") {
    path = root;
    currentDir = "/users/neerajSingh";
    return;
  }

  path = root + currentDir + "/" + args;
  currentDir = currentDir + "/" + args;
  return;
};

const executeCommand = function (runCommand, args) {
  switch (runCommand) {
    case "echo": return echoCommmand(args);
    case "cd": return changeDirectory(args.join(""));
    case "pwd": return currentDir;

    default: return "nutshell : command not found";
  }
};

while (true) {
  const command = prompt(path + " %");
  const [runCommand, ...args] = command.split(' ');
  const result = executeCommand(runCommand, args);

  if (result !== undefined) {
    console.log(result);
  }
}
