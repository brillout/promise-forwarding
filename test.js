// https://stackoverflow.com/questions/40867345/catch-all-uncaughtexception-for-node-js-app/40867663#40867663
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection');
})
process.on('uncaughtException', err => {
  console.log('Uncaught Exception');
})

const p = Promise.reject(new Error('SomeError'))


// *** Promise forwarding ***
//*
p.catch(reject)
p.then(resolve)
/*/
p.then(resolve, reject)
//*/
function resolve() {
  console.log('resolve')
}
function reject(err) {
  console.log('reject', err.message)
  throw err
}


// *** User land ***
p.finally(() => {
  console.log('end')
})
/* This isn't a solution, because it completely swallows SomeError if the promise fowarding is removed.
.catch(() => {})
//*/
