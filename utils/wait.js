module.exports = async function (n) {
  return new Promise((res, _) => {
    setTimeout(res, n);
  });
};
