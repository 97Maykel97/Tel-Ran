export type TMathOperation = (a: number, b: number) => number;

export type TCalculate = (
	a: number,
	b: number,
	operation: TMathOperation,
) => number;
