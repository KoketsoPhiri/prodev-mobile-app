import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50
  },
  searchGroup: {
    paddingTop: 10,
    paddingBottom: 25,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#EBEBEB",
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    width: width - 40,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "600",
  },
  searchControl: {
    fontSize: 12,
    fontWeight: "400",
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: "#34967C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    columnGap: 30,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 8,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  showMoreButton: {
    backgroundColor: "#202020",
    height: 50,
    width: 150,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  showMoreButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
});

export { styles };