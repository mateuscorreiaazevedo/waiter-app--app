export async function delayedPromiseHelper(delayInMs = 1000) {
  await new Promise(resolve => setTimeout(resolve, delayInMs));
}
