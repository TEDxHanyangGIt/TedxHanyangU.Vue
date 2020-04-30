import ApiMap from "../apimap";

function _promise(apiFunction, payload, store, constant) {
return new Promise((resolve, reject) => {
  apiFunction(payload)
    .then(resp => {
      store.commit(constant, resp.data);
      resolve(resp);
    })
    .catch(err => {
      reject(err);
    });
});
}

export default {
};