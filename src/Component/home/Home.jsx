import { App } from './swiper';
import '../home/home.scss'
import { App2 } from './Swiper2';
import { Card3 } from './card3';
import lokki from '../../assets/lokki.jpeg'
import jwan from '../../assets/jawan.jpeg'
import qogoz from '../../assets/qogoz.jpeg'
import  vanda from '../../assets/qasoskorlar.jpeg'
import detpul from '../../assets/urgimchak.jpeg'
import oskar from '../../assets/oskar.jpeg'
import { Link } from 'react-router-dom';
import { App4 } from './swiper4';
import { App5 } from './swiper5';
import { Sidebar } from './sidebar';

export const Home = () => {
  return (
     <>
    <div className="home-all">
    <div className="home">
        <div className="container">
          <h2>PREMYERA</h2>
     <App/>
        </div>
      </div>
     <div className="container">
     <h3>Tarjima Kinolar</h3>
 <div className="tarjima-kino">
  <div className="kino">
  <App2/>
  <div className="yangiliklar">
  <h3>KINO YANGILIKLARI</h3>
 <div className="card3-menu">

<Link target="_blank" className='yangilik-link' to='http://kinochi.net/premyera/728-loki-serialin2-mavsumi-fasli-uchun-maxsus-video-rolik.html'>
<Card3
  card3Img={lokki}
  card3Text='Loki seriali 2 mavsumi fasli uchun maxsus video rolik'
  />
</Link>
  
  <Link target="_blank" className='yangilik-link' to='http://kinochi.net/bollivud-olami/727-jawan-filmi-ozbek-tilida-toliq-treyler-2023-jawan-hind-filmi-treyleri.html'>
  <Card3
  card3Img={jwan}
  card3Text="Jawan filmi O'zbek tilida to'liq treyler 2023 Jawan hind filmi treyleri"
  />
  </Link>

<Link target="_blank" className='yangilik-link' to='http://kinochi.net/premyera/726-berlin-qogoz-bino-seriali-premyerasiga-oz-qolmoqda-video.html'>
<Card3
  card3Img={qogoz}
  card3Text="Berlin (Qog'oz bino) seriali premyerasiga oz qolmoqda (Video)"
  />
</Link>

 <Link target="_blank" className='yangilik-link' to='http://kinochi.net/tahlil/725-temir-odam-qaytadimi-doktor-strenj-3-filmi-haqida-nimalar-malum.html'>
 <Card3
  card3Img={vanda}
  card3Text="Temir odam qaytadimi? Doktor Strenj 3 filmi haqida nimalar ma'lum?"
  />
 </Link>

 <Link target="_blank" className='yangilik-link' to='http://kinochi.net/marveldc/724-dedpul-3-filmida-orgimchak-odam-ni-ham-koramizmi.html'>
 <Card3
  card3Img={detpul}
  card3Text="Dedpul 3 filmida O'rgimchak odam ni ham ko'ramizmi?"
  />
 </Link>

 <Link target="_blank" className='yangilik-link' to='http://kinochi.net/gollivud/723-venetsiya-kinofestivali-goliblari-elon-qilindi.html'>
 <Card3
  card3Img={oskar}
  card3Text="Venetsiya kinofestivali g'oliblari e'lon qilindi"
  />
 </Link>
 </div>
  </div>

  <div className="usa-kino">
  <h2>USA KINOLAR</h2>
  <div className="usa-film">
  <App4/>
  </div>
  </div>

  <div className="usa-kino">
  <h2>SERIALLAR</h2>
  <div className="usa-film">
  <App5/>
  </div>
  </div>

  </div>

  <div className="tasodifiy">
    <Sidebar/>
  </div>
 </div>
     </div>
    </div>

     </>
  )
}

export default Home
