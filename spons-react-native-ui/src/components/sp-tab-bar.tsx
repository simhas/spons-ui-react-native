import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
export function SpTabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome6>['name'];
  color: string;
}) {
  return <FontAwesome6 size={24} style={{ marginBottom: -3 }} {...props} />;
}