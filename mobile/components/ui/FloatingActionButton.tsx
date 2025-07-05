import React from 'react';
import {
  Pressable,
  StyleSheet,
  Platform,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

import { IconSymbol, type IconSymbolName } from '@/components/ui/IconSymbol';
import { useThemeColor } from '@/hooks/useThemeColor';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface FloatingActionButtonProps {
  onPress: () => void;
  icon?: IconSymbolName;
  size?: number;
  position?: {
    bottom?: number;
    right?: number;
  };
  style?: StyleProp<ViewStyle>;
}

export function FloatingActionButton({
  onPress,
  icon = 'plus',
  size = 56,
  position = { bottom: 24, right: 20 },
  style,
}: FloatingActionButtonProps) {
  const scale = useSharedValue(1);
  
  const backgroundColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor(
    { light: '#fff', dark: '#151718' },
    'background'
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.9, { damping: 10, stiffness: 400 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 10, stiffness: 400 });
  };

  const handlePress = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };

  return (
    <AnimatedPressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.container,
        {
          backgroundColor,
          width: size,
          height: size,
          borderRadius: size / 2,
          bottom: position.bottom,
          right: position.right,
        },
        animatedStyle,
        style,
      ]}
    >
      <IconSymbol
        name={icon}
        size={size * 0.5}
        color={iconColor}
      />
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});