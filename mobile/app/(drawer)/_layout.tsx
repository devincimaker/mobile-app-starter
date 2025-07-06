import { Drawer } from "expo-router/drawer";
import {
  DrawerToggleButton,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useSession } from "@/hooks/useSession";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { signOut } = useSession();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        icon={({ color, size }) => (
          <Ionicons name="log-out-outline" size={size} color={color} />
        )}
        onPress={signOut}
        style={{ marginTop: "auto" }}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerLeft: DrawerToggleButton,
        drawerType: "slide",
        drawerPosition: "left",
        drawerStyle: { width: 260 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "",
          drawerLabel: "Home",
          drawerIcon: ({ size, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} />
          ),
        }}
      />{" "}
    </Drawer>
  );
}
