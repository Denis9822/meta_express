import {React,useState } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom';
import { useTranslation } from "react-i18next";
const Headers = function(){
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    let location = useLocation();
    let headerStyleVar = 0;
    const [isActive, setActive] = useState(false);
    const [isLangActive, setLangActive] = useState(1);
    let temp = location.pathname;
    if (temp.indexOf('panel') == -1)
    headerStyleVar = 0;
    else 
    headerStyleVar = 1;
   

return(
    <header>
    <div className="header_logo">
        <Link to="/">
            Meta Express
        </Link>
    </div>
        {headerStyleVar == 0 &&
            <div className="btn_connect_wallet pc">
                {t("wallet")}
            </div>
        }
        {headerStyleVar == 1 &&
            <div class="bsc pc">
                <img src="/img/bsc.svg" alt=""/>
                <span>BSC</span>
            </div>
        }
        {headerStyleVar == 1 &&
           <div class="balance pc">
           <div class="balance_bnb">
               <img src="/img/bnb.svg" alt=""/>
               <span>0.0002 BNB</span>
           </div>
           <div class="balance_wallet">
               0x77d6f...5Be6560
           </div>
       </div>
    }

    <div className="lang pc">
        <div 
            className={`lang_i ${isLangActive == 1 ? "lang_active" : ""}`}
            onClick={(e) => 
                {
                i18n.changeLanguage('ru');
                setLangActive(1)
                }
            
            }>
            RU
        </div>
        <div className={`lang_i ${isLangActive == 2 ? "lang_active" : ""}`}
            onClick={(e) =>
                {
                    i18n.changeLanguage('en');
                    setLangActive(2)
                    }
                }>
            EN
        </div>
    </div>
    
    <div className="header_menu mob">
        <div className="icon" onClick={() => setActive(!isActive)}>
            <img src="/img/gamburg.svg" alt=""/>
        </div>
        {headerStyleVar == 0 &&
        <div className={`header_menu_wrap ${isActive ? "active" : ""}`}>
            <div className="btn_connect_wallet">
                {t("wallet")}
            </div>
            <div className="lang" onClick={() => setActive(!isActive)}>
                <div 
                className={`lang_item ${isLangActive == 1 ? "lang_active" : ""}`}
                onClick={(e) => 
                    {
                    i18n.changeLanguage('ru');
                    setLangActive(1)
                    }
                
                }>
                RU
            </div>
            <div className={`lang_item ${isLangActive == 2 ? "lang_active" : ""}`}
                onClick={(e) =>
                    {
                        i18n.changeLanguage('en');
                        setLangActive(2)
                        }
                    }>
                EN
            </div>

            </div>
        </div>
        }
        {headerStyleVar == 1 &&
                <div className={`header_menu_wrap ${isActive ? "active" : ""}`}>
                    <div class="balance">
                        <div class="bsc">
                            <img src="/img/bsc.svg" alt=""/>
                            <span>BSC</span>
                        </div>
                        <div class="balance_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>0.0002 BNB</span>
                        </div>
                        <div class="balance_wallet">
                            <img src="/img/wallet-money.svg" alt=""/>
                            <span>0x77d6f...5Be6560</span>
                        </div>
                    </div>
                    <div class="menu_links" onClick={() => setActive(!isActive)}>
                            <Link to="panel">
                                <div class={location.pathname == '/panel' ? ' menu_link active' : 'menu_link'}>
                                    <img src="/img/category.svg" alt=""/>
                                    <span> {t("menu_links1")}</span>
                                </div>
                            </Link>
                            <Link to="/panel/stats">
                            <div class={location.pathname == '/panel/stats' ? ' menu_link active' : 'menu_link'}>
                                    <img src="/img/chart-2.svg" alt=""/>
                                    <span>{t("menu_links2")}</span>
                                </div>
                            </Link>
                      
                            <Link to="/panel/info">
                            <div class={location.pathname == '/panel/info' ? ' menu_link active' : 'menu_link'}>
                                <img src="/img/crown.svg" alt=""/>
                                <span>{t("menu_links3")}</span>
                            </div>
                            </Link>
                    </div>
                    <div className="lang" onClick={() => setActive(!isActive)}>
                <div 
                className={`lang_item ${isLangActive == 1 ? "lang_active" : ""}`}
                onClick={(e) => 
                    {
                    i18n.changeLanguage('ru');
                    setLangActive(1)
                    }
                
                }>
                RU
            </div>
            <div className={`lang_item ${isLangActive == 2 ? "lang_active" : ""}`}
                onClick={(e) =>
                    {
                        i18n.changeLanguage('en');
                        setLangActive(2)
                        }
                    }>
                EN
            </div>

            </div>
                    <div class="tg">
                        <a href="">
                            <div class="menu_link tg_mt tg">
                                <img src="/img/telegram_fill.svg" alt=""/>
                                <span>{t("menu_links4")}</span>
                            </div>
                        </a>
                        <a href="">
                            <div class="menu_link tg tg_mt2">
                                <img src="/img/telegram_fill.svg" alt=""/>
                                <span>{t("menu_links5")}</span>
                            </div>
                        </a>
                    </div>
                </div>  
            }      
    </div>
</header> 
 
)

}
export default Headers;