import { ResponsiveSankey } from '@nivo/sankey'


const data = {
  "nodes": [
    {
      "id": "ANR",
      "color": "#f7cad2",
      "value": 1,
    },
    {
      "id": "H2020",
      "color": "#fcabb9",
      "value": 2,
    },
    {
      "id": "PCRDT",
      "color": "#f96d85",
      "value": 3,
    },
    {
      "id": "Innov.-2030",
      "color": "#fe4061",
      "value": 4,
    },
    {
      "id": "Plus-de-10-M€",
      "color": "#def7eb",
      "value": 1,
    },
    {
      "id": "De-5-à-10-M€",
      "color": "#bfefd8",
      "value": 2,
    },
    {
      "id": "De-1-à-5-M€",
      "color": "#96e8c0",
      "value": 3,
    },
    {
      "id": "De-0,5-à-1-M€",
      "color": "#67e0a5",
      "value": 4,
    },
    {
      "id": "De-0,1-à-0,5-M€",
      "color": "#3fd08b",
      "value": 5,
    },
    {
      "id": "Moins-de-100000€",
      "color": "#e3fcf0",
      "value": 6,
    },
    {
      "id": "60-mois-et-plus",
      "color": "#fcd9c2"
    },
    {
      "id": "De-48-à-60-mois",
      "color": "#fcc29c"
    },
    {
      "id": "De-30-à-48-mois",
      "color": "#fcac76"
    },
    {
      "id": "De-24-à-30-mois",
      "color": "#fc9550"
    },
    {
      "id": "Moins-de-24-mois",
      "color": "#fe8027"
    },
    {
      "id": "Plus-de-10-struct.",
      "color": "#fcf4d1"
    },
    {
      "id": "De-5-à-10-struct.",
      "color": "#fceda9"
    },
    {
      "id": "De-2-à-5-struct.",
      "color": "#fce064"
    },
    {
      "id": "1-struct.",
      "color": "#ffd100"
    },
  ],
  "links": [
    {
      "source": "ANR",
      "target": "Plus-de-10-M€",
      "value": 100
    },
    {
      "source": "ANR",
      "target": "De-5-à-10-M€",
      "value": 50
    },
    {
      "source": "ANR",
      "target": "De-1-à-5-M€",
      "value": 60
    },
    {
      "source": "ANR",
      "target": "De-0,5-à-1-M€",
      "value": 70
    },
    {
      "source": "ANR",
      "target": "De-0,1-à-0,5-M€",
      "value": 20
    },
    {
      "source": "ANR",
      "target": "Moins-de-100000€",
      "value": 50
    },
    {
      "source": "H2020",
      "target": "Plus-de-10-M€",
      "value": 80
    },
    {
      "source": "H2020",
      "target": "De-5-à-10-M€",
      "value": 100
    },
    {
      "source": "H2020",
      "target": "De-1-à-5-M€",
      "value": 60
    },
    {
      "source": "H2020",
      "target": "De-0,5-à-1-M€",
      "value": 20
    },
    {
      "source": "H2020",
      "target": "De-0,1-à-0,5-M€",
      "value": 60
    },
    {
      "source": "H2020",
      "target": "Moins-de-100000€",
      "value": 50
    },
    {
      "source": "PCRDT",
      "target": "Plus-de-10-M€",
      "value": 100
    },
    {
      "source": "PCRDT",
      "target": "De-5-à-10-M€",
      "value": 50
    },
    {
      "source": "PCRDT",
      "target": "De-1-à-5-M€",
      "value": 20
    },
    {
      "source": "PCRDT",
      "target": "De-0,5-à-1-M€",
      "value": 10
    },
    {
      "source": "PCRDT",
      "target": "De-0,1-à-0,5-M€",
      "value": 50
    },
    {
      "source": "PCRDT",
      "target": "Moins-de-100000€",
      "value": 0
    },
    {
      "source": "Innov.-2030",
      "target": "Plus-de-10-M€",
      "value": 100
    },
    {
      "source": "Innov.-2030",
      "target": "De-5-à-10-M€",
      "value": 50
    },
    {
      "source": "Innov.-2030",
      "target": "De-1-à-5-M€",
      "value": 50
    },
    {
      "source": "Innov.-2030",
      "target": "De-0,5-à-1-M€",
      "value": 30
    },
    {
      "source": "Innov.-2030",
      "target": "De-0,1-à-0,5-M€",
      "value": 10
    },
    {
      "source": "Innov.-2030",
      "target": "Moins-de-100000€",
      "value": 10
    },
    {
      "source": "Plus-de-10-M€",
      "target": "60-mois-et-plus",
      "value": 140
    },
    {
      "source": "Plus-de-10-M€",
      "target": "De-48-à-60-mois",
      "value": 50
    },
    {
      "source": "Plus-de-10-M€",
      "target": "De-30-à-48-mois",
      "value": 40
    },
    {
      "source": "Plus-de-10-M€",
      "target": "De-24-à-30-mois",
      "value": 20
    },
    {
      "source": "Plus-de-10-M€",
      "target": "Moins-de-24-mois",
      "value": 30
    },
    {
      "source": "De-5-à-10-M€",
      "target": "60-mois-et-plus",
      "value": 100
    },
    {
      "source": "De-5-à-10-M€",
      "target": "De-48-à-60-mois",
      "value": 40
    },
    {
      "source": "De-5-à-10-M€",
      "target": "De-30-à-48-mois",
      "value": 30
    },
    {
      "source": "De-5-à-10-M€",
      "target": "De-24-à-30-mois",
      "value": 20
    },
    {
      "source": "De-5-à-10-M€",
      "target": "Moins-de-24-mois",
      "value": 10
    },
    {
      "source": "De-1-à-5-M€",
      "target": "60-mois-et-plus",
      "value": 20
    },
    {
      "source": "De-1-à-5-M€",
      "target": "De-48-à-60-mois",
      "value": 20
    },
    {
      "source": "De-1-à-5-M€",
      "target": "De-30-à-48-mois",
      "value": 10
    },
    {
      "source": "De-1-à-5-M€",
      "target": "De-24-à-30-mois",
      "value": 20
    },
    {
      "source": "De-1-à-5-M€",
      "target": "Moins-de-24-mois",
      "value": 50
    },
    {
      "source": "De-0,5-à-1-M€",
      "target": "60-mois-et-plus",
      "value": 50
    },
    {
      "source": "De-0,5-à-1-M€",
      "target": "De-48-à-60-mois",
      "value": 10
    },
    {
      "source": "De-0,5-à-1-M€",
      "target": "De-30-à-48-mois",
      "value": 20
    },
    {
      "source": "De-0,5-à-1-M€",
      "target": "De-24-à-30-mois",
      "value": 60
    },
    {
      "source": "De-0,5-à-1-M€",
      "target": "Moins-de-24-mois",
      "value": 30
    },
    {
      "source": "De-0,1-à-0,5-M€",
      "target": "60-mois-et-plus",
      "value": 10
    },
    {
      "source": "De-0,1-à-0,5-M€",
      "target": "De-48-à-60-mois",
      "value": 10
    },
    {
      "source": "De-0,1-à-0,5-M€",
      "target": "De-30-à-48-mois",
      "value": 20
    },
    {
      "source": "De-0,1-à-0,5-M€",
      "target": "De-24-à-30-mois",
      "value": 30
    },
    {
      "source": "De-0,1-à-0,5-M€",
      "target": "Moins-de-24-mois",
      "value": 30
    },
    {
      "source": "Moins-de-100000€",
      "target": "60-mois-et-plus",
      "value": 20
    },
    {
      "source": "Moins-de-100000€",
      "target": "De-48-à-60-mois",
      "value": 40
    },
    {
      "source": "Moins-de-100000€",
      "target": "De-30-à-48-mois",
      "value": 30
    },
    {
      "source": "Moins-de-100000€",
      "target": "De-24-à-30-mois",
      "value": 10
    },
    {
      "source": "Moins-de-100000€",
      "target": "Moins-de-24-mois",
      "value": 20
    },
    {
      "source": "60-mois-et-plus",
      "target": "Plus-de-10-struct.",
      "value": 50
    },
    {
      "source": "60-mois-et-plus",
      "target": "De-5-à-10-struct.",
      "value": 50
    },
    {
      "source": "60-mois-et-plus",
      "target": "De-2-à-5-struct.",
      "value": 50
    },
    {
      "source": "60-mois-et-plus",
      "target": "1-struct.",
      "value": 50
    },
    {
      "source": "De-48-à-60-mois",
      "target": "Plus-de-10-struct.",
      "value": 50
    },
    {
      "source": "De-48-à-60-mois",
      "target": "De-5-à-10-struct.",
      "value": 50
    },
    {
      "source": "De-48-à-60-mois",
      "target": "De-2-à-5-struct.",
      "value": 50
    },
    {
      "source": "De-48-à-60-mois",
      "target": "1-struct.",
      "value": 50
    },
    {
      "source": "De-30-à-48-mois",
      "target": "Plus-de-10-struct.",
      "value": 50
    },
    {
      "source": "De-30-à-48-mois",
      "target": "De-5-à-10-struct.",
      "value": 50
    },
    {
      "source": "De-30-à-48-mois",
      "target": "De-2-à-5-struct.",
      "value": 50
    },
    {
      "source": "De-30-à-48-mois",
      "target": "1-struct.",
      "value": 50
    },
    {
      "source": "De-24-à-30-mois",
      "target": "Plus-de-10-struct.",
      "value": 10
    },
    {
      "source": "De-24-à-30-mois",
      "target": "De-5-à-10-struct.",
      "value": 20
    },
    {
      "source": "De-24-à-30-mois",
      "target": "De-2-à-5-struct.",
      "value": 10
    },
    {
      "source": "De-24-à-30-mois",
      "target": "1-struct.",
      "value": 30
    },
    {
      "source": "Moins-de-24-mois",
      "target": "Plus-de-10-struct.",
      "value": 50
    },
    {
      "source": "Moins-de-24-mois",
      "target": "De-5-à-10-struct.",
      "value": 50
    },
    {
      "source": "Moins-de-24-mois",
      "target": "De-2-à-5-struct.",
      "value": 50
    },
    {
      "source": "Moins-de-24-mois",
      "target": "1-struct.",
      "value": 50
    },
  ]
};

const sankey = () => (
  <ResponsiveSankey
      data={data}
      margin={{
          "top": 40,
          "right": 40,
          "bottom": 40,
          "left": 50
      }}
      align="justify"
      colors={["#fcabb9", "#f7cad2", "#fe4061", "#f96d85", "#def7eb", "#bfefd8",
        "#96e8c0", "#67e0a5", "#3fd08b", "#e3fcf0", "#fcd9c2", "#fcc29c",
        "#fcac76", "#fc9550", "#fe8027", "#fcf4d1", "#fceda9", "#fce064",
        "#ffd100"]}
      enableLinkGradient={true}
      nodeOpacity={1}
      nodeWidth={40}
      nodeBorderColor="inherit:darker(0.8)"
      linkHoverOpacity={0.7}
      linkOpacity={0.5}
      linkBlendMode="multiply"
      labelPosition="inside"
      labelOrientation="horizontal"
      labelPadding={-35}
      labelTextColor="inherit:darker(1)"
      animate={true}
      motionStiffness={120}
      motionDamping={11}
  />
);

export default sankey;
