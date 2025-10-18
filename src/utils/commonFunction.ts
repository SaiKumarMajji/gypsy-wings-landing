export function enumToArray<T extends object>(enumObj: T) {
  return Object.keys(enumObj)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      value: (enumObj as any)[key],
      label: key
    }));
}

