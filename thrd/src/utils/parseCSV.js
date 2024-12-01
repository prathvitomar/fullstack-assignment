import Papa from "papaparse";

export const parseCSV = async (filePath) => {
  const response = await fetch(filePath);
  const data = await response.text();
  return new Promise((resolve) => {
    Papa.parse(data, {
      header: true,
      complete: (result) => resolve(result.data),
    });
  });
};
