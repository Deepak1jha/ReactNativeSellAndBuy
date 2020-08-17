import React from 'react';
import LottieView from 'lottie-react-native';

export default function ActivityIndicator({visible = true}) {

  if (!visible) return null

  return (
    <LottieView
      source={require("../../../assets/animation/loading/loading.json")}
      autoPlay
      loop
    />
  )
}
