export const getByName = ({ data } :any , search :string) => {

  if (!search) {
    return data;
  }

  search = search.toLocaleLowerCase();
  const dataFiltered = data.filter((data: { name: any }) => data.name.toLocaleLowerCase().includes(search));

  console.log(dataFiltered);

  return dataFiltered;

}