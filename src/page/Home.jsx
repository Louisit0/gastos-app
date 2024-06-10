import { DonutChart, Legend, Title, Card, Flex, Metric } from "@tremor/react";

const sales = [
  {
    name: "New York",
    sales: 980,
  },
  {
    name: "London",
    sales: 456,
  },
  {
    name: "Hong Kong",
    sales: 390,
  },
  {
    name: "San Francisco",
    sales: 240,
  },
  {
    name: "Singapore",
    sales: 190,
  },
];

// const valueFormatter = (number: number) =>
//   `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const valueFormatter = function (number) {
  return `$ ${Intl.NumberFormat("us").format(number).toString()}`;
};

const Home = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <Title className="text-2xl">Home</Title>
      <Card className="flex items-center justify-center space-x-6">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="w-40"
        />
        <Legend
          categories={[
            "New York",
            "London",
            "Hong Kong",
            "San Francisco",
            "Singapore",
          ]}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="max-w-xs"
        />
      </Card>
      <Flex className="gap-4">
        <Card>
          <Title>Total gastado hoy:</Title>
          <Metric>$10.000</Metric>
        </Card>
        <Card>
          <Title>Total gastado esta semana:</Title>
          <Metric>$10.000</Metric>
        </Card>
        <Card>
          <Title>Total gastado este mes:</Title>
          <Metric>$10.000</Metric>
        </Card>
      </Flex>
    </div>
  );
};

export default Home;
