import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const ingredients = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Ground Beef", "Bacon Strips"],
  },
  {
    category: "Bread",
    ingredients: ["Hamburger Buns"],
  },
  {
    category: "Vegetable",
    ingredients: ["Lettuce", "Tomato Slices", "Pickles", "Onion Slices"],
  },
  {
    category: "Condiment",
    ingredients: ["Ketchup"],
  },
];

const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log("value");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>₹499</p>
              <p className="text-gray-400">
                A hamburger or simply burger is a food consisting of
                fillings—usually a patty of ground meat, typically beef-placed
                inside a sliced bun or bread roll
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="grid grid-cols-2 gap-5">
            {ingredients.map((item) => (
              <div key={item.category}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  {item.category}
                </Typography>
                <FormGroup>
                  {item.ingredients.map((ingredient) => (
                    <FormControlLabel
                      // key={ingredient}
                      control={
                        <Checkbox onChange={() => handleCheckBoxChange(item)} />
                      }
                      label={ingredient}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="lg:flex items-center justify-left">
            <Button
              className="pt-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              variant="contained"
              type="submit"
            >
              {true ? "Add to Cart" : "Out Of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
