/* eslint-disable @typescript-eslint/no-explicit-any */

const findById = (component: any, id: string): any => {
  const wrapper = component.find(id);
  return wrapper;
};

export default findById;
