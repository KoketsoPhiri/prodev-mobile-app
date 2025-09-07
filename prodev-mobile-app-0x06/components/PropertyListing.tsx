// components/PropertyListing.tsx
import React from "react";
import { View, FlatList } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";

interface PropertyListingProps {
  listings: any[];
}

const PropertyListing: React.FC<PropertyListingProps> = ({ listings }) => {
  return (
    <FlatList
      data={listings}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <PropertyListingCard property={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default PropertyListing;
