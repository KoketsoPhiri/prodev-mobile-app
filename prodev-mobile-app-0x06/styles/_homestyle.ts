// styles/_homestyle.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  // 🔎 Search Section
  searchGroup: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#F2F2F2",
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    fontSize: 14,
    color: "#555",
  },
  searchButton: {
    backgroundColor: "#FF385C",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  // 🏷️ Filters
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 20,
    justifyContent: "center",
  },

  // 🏠 Listings
  listingContainer: {
    flex: 1,
    padding: 16,
  },

  // 📖 Pagination
  paginationContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#FF385C",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  showMoreButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});
