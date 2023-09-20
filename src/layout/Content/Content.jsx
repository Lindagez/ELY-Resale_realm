import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';
import Setting from "../../components/Setting/setting";

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <ContentMain />
      <Setting/>
    </div>
  )
}

export default Content
