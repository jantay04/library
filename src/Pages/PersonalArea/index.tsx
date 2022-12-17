import { Box, Typography, Tabs, Tab } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import Profile from "./Profile";

type Props = {};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 4 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function PersonalArea({}: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-6xl mx-auto p-8  my-20 min-h-screen border shadow-lg rounded-lg">
      <>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={
                <div>
                  <AccountCircleIcon /> Личный пользователь
                </div>
              }
              sx={{ textTransform: "capitalize" }}
              {...a11yProps(0)}
            />
            <Tab
              label={
                <div>
                  <FavoriteIcon /> Мои книги
                </div>
              }
              sx={{ textTransform: "capitalize" }}
              {...a11yProps(1)}
            />
            <Tab
              label={
                <div>
                  <HistoryIcon />
                  Мои истории поисков
                </div>
              }
              sx={{ textTransform: "capitalize" }}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
         <Profile/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} >
          Item Three
        </TabPanel>
      </>
    </div>
  );
}

export default PersonalArea;
