import React from "react"
import { mount } from "enzyme"
import LoadList from "@/pages/List/load-list"
import ScrollLoadList, { handleInfiniteOnLoad } from "@/pages/List/scroll-load-list"
import { act } from "react-dom/test-utils"
import { listQuery, list2Query } from "@services/list"

describe("<LoadList/>", () => {
  const wrapper = mount(<LoadList />)
  const wrapper2 = mount(<ScrollLoadList />)
  function sleep(time) {
    return new Promise(reslove => {
      setTimeout(() => {
        reslove(true)
      }, time)
    })
  }

  it("test LoadList", async done => {
    await act(() => listQuery({ pageIndex: 1, pageSize: 10 }))
    expect(wrapper.find("List")).toHaveLength(1)
    wrapper.find("button#loadMoreBtn").simulate("click")
    await act(() => sleep(1500))
    done()
  })

  it("test ScrollLoadList", async done => {
    expect(wrapper2.find("InfiniteScroll")).toHaveLength(1)
    expect(wrapper2.find("List")).toHaveLength(1)
    handleInfiniteOnLoad(
      {
        pageIndex: 1,
        pageSize: 10,
        list: []
      },
      () => {},
      false
    )
    await act(() => sleep(1500))
    await act(() => list2Query({ pageIndex: 1, pageSize: 10 }))

    done()
  })
})
