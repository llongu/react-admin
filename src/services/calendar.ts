import request from "@utils/request"

export async function calendarQuery<T>(params?: T): Promise<object> {
  return request.post("api/calendar/query", { data: { ...params } })
}

export async function calendarAddDay<T>(params?: T): Promise<object> {
  return request.post("api/calendar/addDay", { data: { ...params } })
}
