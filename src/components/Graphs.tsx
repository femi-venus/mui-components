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
      <Grid container px={2} spacing={2}>
        {config.tabs.map((tab) => (
          <Grid item xs={12} sm={4} md={6}>
            <Tabs label={tab.label} value={tab.value} />
          </Grid>
        ))}
        <Grid item xs={12} sm={4} md={6}>
          <PieGraph />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
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
      p="4ch"
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
          
          },
        }}
      >
        <Typography variant="subtitle1" color="grey" fontSize="10px">Total</Typography>
        <Typography variant="h4" fontSize="10px">188,245</Typography>
      </PieChart>
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
        borderRadius={5}
        colors={["#1b5e20", "#ffb300", "#2196f3"]}
        width={600}
        height={400}
        yAxis={[
          {
            min: 10,
            max: 100,
          },
        ]}
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
            
            tickSize:0,
            
          },
        ]}
        grid={{ horizontal: true }}
        series={[
          { ...Asia, stack: "total"},
          { ...Europe, stack: "total" },
          { ...Americas, stack: "total" },
        ]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "left" },
            padding:{top:-10},
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
