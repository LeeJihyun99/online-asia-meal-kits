import koreaMain from '../src/images/categories-main/category-main-korea.jpg';
import vietnamMain from '../src/images/categories-main/category-main-vietnam.jpg';
import chinaMain from '../src/images/categories-main/category-main-china.jpg';
import japanMain from '../src/images/categories-main/category-main-japan.jpg';

const App= () =>{
  return (
    <div className="categories-container">
      <div className="category-container">
        <img src={koreaMain} width={350} height={300} alt='korea'/>
        <div className="category-body-container">
          <h1>Korean</h1>
          <h2>Shop Now</h2>
        </div>
      </div>

      <div className="category-container">
        <img src={vietnamMain} width={350} height={300} alt='vietnam'/>
        <div className="category-body-container">
          <h1>Vietnamese</h1>
          <h2>Shop Now</h2>
        </div>
      </div>

      <div className="category-container">
        <img src={chinaMain} width={350} height={300} alt='china'/>
        <div className="category-body-container">
          <h1>Chinese</h1>
          <h2>Shop Now</h2>
        </div>
      </div>

      <div className="category-container">
        <img src={japanMain} width={350} height={300} alt='japan'/>
        <div className="category-body-container">
          <h1>Japanese</h1>
          <h2>Shop Now</h2>
        </div>
      </div>
    </div>
  )
}

export default App;
