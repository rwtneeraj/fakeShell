const root = "nutshell";
const currentDirPath = "/users/neerajSingh";
let path = "nutshell /users/neerajSingh";
let currentDir = "/users/neerajSingh";
const directories = ["workspace", "js", "assignment"];
const [workspace, js, assignment] = [["file.js", "file2.js"],
["array1.js", "array2.js"], ["pattern1.js", "pattern2.js"]];
const files = [workspace, js, assignment];

function echoCommmand(args) {
  return args.join("");
}

const moveBack = function () {
  currentDir = currentDir.split("/");
  currentDir.pop();
  currentDir = currentDir.join("/");
  path = root + currentDir;
  return;
};

const reset = function () {
  path = root;
  currentDir = currentDirPath;
  return;
};

const changeDirectory = function (args) {
  if (args === "..") {
    return moveBack();
  }

  if (args === "~") {
    return reset();
  }

  if (directories.includes(args) && !args.endsWith(".js")) {
    path = root + currentDir + "/" + args;
    currentDir = currentDir + "/" + args;
    return;
  }

  return "No such directory";

};

const listStyleCommand = function () {
  const lastDir = currentDir.split("/").at(-1);
  const lastDirIndex = directories.indexOf(lastDir);

  if (lastDir === "neerajSingh") {
    return directories.join("  ");
  }

  return (files[lastDirIndex]).join("  ");
};

const touchCommand = function (args) {
  const lastDir = currentDir.split("/").at(-1);
  const lastDirIndex = directories.indexOf(lastDir);
  files[lastDirIndex].push(args);
};

const externalCommand = function (command, args) {
  switch (command) {
    case "ls": return listStyleCommand();
    case "touch": return touchCommand(args);
  }
};

const executeCommand = function (runCommand, args) {
  switch (runCommand) {
    case "echo": return echoCommmand(args);
    case "cd": return changeDirectory(args.join(""));
    case "pwd": return currentDir;

    default: return externalCommand(runCommand, args);
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