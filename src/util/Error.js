function TypeError (expectedType, realType) {
  console.error(new Error(`[TypeError] need a ${expectedType}, got a ${realType}.`))
}

export {
  TypeError
}