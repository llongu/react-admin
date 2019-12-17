import React, { useState, ReactElement, useEffect } from "react"
import { List, message, Avatar, Spin } from "antd"
import InfiniteScroll from "react-infinite-scroller"
import Styles from "./list.less"
import { list2Query } from "@services/list"

const InfiniteListExample = (): ReactElement<HTMLElement> => {
  const [listState, setListState] = useState({
    pageIndex: 1,
    pageSize: 10,
    list: [],
    loading: false,
    hasMore: true
  })

  async function getData(): Promise<void> {
    try {
      const res: { list?: [] } = await list2Query()
      setListState({
        ...listState,
        loading: false,
        list: [...listState.list, ...(res.list || [])]
      })
      console.log(res)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    getData()
  }, [listState.pageIndex])

  const handleInfiniteOnLoad = (): void => {
    setListState({
      ...listState,
      loading: true
    })
    if (listState.list.length > 50) {
      message.warning("Infinite List loaded all")
      setListState({
        ...listState,
        hasMore: false,
        loading: false
      })
      return
    }

    // setTimeout(() => {
    //   setListState({
    //     ...listState,
    //     pageIndex: listState.pageIndex + 1
    //   })
    // }, 1500)
  }

  return (
    <>
      <div className="demo-infinite-container">
        <InfiniteScroll initialLoad={true} pageStart={0} loadMore={handleInfiniteOnLoad} hasMore={!listState.loading && listState.hasMore} useWindow={false}>
          <List
            dataSource={listState.list}
            renderItem={(item, index): ReactElement<HTMLElement> => (
              <List.Item key={index}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {listState.loading && listState.hasMore && (
              <div className={Styles["demo-loading-container"]}>
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default InfiniteListExample
