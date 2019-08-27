// The API object contains methods for each kind of request we'll make
let databases = ['places', 'users', 'comments'];
var API = {};


for (let i in databases) {

  API[`create-${databases[i]}`] = function (formData) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: `api/${databases[i]}`,
      data: JSON.stringify(formData)
    });
  };

  API[`read-${databases[i]}`] = function () {
    return $.ajax({
      url: `api/${databases[i]}`,
      type: "GET"
    });
  };
  
  API[`find-${databases[i]}`] = function (search) {
    return $.ajax({
      url: `api/${databases[i]}/find/${search}`,
      type: "GET"
    });
  };

  API[`update-${databases[i]}`] = function (id, update) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: `api/${databases[i]}/${id}`,
      data: JSON.stringify(update)
    });
  };

  API[`delete-${databases[i]}`] = function (id) {
    return $.ajax({
      url: `api/${databases[i]}/` + id,
      type: "DELETE"
    });
  };
};

module.exports = API;