import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface PostType {
  posts: [{ id: number }]
}
const Trending = ({ posts }: PostType) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => (
        <Text className='text-3xl text-white'>{item.id}</Text>
      )
      }
      horizontal
    />
  )
}

export default Trending
