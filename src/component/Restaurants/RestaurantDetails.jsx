import React, { useState } from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";

const categories = ["pizza", "biryani", "burger", "dosa", "cake"];
const selectedFoodType = [
  { label: "All", value: "all" },
  { label: "Veg Only", value: "veg" },
  { label: "Non Veg", value: "non veg" },
  { label: "Seasonal", value: "seasonal" },
];

const menu = [1,1,1,1,1];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10 ">
          Home/india/indian fast food/3
        </h3>
        <div>
          <Grid2 container spacing={2}>
            <Grid2 item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
            </Grid2>
            <Grid2 item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1560657/pexels-photo-1560657.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
            </Grid2>
            <Grid2 item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
            </Grid2>
          </Grid2>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
          <p className="text-gray-500 mt-1">
            Experience the flavors of India at Tasty Tadka, your go-to
            destination for delicious and authentic Indian fast food. Our menu
            features a range of mouth-watering dishes, from spicy curries to
            flavorful biryanis, and from crispy naan bread to savory street food
            snacks. Whether you're in the mood for a quick lunch or a satisfying
            dinner, our fast and friendly service ensures that you'll be in and
            out in no time. Come taste the difference at Tasty Tadka!
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex item-center gap-3">
              <LocationOnIcon />
              <span>Dhanbad, Jharkhand</span>
            </p>
            <p className="text-gray-500 flex item-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="lg:w-[20%] filter space-y-10">
          <div className="box space-y-5 lg:sticky top-28 p-5 shadow-md">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {selectedFoodType.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Categories
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="lg:w-[80%] lg:pl-10 space-y-5">
          {menu.map((item)=><MenuCard/> )}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
