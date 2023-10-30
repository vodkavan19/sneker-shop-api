export function formatUnicorn(
  input: string,
  args: Record<string, string | number>,
): string {
  let output = input.toString();

  for (const arg in args) {
    output = output.replace(
      new RegExp(`{{${arg}}}`, 'gi'),
      args[arg].toString(),
    );
  }

  return output;
}

export function snakeToCamel(s: string) {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}
