import React, { useState, ReactElement } from "react"
import { List, Avatar, Button, Skeleton } from "antd"

const staticList: Array<object> = [
  { gender: "male", name: { title: "Mr", first: "آرمین", last: "موسوی" }, email: "armyn.mwswy@example.com", nat: "IR" },
  { gender: "male1", name: { title: "Mr", first: "آرمین", last: "موسوی" }, email: "armyn.mwswy@example.com", nat: "IR" },
  { gender: "male2", name: { title: "Mr", first: "آرمین", last: "موسوی" }, email: "armyn.mwswy@example.com", nat: "IR" }
]

const SkeletonLoadingList = [
  { loading: true, name: {} },
  { loading: true, name: {} },
  { loading: true, name: {} }
]
export default (): ReactElement<HTMLElement> => {
  const [listState, setListState] = useState({
    moreloading: false,
    skeletonLoading: false, //
    list: [...staticList]
  })

  const onLoadMore = (): void => {
    setListState({
      ...listState,
      moreloading: true,
      list: [...listState.list, ...SkeletonLoadingList]
    })

    // request
    setTimeout(() => {
      setListState({
        ...listState,
        moreloading: false,
        list: [...listState.list, ...staticList]
      })
    }, 2000)
  }

  const loadMore = (): ReactElement<HTMLElement> => {
    const { skeletonLoading, moreloading } = listState
    return !skeletonLoading && !moreloading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null
  }

  return (
    <List
      className="demo-loadmore-list"
      loading={listState.skeletonLoading}
      itemLayout="horizontal"
      loadMore={loadMore()}
      dataSource={listState.list}
      renderItem={(item: { loading?: boolean; name: { last?: string } }): ReactElement<HTMLElement> => (
        <List.Item actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}>
          <Skeleton avatar title={false} paragraph={{ rows: 3, width: [100, 200, 300] }} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  )
}
