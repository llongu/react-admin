import request from "@utils/request"

export async function listQuery<T>(params: T): Promise<object> {
  return request.post("api/list/qusery", { data: { ...params } })
}
export async function list2Query<T>(params: T): Promise<object> {
  return await request.post("api/list2/query", { data: { ...params } })
}
