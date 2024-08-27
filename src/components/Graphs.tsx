import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { config } from "./config";
import { BarChart, PieChart } from "@mui/x-charts";

interface TabProps {
  label: string;
  value: string;
}

export default function Graphs() {
  return (
    <>
      <Grid container spacing={{ xs: 2, sm: 2, md: 2 }}>
        {config.tabs.map((tab) => (
          <Grid item xs={12} sm={6} md={4}>
            <Tabs label={tab.label} value={tab.value} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <PieGraph />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BarGraph />
        </Grid>
      </Grid>
    </>
  );
}

function PieGraph() {
  return (
    <Box
      borderRadius={3}
      boxShadow={3}
      mb="2ch"
      p="5ch"
      width={300}
      height={400}
    >
      <Typography variant="h4" fontSize="20px" fontWeight="bold">
        Current Download
      </Typography>
      <Typography variant="subtitle1">
        Downloaded by operating system
      </Typography>
      <PieChart
        colors={["#b9f6ca", "#69f0ae", "#00695c", "#004d40"]}
        series={[
          {
            data: [
              { id: 1, label: "Mac", value: 12244 },
              { id: 2, label: "Windows", value: 53345 },
              { id: 3, label: "iOS", value: 44313 },
              { id: 4, label: "Android", value: 78343 },
            ],

            innerRadius: "70%",
            outerRadius: "100%",
          },
        ]}
        width={300}
        height={300}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            padding: 1,
            itemMarkWidth: 10,
            itemMarkHeight: 10,
            markGap: 5,
            itemGap: 15,
            labelStyle: {},
          },
        }}
      ></PieChart>
    </Box>
  );
}
function BarGraph() {
  const Asia = {
    data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17],
    label: "Asia",
  };
  const Europe = {
    data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17],
    label: "Europe",
  };
  const Americas = {
    data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17],
    label: "Americas",
  };
  return (
    <Box
      borderRadius={3}
      boxShadow={3}
      mb="2ch"
      p="5ch"
      width={700}
      height={400}
    >
      {" "}
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="h4" fontSize="20px" fontWeight="bold">
            Area installed
          </Typography>
        </Grid>
        <Grid item xs={3} ml={20}>
          <Autocomplete
            size="small"
            defaultValue="2023"
            renderInput={(params) => <TextField {...params} />}
            options={config.years.map((year) => year.value)}
          />
        </Grid>
      </Grid>
      <BarChart
        borderRadius={10}
        colors={["#1b5e20", "#ffb300", "#2196f3"]}
        width={600}
        height={300}
        xAxis={[
          {
            scaleType: "band",
            data: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
        ]}
        grid={{ horizontal: true }}
        series={[
          { ...Asia, stack: "total" },
          { ...Europe, stack: "total" },
          { ...Americas, stack: "total" },
        ]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "left" },
            padding: 5,
            itemMarkWidth: 10,
            itemMarkHeight: 10,
            markGap: 5,
            itemGap: 15,
          },
        }}
      />
    </Box>
  );
}

function Tabs(props: TabProps) {
  const { label, value } = props;
  return (
    <Box
      textAlign="left"
      borderRadius={3}
      boxShadow={3}
      my="2ch"
      py="2ch"
      px="3ch"
    >
      <Typography py="2ch">{label}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Box>
  );
}
