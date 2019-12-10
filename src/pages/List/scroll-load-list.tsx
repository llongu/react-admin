import React, { useState } from "react"
import { List, message, Avatar, Spin } from "antd"
import InfiniteScroll from "react-infinite-scroller"
import Styles from "./list.less"
const staticData = [
  {
    gender: "female",
    name: { title: "Miss", first: "Cathy", last: "Johnson" },
    email: "cathy.johnson@example.com",
    nat: "IE"
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Reinie", last: "Glas" },
    email: "reinie.glas@example.com",
    nat: "NL"
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Quinty", last: "Hemminga" },
    email: "quinty.hemminga@example.com",
    nat: "NL"
  },
  {
    gender: "male",
    name: { title: "Mr", first: "آرسین", last: "زارعی" },
    email: "arsyn.zraay@example.com",
    nat: "IR"
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Lillie", last: "Webb" },
    email: "lillie.webb@example.com",
    nat: "AU"
  }
]
const InfiniteListExample = () => {
  const [listState, setListState] = useState({
    data: [...staticData],
    loading: false,
    hasMore: true
  })

  const handleInfiniteOnLoad = () => {
    console.log("handleInfiniteOnLoad")
    let { data } = listState
    setListState({
      ...listState,
      loading: true
    })
    if (data.length > 50) {
      message.warning("Infinite List loaded all")
      setListState({
        ...listState,
        hasMore: false,
        loading: false
      })
      return
    }

    setTimeout(() => {
      data = data.concat(staticData)
      setListState({
        ...listState,
        data,
        loading: false
      })
    }, 2000)
  }

  return (
    <>
      <div className="demo-infinite-container">
        <InfiniteScroll initialLoad={true} pageStart={0} loadMore={handleInfiniteOnLoad} hasMore={!listState.loading && listState.hasMore} useWindow={false}>
          <List
            dataSource={listState.data}
            renderItem={(item, index) => (
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
