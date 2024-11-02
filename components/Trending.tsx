import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Card from './Cards'

interface PostType {
  posts: { id: number }[]
}
const Trending = ({ posts }: PostType) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => (
       <Card post={item} />
      )
      }
      horizontal
    />
  )
}

export default Trending
