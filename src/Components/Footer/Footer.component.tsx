import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router";

const navigationContainer = {
  width: "100vw",
  background: "#04293A",
  position: "fixed",
  bottom: 0,
};
const iconStyle = {
  color: "white",
  "&.Mui-selected": {
    color: "#ECB365",
  },
};
const routes:Array<string> = [
    '/',
    '/movies',
    '/tvseries',
    '/search'
]

export default function Footer() {
  const [value, setValue] = useState<any>(0);
  const history = useHistory();
  useEffect(() => {
     history.push(`${routes[value]}`)
  }, [value])
  return (
    <BottomNavigation
      sx={navigationContainer}
      showLabels
      value={value}
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        newValue: any
      ) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label='Trending'
        icon={<WhatshotIcon />}
        sx={iconStyle}
      />
      <BottomNavigationAction
        label='Movies'
        icon={<MovieIcon />}
        sx={iconStyle}
      />
      <BottomNavigationAction
        label='Tv series'
        icon={<TvIcon />}
        sx={iconStyle}
      />
      <BottomNavigationAction
        label='Search'
        icon={<SearchIcon />}
        sx={iconStyle}
      />
    </BottomNavigation>
  );
}
