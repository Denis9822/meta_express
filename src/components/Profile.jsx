import React from "react";
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
import {
    useLocation,
  } from 'react-router-dom';

const Profile = function(){
    const { t } = useTranslation();
    let location = useLocation();
    let temp = location.pathname;
return(
    <section class="profile">
    {temp == "/panel" &&    
    <div class="page_name mob">
        {t("menu_links1")}
    </div>
    }
    {temp == "/panel/stats" &&    
    <div class="page_name mob">
        {t("menu_links2")}
    </div>
    }
    {temp == "/panel/info" &&    
    <div class="page_name mob">
        {t("menu_links3")}
    </div>
    }
    <div class="column">
        <div class="profile_photo">
            <img src="/img/profile.svg" alt=""/>
        </div>
        <div class="profile_info">
            <span>ID 921</span>
            <div class="address">
                <p>
                    0x77d6...5Be6560
                </p>
                <img src="/img/copy.svg" alt=""/>
            </div>
            <div class="register">
            {t("register")}
                <t>
                    08.06.2022
                </t>
            </div>
        </div>
        <div class="profile_wrap">
            <div class="profile_ref">
                <h3>{t("profile_ref_h3")}</h3>
                <span>https://el-royale.app?id=921</span>
                <div class="cpy">
                {t("profile_ref_cpy")}
                </div>
            </div>
            <div class="profile_blur"></div>
        </div>
    </div>
</section>
)

}
export default Profile;