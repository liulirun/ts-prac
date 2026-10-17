type NetworkError = {
  code: "TIMEOUT" | "SERVER_ERROR";
  message: string;
}
type ValidationError = {
  code: "VALIDATION_FAILED";
  fields: Record<string, string>;
}
export type AsyncState<Data> =
  | { status: "idle" }
  | { status: "success", data: Data }
  | { status: "error", error: NetworkError | ValidationError }

function handleApiResponseNoExtends<T>(state: AsyncState<T>): string {
  switch (state.status) {
    case "success":
      return `Loaded at ${JSON.stringify(state.data)}`
    //不可以
    // return `Loaded at ${JSON.stringify(state.data.name)}`
    case "error":
      return `There is error, code = ${state.error.code}`
  }
  return "not implemented";
}

function handleApiResponseWithExtend<T extends { address: string }>(state: AsyncState<T>): string {
  switch (state.status) {
    case "success":
      return `Loaded for ${JSON.stringify(state.data.address)}`
    case "error":
      return `There is error, code = ${state.error.code} `
  }
  return "not implemented";
}

const successState: AsyncState<{ address: string }> = {
  status: 'success',
  data: { address: "Toronto" }
}

const errorState: AsyncState<{}> = {
  status: 'error',
  error: { code: "TIMEOUT", message: "check" }
  // data: { address: "Toronto" }
};

console.log(handleApiResponseNoExtends(successState));
console.log(handleApiResponseWithExtend(successState));
console.log(handleApiResponseNoExtends(errorState));