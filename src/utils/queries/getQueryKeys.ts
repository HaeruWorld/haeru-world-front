type QueryList = {};

const getQueryKey = <T extends keyof QueryList>(
  ...[key, params]: undefined extends QueryList[T] ? [T] : [T, QueryList[T]]
) => {
  return params ? [key, params] : [key];
};

export default getQueryKey;
