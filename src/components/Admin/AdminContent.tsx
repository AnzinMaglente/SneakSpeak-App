import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Home,
  BarChart,
  PermMedia,
  Comment,
  Settings,
} from "@mui/icons-material";
import AdminHomeTab from "./AdminHomeTab";
import AdminStatsTab from "./AdminStatsTab";
import AdminMediaTab from "./AdminMediaTab";
import AdminCommentsTab from "./AdminCommentsTab";
import AdminSettingsTab from "./AdminSettingsTab";

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && (
        <Box sx={{ my: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function AdminContent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="relative h-160 px-30 flex-column justify-items-center bg-gradient-to-b from-white-2 from-1% via-secondary">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: 250,
          }}
        >
          <Tab
            icon={<Home />}
            iconPosition="start"
            label="Home"
            {...a11yProps(0)}
          />
          <Tab
            icon={<BarChart />}
            iconPosition="start"
            label="Stats"
            {...a11yProps(1)}
          />
          <Tab
            icon={<PermMedia />}
            iconPosition="start"
            label="Media"
            {...a11yProps(2)}
          />
          <Tab
            icon={<Comment />}
            iconPosition="start"
            label="Comments"
            {...a11yProps(3)}
          />
          <Tab
            iconPosition="start"
            icon={<Settings />}
            label="Settings"
            {...a11yProps(4)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AdminHomeTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AdminStatsTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AdminMediaTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AdminCommentsTab />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <AdminSettingsTab />
        </TabPanel>
      </Box>
    </main>
  );
}

export default AdminContent;
