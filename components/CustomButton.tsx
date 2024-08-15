import {TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface ButtonProps {
  title: string;
  handPress: () => void;
  containerStyles: string;
  textStyles?: string;
  isLoading?: boolean
}
const CustomButton = ({title, handPress, containerStyles, textStyles, isLoading}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handPress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center
      ${containerStyles} ${isLoading? 'opacity-50' : ''}`}
      disabled={isLoading}
      >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
