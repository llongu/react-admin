import request from "@utils/request"

export async function tableQuery(): Promise<object> {
  return request.post("api/table/query")
}
