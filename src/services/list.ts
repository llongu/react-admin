import request from "@utils/request"

export async function listQuery(): Promise<object> {
  return request.post("api/list/query")
}
export async function list2Query(): Promise<object> {
  return request.get("api/list2/query")
}
