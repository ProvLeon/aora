import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants';

interface FormFieldProp {
  title: string;
  value: string;
  [key: string]: any
}

const SearchInput = ({title, value, handleTextChange, otherStyles, ...props}: FormFieldProp) => {
  const [showPassword, setShowPassword ] = useState(false)

  return (

      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
        <TextInput
        className='mt-0.5 flex-1 text-white text-base font-pregular'
        value={value}
        placeholder="Sarch for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleTextChange}
        secureTextEntry={ title === "Password" && !showPassword}
        />
        <TouchableOpacity>
          <Image
            source={icons.search}
            className='w-5 h-5'
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput
