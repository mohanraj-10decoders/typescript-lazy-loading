type objType = {
  id:string,
  name:string,
  country:string,
  genre:string,
  albums:string
}

const artists:objType[]= [
  {
    id:'1',
    name: 'David',
    country: 'Australia',
    genre: 'Pop',
    albums: '2',
  },
  {
    id: '2',
    name: 'Sam',
    country: 'India',
    genre: 'Hip-Hop',
    albums: '4',
  },
  {
    id: '3',
    name: 'Shan',
    country: 'Canada',
    genre: 'R&B',
    albums: '2',
  },
  {
    id: '4',
    name: 'Tony',
    country: 'France',
    genre: 'Soul',
    albums: '3',
  },
];

export default artists;