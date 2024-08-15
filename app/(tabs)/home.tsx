import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefersh = () => {
    setRefreshing(true)
    // recal videos to -> if any new videos are posted
    setRefreshing(false)
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[{ $id: 1 }, { $id: 2 }, { $id: 3 }]}
        // data={[]}
        keyExtractor={(item) => item.$id.toString()}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item.$id}</Text>
        )
        }
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>Welcome Back</Text>
                <Text className='text-2xl font-psemibold text-white'>LEO</Text>
              </View>
              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput />
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefersh} />}
      />
      <StatusBar />
    </SafeAreaView>
  )
}

export default Home
