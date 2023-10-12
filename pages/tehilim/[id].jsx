 
 
import path from 'path';
import fs from 'fs/promises';
import { TehilimPage } from 'components'

export async function getServerSideProps({ params }) {
  console.log('params.slug---------->>', params.slug);
  try {
    let data = [];

    const fileData = await fs.readFile(path.join(process.cwd(), 'data/tehilim', `${params.id}.json`), 'utf-8');
    const fileJsonData = JSON.parse(fileData);
    const tableObject = fileJsonData.find((obj) => obj.type === 'table');
    data = data.concat(tableObject ? tableObject.data : []);

    console.log('data.length', data.length);

    return {
      props: {
        data:
          data.length > 0
            ? data
            : [
                {
                  id: 1,
                  original: 'no data in this file json',
                  translate: `data.length = ${data.length} `,
                  description: null,
                  periodStart: null,
                  periodEnd: null,
                },
              ],
              
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
            translate: `${error} `,
            description: null,
            periodStart: null,
            periodEnd: null,
          },
        ],
      },
    };
  }
}

export default TehilimPage
 