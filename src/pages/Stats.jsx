import React from 'react';
import { useTranslation } from "react-i18next";

function Stats() {
    const { t } = useTranslation();
    return ( 

                <section class="stats">
                    <div class="stats_items">
                        <div class="stats_item">
                            <div class="stats_item_id">
                                id 921
                            </div>
                            <div class="stats_item_text">
                             {t("stats_item_text")}
                                
                            </div>
                            <div class="stats_item_data">
                                2 days ago
                            </div>
                            <div class="stats_item_link">
                                <img src="/img/link2.svg" alt=""/>
                            </div>
                        </div>
                        <div class="stats_item">
                            <div class="stats_item_id">
                                id 921
                            </div>
                            <div class="stats_item_text">
                            {t("stats_item_text")}
                            </div>
                            <div class="stats_item_data">
                                2 days ago
                            </div>
                            <div class="stats_item_link">
                                <img src="/img/link2.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default Stats;