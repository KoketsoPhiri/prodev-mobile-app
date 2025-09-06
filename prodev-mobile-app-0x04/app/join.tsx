import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/_joinstyle";
import { Stack, router } from "expo-router";
import {
  HEROLOGOGREEN,
  GOOGLELOGO,
  FACEBOOKLOGO,
} from "@/constants";
import { Ionicons } from "@expo/vector-icons";

const Join = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <View style={styles.iconsection}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Image source={HEROLOGOGREEN} />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Join Prodev</Text>
          <Text style={styles.subText}>Create your account to continue</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Full name</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Email address</Text>
          <TextInput
            style={styles.formControl}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              secureTextEntry={!passwordShown}
            />
            <TouchableOpacity onPress={() => setPasswordShown(!passwordShown)}>
              <Ionicons
                name={passwordShown ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Sign Up with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('./signin')}>
            <Text style={styles.signupSubTitleText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Join;