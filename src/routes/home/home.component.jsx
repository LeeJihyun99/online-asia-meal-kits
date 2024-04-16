import { Outlet } from 'react-router-dom';
import koreaMain from '../../images/categories-main/category-main-korea.jpg';
import vietnamMain from '../../images/categories-main/category-main-vietnam.jpg';
import chinaMain from '../../images/categories-main/category-main-china.jpg';
import japanMain from '../../images/categories-main/category-main-japan.jpg';
import others from '../../images/categories-main/category-main-others.jpg';
import Directory from '../../components/directory/directory.component';

const Home= () =>{
  const categories = [
    {
      id: 1,
      title: 'Korea',
      imageURL: koreaMain 
  
    },
    {
      id: 2,
      title: 'Vietnam',
      imageURL: vietnamMain
    },
    {
      id: 3,
      title: 'China',
      imageURL:chinaMain
    },
    {
      id: 4,
      title: 'Japan',
      imageURL: japanMain
    },
    {
      id:5,
      title:'Others',
      imageURL: others
    }
  ];

  return (
    <div>
        <Outlet/>
        <Directory categories={categories}/>
    </div>
    
  );
};

export default Home;