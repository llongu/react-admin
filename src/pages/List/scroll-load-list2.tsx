import React, { useState, ReactElement, useEffect } from "react"
import { List, Avatar, Spin } from "antd"
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
    if (!listState.hasMore) return
    try {
      const res: { list?: [] } = await list2Query()
      console.log(listState.hasMore)
      console.log(listState.list.length)
      setListState({
        ...listState,
        loading: false,
        hasMore: listState.list.length < 70,
        list: [...listState.list, ...(res.list || [])]
      })
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getData()
    return (): void => {
      console.warn("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀")
    }
  }, [listState.pageIndex])

  const handleInfiniteOnLoad = (): void => {
    // if (!listState.hasMore) return
    // setListState({
    //   ...listState,
    //   loading: true,
    //   pageIndex: listState.pageIndex + 1
    // })
    // setTimeout(() => {
    //   loading=true
    //   setTimeout(() => {
    //       loading=false
    //   }, 3000);
    // }, 3000);
  }

  return (
    <>
      <div className="demo-infinite-container">
        <InfiniteScroll initialLoad={true} pageStart={1} loadMore={handleInfiniteOnLoad} hasMore={!listState.loading && listState.hasMore} useWindow={false}>
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
