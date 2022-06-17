import React from "react";
import { useTranslation } from "react-i18next";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom';
const Sidebar = function(){
    let location = useLocation();
    let temp = location.pathname;
    const { t } = useTranslation();
return(

    <div class="menu pc">
    <div class="menu_links">
        <Link to="/panel">
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
 
)

}
export default Sidebar;