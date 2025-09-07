// styles/_joinstyles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // 🔙 Top navigation group
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    justifyContent: "flex-start",
    gap: 10,
  },

  // 📝 Texts
  largeText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
  },
  smallText: {
    fontSize: 14,
    color: "#7E7B7B",
    marginTop: 8,
    marginBottom: 20,
  },

  // 📋 Form
  formGroup: {
    marginTop: 10,
    marginBottom: 30,
  },
  placeholderText: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333333",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: "#F9F9F9",
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#F9F9F9",
  },

  // 🔘 Main button
  button: {
    backgroundColor: "#34967C",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  // ➖ Divider
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#7E7B7B",
    fontSize: 13,
  },

  // 🌐 Social buttons
  socialMediaButtonGroup: {
    gap: 12,
    marginBottom: 30,
  },
  socialMediaButton: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  socialMediaButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },

  // 📌 Sub text
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  subText: {
    fontSize: 14,
    color: "#7E7B7B",
  },
  subTextJoin: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34967C",
  },
});
