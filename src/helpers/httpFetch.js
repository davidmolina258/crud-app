const httpFetch = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeaders = {
      accept: "application/json",
    };
    //cabezaras por defecto, acepta formato json

    const controller = new AbortController();
    options.signal = controller.signal;
    //controlar el tiempo de respuesta del servidor

    options.method = options.method || "GET";
    // si el objeto options trae le method vacio entonces usas GET

    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;
    //Las cabezeras por default

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;
    //si trae body se parsea string, si no se pasa a false y LEuGO Se ELIMINA

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            error: true,
            status: res.status || "Status 00",
            statusText: res.statusText || "Ocurrio un Error",
          }).catch((err) => err)
    );
  };
  const getData = (url, options = {}) => customFetch(url, options);

  const postData = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const putData = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  const delData = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    getData,
    postData,
    putData,
    delData,
  };
};
export default httpFetch;
