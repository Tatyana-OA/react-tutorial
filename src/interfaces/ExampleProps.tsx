export interface PersonProps {
  name: string | null;
  age: number;
  neshto: string;
  oshteneshto?: string;
}

export interface ExampleProps {
  data: PersonProps[];
}
