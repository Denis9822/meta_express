import React from 'react';
import { useTranslation } from "react-i18next";
function Panel() {
    
const { t } = useTranslation();
    return ( 
                <div>
                <section className="earn">
                    <div className="earn_wrap">
                        <div className="earn_item">
                            <span>{t("earn_item1")}</span>
                            <p><h4>0</h4>$</p>
                        </div>
                        <div className="earn_item">
                            <span>{t("earn_item2")}</span>
                            <p><h4>0</h4>$</p>
                        </div>
                        <div className="earn_item">
                            <span>{t("earn_item3")}</span>
                            <p>22:30:01</p>
                        </div>
                    </div>
                </section>
                <section class="earth">
                    <div class="earth_items">
                        <div class="earth_item">
                            <div class="earth_item_top">
                                <div class="earth_item_top_lvl">
                                    Lvl 11
                                </div>
                                <div class="earth_item_top_price">
                                    <img src="/img/bnb.svg" alt=""/>
                                    <span>8 BNB</span>
                                </div>
                            </div>
                            <div class="earth_item_img">
                                <img src="/img/items/1.svg" alt=""/>
                            </div>
                            <div class="earth_item_name">
                                Meta
                                <span>
                                
                                {t("earth_item_name")}
                            </span>
                            </div>
                            <div class="earth_item_available">
                                
                                {t("earth_item_available")}
                            </div>
                            <div class="earth_item_buy">
                                
                                {t("earth_item_buy")}
                            </div>
                        </div>
                        <div class="earth_item">
                            <div class="earth_item_top">
                                <div class="earth_item_top_lvl">
                                    Lvl 11
                                </div>
                                <div class="earth_item_top_price">
                                    <img src="/img/bnb.svg" alt=""/>
                                    <span>8 BNB</span>
                                </div>
                            </div>
                            <div class="earth_item_img">
                                <img src="/img/items/1.svg" alt=""/>
                            </div>
                            <div class="earth_item_name">
                                Meta
                                <span>
                                
                                {t("earth_item_name")}
                            </span>
                            </div>
                            <div class="earth_item_available">
                                
                                {t("earth_item_available")}
                            </div>
                            <div class="earth_item_buy">
                                
                                {t("earth_item_buy")}
                            </div>
                        </div>
                        <div class="earth_item">
                            <div class="earth_item_top">
                                <div class="earth_item_top_lvl">
                                    Lvl 11
                                </div>
                                <div class="earth_item_top_price">
                                    <img src="/img/bnb.svg" alt=""/>
                                    <span>8 BNB</span>
                                </div>
                            </div>
                            <div class="earth_item_img">
                                <img src="/img/items/1.svg" alt=""/>
                            </div>
                            <div class="earth_item_name">
                                Meta
                                <span>
                                
                                {t("earth_item_name")}
                            </span>
                            </div>
                            <div class="earth_item_available">
                                
                                {t("earth_item_available")}
                            </div>
                            <div class="earth_item_buy">
                                
                                {t("earth_item_buy")}
                            </div>
                        </div>
                        <div class="earth_item">
                            <div class="earth_item_top">
                                <div class="earth_item_top_lvl">
                                    Lvl 11
                                </div>
                                <div class="earth_item_top_price">
                                    <img src="/img/bnb.svg" alt=""/>
                                    <span>8 BNB</span>
                                </div>
                            </div>
                            <div class="earth_item_img">
                                <img src="/img/items/1.svg" alt=""/>
                            </div>
                            <div class="earth_item_name">
                                Meta
                                <span>
                                
                                {t("earth_item_name")}
                            </span>
                            </div>
                            <div class="earth_item_available">
                                
                                {t("earth_item_available")}
                            </div>
                            <div class="earth_item_buy">
                                
                                {t("earth_item_buy")}
                            </div>
                        </div>
                    </div>
                </section>
                </div>

    );
}

export default Panel;