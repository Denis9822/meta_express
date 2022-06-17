import React from 'react';
import { useTranslation } from "react-i18next";



function Info() {
    const { t } = useTranslation();
    return ( 

                <section class="panel_info">
                    <div class="panel_info_col2">
                        <div class="row">
                            <div class="panel_info_item">
                                <h3>
                                   
                                    {t("panel_info_item_h3_1")}
                                </h3>
                                <span>
                                 {t("panel_info_item_span_1")}                                
                                </span>
                                <span>
                                {t("panel_info_item_span_1_2")} 
                                </span>
                            </div>
                            <div class="panel_info_item">
                                <h3>
                                {t("panel_info_item_h3_2")}
                                </h3>
                                <span>
                                {t("panel_info_item_span_2")}
                                </span>
                                <span>
                                {t("panel_info_item_span_2_2")}
                                </span>
                            </div>
                            <div class="panel_info_item">
                                <h3>
                                {t("panel_info_item_h3_3")}
                                </h3>
                                <span>
                                {t("panel_info_item_span_3")}                    
                                 </span>
                                <span>
                                {t("panel_info_item_span_3_2")}  
                                    </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="panel_info_item">
                                <h3>
                                {t("panel_info_item_h3_4")}
                                </h3>
                                <span>
                                {t("panel_info_item_span_4")}  
                                </span>

                            </div>
                            <div class="panel_info_item">
                                <h3>
                                {t("panel_info_item_h3_5")}
                                </h3>
                                <span>
                                {t("panel_info_item_span_5")}
                                <span>
                                {t("panel_info_item_span_5_2")}
                                </span>
                                <span>
                                {t("panel_info_item_span_5_3")}                              
                                  </span>
                                </span>
                            </div>
                            <div class="panel_info_item">
                                <h3>
                                    {t("panel_info_item_h3_6")}  
                                </h3>
                                <span>
                                {t("panel_info_item_span_6_2")}  
                                    
                                     </span>
                                <h2>
                                {t("panel_info_item_span_6_3")}  
                                </h2>
                                <span>
                                {t("panel_info_item_span_6_4")}  
                                                                     <span>
                                   {t("panel_info_item_span_6_5")}                         
                                  </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default Info;