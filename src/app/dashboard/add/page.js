"use client";
import AddProfilePage from "@/template/AddProfilePage";
import React, { useState } from "react";

function AddProfile() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  return <AddProfilePage />;
}

export default AddProfile;
