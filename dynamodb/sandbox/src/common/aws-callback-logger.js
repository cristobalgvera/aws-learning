export function callbackLogger(err, data) {
  if (err) console.error(err, err.stack);
  else console.log(JSON.stringify(data, null, 2));
}
