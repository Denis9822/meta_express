import React from 'react';
import { useTranslation } from "react-i18next";

function Main() {
    const { t } = useTranslation();
    return ( 
        <div>

        <section className="main">
            <div className="main_info">

                <h1>
                    Meta
                    <span>
                         Express
                     </span>
                </h1>
                <div className="main_info_t">
                {t("sposob")}
                    <span>
                    {t("passive")}
                     </span>
                </div>
                <h3> {t("platform")}
                    <span className="text_hidden_shadow">
                    {t("text_hidden_shadow")}
                </span>
                </h3>
                <h4>{t("main_h4")}</h4>
                <div className="main_btns">
                    <div className="btn_register">
                    {t("btn_register")}
                    </div>
                    <div className="btn_help">
                    {t("btn_help")}
                    </div>
                </div>
            </div>
            <div className="main_img">
                <img className="pc" src="/img/main_img.svg" alt=""/>
                <img className="mob" src="/img/main_img_mob.svg" alt=""/>
            </div>

        </section>

        <section className="about">
            <div className="about_title">
                <h2>{t("about_title_h2")} <span> META EXPRESS </span>SMART GAME</h2>
            </div>
            <div className="column">
                <div className="column_text">
                {t("column_text")}                    
                <span>
                {t("column_text_span")} 
                    </span>
                </div>
                <div className="column_img">
                    <img src="/img/about_img.svg" alt=""/>
                </div>
                <div className="w">
                    <div className="column_row">
                        <div className="column_row_title">
                        {t("column_row_title")}
                        </div>
                        <div className="wrap">
                            <div className="wrap_column">
                                <span>EL Royale_En</span>
                                <div className="watch">
                                    <img src="/img/watch.svg" alt=""/>
                                </div>
                                <div className="download">
                                    <img src="/img/download.svg" alt=""/>
                                </div>
                            </div>
                            <div className="wrap_column">
                                <span>EL Royale_En</span>
                                <div className="watch">
                                    <img src="/img/watch.svg" alt=""/>
                                </div>
                                <div className="download">
                                    <img src="/img/download.svg" alt=""/>
                                </div>
                            </div>
                            <div className="wrap_column">
                                <span>EL Royale_En</span>
                                <div className="watch">
                                    <img src="/img/watch.svg" alt=""/>
                                </div>
                                <div className="download">
                                    <img src="/img/download.svg" alt=""/>
                                </div>
                            </div>
                            <div className="wrap_column">
                                <span>EL Royale_En</span>
                                <div className="watch">
                                    <img src="/img/watch.svg" alt=""/>
                                </div>
                                <div className="download">
                                    <img src="/img/download.svg" alt=""/>
                                </div>
                            </div>
                            <div className="wrap_column">
                                <span>EL Royale_En</span>
                                <div className="watch">
                                    <img src="/img/watch.svg" alt=""/>
                                </div>
                                <div className="download">
                                    <img src="/img/download.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap_blur"></div>
                </div>
            </div>
            <div className="about_title2">
                {t("about_title2")}
            </div>
            <div className="column2">
                <div className="w">
                    <div className="column2_row">
                        <div className="column2_row_img">
                            <img src="/img/people.svg" alt=""/>
                        </div>
                        <div className="column2_row_text">
                            {t("column2_row_text")}
                         </div>
                    </div>
                    <div className="wrap_blur"></div>
                </div>
                <div className="w">
                    <div className="column2_row column2_row_last">
                        <div className="column2_row_img">
                            <img src="/img/percentage-circle.svg" alt=""/>
                        </div>
                        <div className="column2_row_text">
                            {t("column2_row_text2")}
                        </div>
                    </div>
                    <div className="wrap_blur"></div>
                </div>
                <div className="column2_row_text2">
                {t("column2_row_text3")}
                    <span> {t("column2_row_text3_span")}</span> {t("column2_row_text3_2")}
                </div>
            </div>
        </section>

        <section className="stats">
            <h2>
                {t("stats_h2")}
            </h2>
            <div className="stats_wrap">
                <div className="stats_item">
                    <div className="stats_item_img">
                        <div className="stats_item_img_top">
                            <img src="/img/stats_top.svg" alt=""/>
                            <div className="text_on_image">
                                1114
                            </div>
                        </div>

                    </div>
                    <div className="stats_item_info">
                        <h3>
                            {t("stats_item_info")}
                        </h3>
                        <div className="ans">
                            <span>1114</span>
                            <p>{t("ans_p")}</p>
                        </div>
                    </div>
                </div>
                <div className="stats_item">
                    <div className="stats_item_img">
                        <div className="stats_item_img_top">
                            <img src="/img/stats_top2.svg" alt=""/>
                            <div className="text_on_image">
                                5289
                            </div>
                        </div>

                    </div>
                    <div className="stats_item_info">
                        <h3>
                        {t("stats_item_info2")}
                        </h3>
                        <div className="ans">
                            <span>5289.6</span>
                            <p>/BNB</p>
                        </div>
                    </div>
                </div>
                <div className="stats_item">
                    <div className="stats_item_img">
                        <div className="stats_item_img_top">
                            <img src="/img/stats_top3.svg" alt=""/>
                            <div className="text_on_image">
                                2471
                            </div>
                        </div>

                    </div>
                    <div className="stats_item_info">
                        <h3>
                        {t("stats_item_info3")}
                        </h3>
                        <div className="ans">
                            <span>2471</span>
                            <p>{t("ans_p2")}</p>
                        </div>
                    </div>
                </div>
                <div className="stats_item">
                    <div className="stats_item_img">
                        <div className="stats_item_img_top">
                            <img src="/img/stats_top4.svg" alt=""/>
                            <div className="text_on_image">
                                1114
                            </div>
                        </div>

                    </div>
                    <div className="stats_item_info">
                        <h3>
                            {t("stats_item_info4")}
                        </h3>
                        <div className="ans">
                            <span>0xCCE...7023E</span>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="activity">
            <h2>{t("activity_h2")}</h2>
            <div className="w">
                <div className="activity_wrap">
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                    <div className="activity_wrap_item">
                        <div className="activity_wrap_item_icon">
                            <img src="/img/gift.svg" alt=""/>
                        </div>
                        <div className="activity_wrap_item_id">
                            ID 835
                        </div>
                        <div className="activity_wrap_item_bnb">
                            <img src="/img/bnb.svg" alt=""/>
                            <span>+0.6038 BNB</span>
                        </div>
                        <div className="activity_wrap_item_reward">
                        {t("activity_wrap_item_reward")}
                        </div>
                        <div className="activity_wrap_item_time">
                            8 hours ago
                        </div>
                        <div className="activity_wrap_item_link">
                            <img src="/img/link.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="activity_blur"></div>
            </div>
        </section>

        <section className="good_game">
            <h3>{t("good_game_h3")}</h3>
            <h2>SEASON 1</h2>
            <span>{t("good_game_span")}</span>
            <div className="planet">
                <img src="/img/planet.png" alt=""/>
            </div>
        </section>
    </div>
    );
}

export default Main;