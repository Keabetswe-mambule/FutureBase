//only 1 base instance is stored
let baseInstance = {};

const FutureBase = {
  //create JSON file to hold data
  createBase: (base_name) => {
    return new Promise((resolve, reject) => {
      if (somethingSuccesfulHappend) {
        resolve();
      } else {
        reject();
      }
    });
  },

  deleteBase: (base_name) => {
    return new Promise((resolve, reject) => {
      if (somethingSuccesfulHappend) {
        resolve();
      } else {
        reject();
      }
    });
  },

  //should accept path relating to object structure [to update and delete from a single path of a base]
  writeToBase: (base_path_string) => {
    return new Promise((resolve, reject) => {
      if (somethingSuccesfulHappend) {
        resolve();
      } else {
        reject();
      }
    });
  },

  //should accept path relating to object structure [to update and delete from multple paths of a base]
  writeMultipleToBase: (...comma_separated_list_of_paths_strings) => {
    return new Promise((resolve, reject) => {
      if (somethingSuccesfulHappend) {
        resolve();
      } else {
        reject();
      }
    });
  },

  //should accept path relating to object structure [to read from a single path of a base]
  readFromBase: (base_path_string) => {
    return new Promise((resolve, reject) => {
      if (somethingSuccesfulHappend) {
        resolve();
      } else {
        reject();
      }
    });
  },

  //should accept path relating to object structure [to read from multiple paths of a base]
  readMultipleFromBase: (...comma_separated_list_of_paths_strings) => {
    return new Promise((resolve, reject) => {
      if (somethingSuccesfulHappend) {
        resolve();
      } else {
        reject();
      }
    });
  },

  //returns an object with the structure of a base
  getBaseInstance(base_name) {
    return new Promise((resolve, reject) => {
      if (somethingSuccesfulHappend) {
        resolve(baseInstance);
      } else {
        reject();
      }
    });
  },

  //returns currently highlighted base
  getCurrentBase() {
    return new Promise((resolve, reject) => {
      if (baseInstance.current_base != null) {
        resolve(baseInstance.current_base);
      } else {
        reject("No base highlighted");
      }
    });
  },
};

modules.exports.FutureBase = FutureBase;
