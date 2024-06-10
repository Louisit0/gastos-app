import { Title, Button, Card, NumberInput } from "@tremor/react";

const AddMonto = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-full">
      <Title className="text-3xl">Añadir monto</Title>
      <Card className="w-1/2">
        <div className="flex flex-col justify-center items-center gap-4">
          <NumberInput className="mx-auto max-w-sm" />
          <Button>Añadir nuevo monto</Button>
        </div>
      </Card>
    </div>
  );
};

export default AddMonto;
