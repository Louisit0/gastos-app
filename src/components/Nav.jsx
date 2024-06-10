import { Link } from "wouter";
import { Card } from "@tremor/react";
const Nav = () => {
  return (
    <Card className="h-4/5">
      <nav className="flex justify-center items-center gap-8">
        <ul className="flex flex-col gap-8 w-full">
          <li className="text-zinc-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-zinc-300">
            <Link href="/addMonto">Añadir monto</Link>
          </li>
          <li className="text-zinc-300">
            <Link href="/comparacion">Comparacion</Link>
          </li>
          <li className="text-zinc-300">
            <Link href="/gastos">Gastos</Link>
          </li>
          <li className="text-zinc-300">
            <Link href="/gastosFijos">GastosFijos</Link>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default Nav;
