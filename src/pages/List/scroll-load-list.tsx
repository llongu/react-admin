import React, { useState, ReactElement } from "react"
import { List, Avatar, Spin } from "antd"
import InfiniteScroll from "react-infinite-scroller"
import Styles from "./list.less"
import { list2Query } from "@services/list"
const InfiniteListExample = (): ReactElement<HTMLElement> => {
  const [listState, setListState] = useState({
    hasMore: true,
    list: [],
    pageIndex: 1,
    pageSize: 10
  })

  const handleInfiniteOnLoad = (): void => {
    setTimeout(async () => {
      try {
        const res: { list?: [] } = await list2Query({
          pageIndex: listState.pageIndex,
          pageSize: listState.pageSize
        })
        setListState({
          ...listState,
          list: [...listState.list, ...(res.list || [])],
          hasMore: listState.pageIndex < 3,
          pageIndex: listState.pageIndex + 1
        })
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    }, 1500)
  }

  return (
    <>
      <div className={Styles["demo-infinite-container"]}>
        <InfiniteScroll
          pageStart={1}
          loadMore={handleInfiniteOnLoad}
          hasMore={listState.hasMore}
          loader={
            <div className={Styles["demo-loading-container"]} key={0}>
              <Spin />
            </div>
          }
          useWindow={false}
        >
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
          />
        </InfiniteScroll>
      </div>
    </>
  )
}

export default InfiniteListExample
