import path from 'path';
import fs from 'fs/promises';
import xlsx from 'xlsx';
import { TehilimPage } from 'components';

export async function getServerSideProps({ params }) {
  console.log('params---------->>', params);
  try {
    let data = [];

    const jsonFilePath = path.join(process.cwd(), 'data/tehilim-data', `${params.id}.json`);
    const jsonFileExists = !!(await fs.stat(jsonFilePath).catch(() => false));

    if (jsonFileExists) {
      const fileData = await fs.readFile(jsonFilePath, 'utf-8');
      const fileJsonData = JSON.parse(fileData);
      const tableObject = fileJsonData.find((obj) => obj.type === 'table');
      data = data.concat(tableObject ? tableObject.data : fileJsonData);
    } else {
      const xlsFilePath = path.join(process.cwd(), 'data/tehilim-data', `${params.id}.xls`);
      const xlsxFilePath = path.join(process.cwd(), 'data/tehilim-data', `${params.id}.xlsx`);

      const xlsFileExists = !!(await fs.stat(xlsFilePath).catch(() => false));
      const xlsxFileExists = !!(await fs.stat(xlsxFilePath).catch(() => false));

      if (xlsFileExists || xlsxFileExists) {
        const workbook = xlsFileExists ? xlsx.readFile(xlsFilePath) : xlsx.readFile(xlsxFilePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(worksheet);
        data = jsonData;
        
        
        console.log('data from file :>> ', data);
      } else {
        data = [
          {
            id: 1,
            original: 'No data found',
            translation: 'Данные не найдены',
            description: null,
            periodStart: null,
            periodEnd: null,
          },
        ];
      }
    }

    let onlyNumbersSorted = [];
    try {
      const files = await fs.readdir('data/tehilim-data');
      
      
      //  const onlyJsons = files.filter((file) => /^\d+\.json$/.test(file));
      // const onlyXLS = files.filter((file) => /^\d+\.xls$/.test(file));
      // const onlyXLSX = files.filter((file) => /^\d+\.xlsx$/.test(file));
      // const allFiles = [...onlyJsons, ...onlyXLS, ...onlyXLSX]
      
      
      // const onlyNumbers = allFiles.map((file) => parseInt(file.replace('.json', ''), 10));

      
      const onlyNumbers = files
      .map((file) => {
        const match = file.match(/^(\d+)\.(json|xls|xlsx)$/);
        return match ? parseInt(match[1], 10) : null;
      })
      .filter((number) => number !== null);
      
      
      // Проверка наличия хотя бы одного из форматов файлов
      const existingNumbers = [];
      for (const number of onlyNumbers) {
        const jsonPath = path.join(process.cwd(), 'data/tehilim-data', `${number}.json`);
        const xlsPath = path.join(process.cwd(), 'data/tehilim-data', `${number}.xls`);
        const xlsxPath = path.join(process.cwd(), 'data/tehilim-data', `${number}.xlsx`);

        
        // console.log('xlsxPath :>> ', xlsxPath);
        const jsonExists = !!(await fs.stat(jsonPath).catch(() => false));
        const xlsExists = !!(await fs.stat(xlsPath).catch(() => false));
        const xlsxExists = !!(await fs.stat(xlsxPath).catch(() => false));

        if (jsonExists || xlsExists || xlsxExists) {
          existingNumbers.push(number);
        }
      }

      onlyNumbersSorted = existingNumbers.sort((a, b) => a - b);
      // console.log('onlyNumbersSorted :>> ', onlyNumbersSorted);
      // console.log(JSON.stringify(onlyNumbersSorted, null, 1)); 
      // console.dir('onlyNumbersSorted :>> ', onlyNumbersSorted, {'maxArrayLength': null});

      
    } catch (err) {
      console.error(err);
    }

    return {
      props: {
        files: onlyNumbersSorted,
        data: data,
      },
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: {
        data: [
          {
            id: 1,
            original: 'Error',
            translation: `${error}`,
            description: null,
            periodStart: null,
            periodEnd: null,
          },
        ],
      },
    };
  }
}

export default TehilimPage;
