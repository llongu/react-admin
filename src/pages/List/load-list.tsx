import React, { useState, useEffect, ReactElement } from "react"
import { List, Avatar, Button, Skeleton } from "antd"
import { listQuery } from "@services/list"

const SkeletonLoadingList = [
  { loading: true, name: {} },
  { loading: true, name: {} },
  { loading: true, name: {} }
]

export default (): ReactElement<HTMLElement> => {
  const [listState, setListState] = useState({
    moreloading: false,
    skeletonLoading: false,
    pageIndex: 1,
    pageSize: 10,
    list: []
  })
  useEffect(() => {
    let isUnInstall = false
    async function getData(): Promise<void> {
      try {
        const { pageIndex, pageSize } = listState
        const res: { list?: [] } = await listQuery({ pageIndex, pageSize })
        if (isUnInstall) return
        setListState({
          ...listState,
          moreloading: false,
          list: [...listState.list, ...(res.list || [])]
        })
      } catch (error) {
        console.warn(error)
      }
    }
    getData()
    return (): void => {
      isUnInstall = true
    }
  }, [listState.pageIndex])

  const onLoadMore = (): void => {
    setListState({
      ...listState,
      moreloading: true,
      list: [...listState.list, ...SkeletonLoadingList]
    })

    setTimeout(() => {
      setListState({
        ...listState,
        pageIndex: listState.pageIndex + 1
      })
    }, 1500)
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
