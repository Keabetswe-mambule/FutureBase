//only 1 base instance is stored
import { access, readFile, writeFile } from "fs";

let baseInstance = {};

const FutureBase = {
  //create JSON file to hold data
  createBase: (base_name) => {
    return new Promise((resolve, reject) => {
      try {
        //check if base exists if exists return error else create one
        access(`base/${base_name}.json`, (err) => {
          if (!err) {
            reject(`${base_name} already exists`);
          } else {
            //create json file to store data
            writeFile(
              `base/${base_name}.json`,
              `{"base_name":"${base_name}"}`,
              (err) => {
                if (err) {
                  reject(`${base_name} creation failed ${err}`);
                } else {
                  //captcher base instance from base
                  readFile(`base/${base_name}.json`, "utf8", (err, data) => {
                    if (err) {
                      reject(`${base_name} creation failed ${err}`);
                    } else {
                      baseInstance = JSON.parse(data);
                      resolve(`${base_name} created`);
                    }
                  });
                }
              }
            );
          }
        });
      } catch (err) {
        return new Promise((resolve, reject) => {
          reject(`${base_name} creation failed ${err}`);
        });
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
      if (baseInstance.base_name != null) {
        resolve(baseInstance.base_name);
      } else {
        reject("No base highlighted");
      }
    });
  },
};

FutureBase.createBase("recipes")
  .then((res) => {
    console.log(`${res} created`);
    FutureBase.getCurrentBase()
      .then((res) => {
        console.log(`${res} is now highlighted`);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

//const _FutureBase = FutureBase;
//export { _FutureBase as FutureBase };
