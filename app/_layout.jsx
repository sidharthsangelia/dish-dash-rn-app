import { COLORS } from "@/constants/colors";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeScreen from "@/components/SafeScreen";


export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
        <StatusBar barStyle={"dark-content"} />
      </SafeScreen>
    </ClerkProvider>
  );
}
