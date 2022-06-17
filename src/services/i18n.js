import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      wallet: "Connect Wallet",
      sposob: "your better way to get a ",
      passive: "do-nothing income",
      platform: "Meta Express is a value-driven platform based on various flexible DeFi tools collaborated with crypto, which makes your gaming process simple and gives you a chance to earn easily through the pools.",
      text_hidden_shadow: "Compete on your own or invite your friends to get extra rewards.",
      main_h4: "It`s your chose how to play!",
      btn_register: "Get started",
      btn_help: "Help",
      about_title_h2: "ABOUT META EXPRESS SMART GAME",
      column_text: "Our platform gives passionate gamers the ability to earn passively through participation in the pools. Each pool has its own life-cycle, which updates after reaching a maximum number of members.",
      column_text_span: "Each member of the previous cycle get their payment upon the completion of the current pool. That`s the way each user meets a chance to get a payment.",
      column_row_title: "EL Royale – One pager",
      about_title2: "Rewards are broken down as follows:",
      column2_row_text: "10%-8%-6% of you friends` thansaction  are disrtributed through the 3-level linear referral system.",
      column2_row_text2: "74% of the purchase amount is returned to you at the end of the life cycle",
      column2_row_text3: "We ensure you can definitely get your investments back. If you fail to do this",
      column2_row_text3_span: "within 30 days",
      column2_row_text3_2: ", we will compensate you for the loss.",
      stats_h2: "STATISTICS",
      stats_item_info: "Number of members ",
      ans_p: "/users",
      stats_item_info2: "Turnover of funds",
      stats_item_info3: "Number of transactions",
      ans_p2: "/transactions",
      stats_item_info4: " Contract ",
      activity_h2: "META EXPRESS RECENT ACTIVITY",
      activity_wrap_item_reward: "Reward for completing the pool",
      good_game_h3: "ENJOY YOUR GAME IN META EXPRESS",
      good_game_span: "Please, feel free to ask any questions or share your sucess in our telegram community",
      menu_links1: "Panel",
        menu_links2: "Data",
        menu_links3: "Info",
        menu_links4: "TG channel",
        menu_links5: "TG chat",
        earth_item_name: "Lands",
        earth_item_available: "available for purchase",
        earth_item_buy: "Buy",
        register: "Registered on",
        profile_ref_h3: "My referral link ",
        profile_ref_cpy: "copy",
        stats_item_text: "Registration in Meta Express",
        panel_info_item_h3_1: "Meta Express - platform for getting a do-nothing income",
        panel_info_item_span_1: "The platform is a simple game mechanic, such as investing in pools. A pool has a lifecycle that ends when the required number of users havs joined it.",
        panel_info_item_span_1_2: "What is it? Each new user sends part of their funds to another user from the pool of the previous lifecycle through a smart contract when buying or reinvesting it. This ensures the repayment for every member and also gives an opportunity to make a surplus profit.",
        panel_info_item_h3_2: "A 3-level linear system of referrals",
        panel_info_item_span_2: "Each member gets their unique referral code -  an own ID number after registration completion. You can find it on the top of the panel, copy and share with your friend.",
        panel_info_item_span_2_2: " When inviting a new membe, you receive an affiliate bonus of 10% of the cost of your guest`s purchase of the pool. If this person invites someone else, you will receive 8% of the value of the pool they bought. And thus, if that one invites a new member also, you will receive 6% of the value of the pool they bought. ",
        panel_info_item_h3_3: "How does it work?",
        panel_info_item_span_3: "After registration completion, you can invest in pools. The cost of the pool starts from 0.07 BNB to 8 BNB (20 pools in total).  After you purchase a pool: first, you need to wait for its next life-cycle, then you have to complete 2 cycles to return your money.  That`s the way you earn  74% of the pool value at the end of the lifecycle. ",
        panel_info_item_span_3_2: " After completing  2 life- cycles, you will get your money back with a profit. Then you have to invest in this pool again to continue receiving  your passive income.",
        panel_info_item_h3_4: "Why should I reinvest?",
        panel_info_item_span_4: "In case of the fact that each member wants to earn more money, we are able to provide such an opportunity. If the life cycle of your pool ends, you have to reinvest the funds. If that does not happen, you won`t be able to receive any rewards for their reinvestment from your referrals. It`s also possible for your referral to buy pools more expensive than yours, In that case, you miss the reward for this transaction. After that, you and your referral replace each other, so he begins to receive a reward instead of you. ",
        panel_info_item_h3_5: "Why should I trust?",
        panel_info_item_span_5: "The game is based on smart contract. It provides the transaction reliability and transparency for every user. ",
        panel_info_item_span_5_2: "All rewards are immediately transferred to BNB to the user's wallet. No third party. ",
        panel_info_item_span_5_3: "Everything is transparent and easy, you are able to check it anytime. ",
        panel_info_item_h3_6: "Our competitive advantage",
        panel_info_item_span_6_2: "The main problem of other projects is the refund. When the time comes, it's really hard to get your money back from pools due to inactivity of new users. We solved this problem with our season 1.",
        panel_info_item_span_6_3: "What is the 1 Season about?",
        panel_info_item_span_6_4: "Meta Express is a crypto company that provides gaming platfroms for the cryptosphere. Each season lasts for 30 days from the official opening date. This makes sense – when the season ends, all funds are returned to users who have not made a profit and who are still waiting for their reward.",
        panel_info_item_span_6_5: "All funds are returned to users who have not made a profit and who are still waiting for their reward.",
        earn_item1: "Your income",
        earn_item2: "Ref accrual",
        earn_item3: "Time before the start of the next circle",
      },
  },
  ru: {
    translation: {
        wallet: "Подключить кошелек",
        sposob: "лучший способ для",
        passive: "получения пассивного заработка",
        platform: "Наша платформа использует функции финансовых инструментов и объединяет их с криптовалютой. Это делает участие в игре простым, а получение пассивного дохода с пула доступным.",
        text_hidden_shadow: "Вы можете участвовать самостоятельно, либо приглашать своих друзей для получения дополнительных наград.",
        main_h4: "Только Вы выбираете как играть!",
        btn_register: "Регистрация",
        btn_help: "Помощь",
        about_title_h2: "О ПРОЕКТЕ",
        column_text: "Наша игра дает возможность получения пассивного дохода через участие в пулах. Каждый пул имеет собственный жизненный цикл, который обновляется после достижения максимального кол-ва участников.        ",
        column_text_span: "Итак, каждый участник предыдущего жизненного цикла получит выплаты по завершению текущего пула. Таким образом, каждый пользователь имеет возможность получить выплаты.",
        column_row_title: "EL Royale – Презентации",
        about_title2: "Для ясности, награды будут распределяться следующим образом:",
        column2_row_text: "10%-8%-6% от суммы покупки вашего друга распределяются по 3-х линейной реферальной системе        ",
        column2_row_text2: "74% от суммы покупки возвращаются Вам по завершению жизненного цикла",
        column2_row_text3: "Вы точно можете вернуть свои вложения обратно. Если у Вас не получится это сделать в",
        column2_row_text3_span: "течение 30 дней",
        column2_row_text3_2: ", то мы компенсирует Вам потерю",
        stats_h2: "CТАТИСТИКА",
        stats_item_info: "Кол-во участников",
        ans_p: "/пользователей",
        stats_item_info2: "Оборот средств",
        stats_item_info3: "Кол-во транзакций",
        ans_p2: "/транзакции",
        stats_item_info4: "Официальный контракт",
        activity_h2: "META EXPRESS НЕДАВНЯЯ АКТИВНОСТЬ",
        activity_wrap_item_reward: "Награда за завершение пула",
        good_game_h3: "Удачной игры в META EXPRESS",
        good_game_span: "Вы можете задавать свои вопросы или поделиться своими успехами в нашем telegram community",
        menu_links1: "Панель",
        menu_links2: "Статистика",
        menu_links3: "Инфо",
        menu_links4: "TG канал",
        menu_links5: "TG группа",
        earth_item_name: "Земли",
        earth_item_available: "Доступен для покупки",
        earth_item_buy: "Купить",
        register: "Регистрация",
        profile_ref_h3: "Моя реферальная ссылка",
        profile_ref_cpy: "скопировать",
        stats_item_text: "Регистрация в Meta Express",
        panel_info_item_h3_1: "Meta Express - платформа для получения пассивного дохода",
        panel_info_item_span_1: "Платформа представляет собой простую игровую механику, такую как инвестирование в пулы. У пула есть жизненный цикл, который заканчивается, когда нужное кол-во пользователей к нему присоединилось.  ",
        panel_info_item_span_1_2: "Что это? Каждый новый пользователь отправляет часть своих средств другому пользователю из пула предыдущего жизненного цикла через смарт-контракт при его покупке или реинвестировании. Каждый человек, безусловно, возвращает свои деньги обратно и имеет возможность получить прибыль сверх этого.        ",
        panel_info_item_h3_2: "Игра имеет 3-х линейную систему рефералов",
        panel_info_item_span_2: "У каждого пользователя есть свой личный ID после регистрации, поэтому в панели управления вы можете скопировать его и поделиться со своим другом.        ",
        panel_info_item_span_2_2: "Когда вы приглашаете нового пользователя, то за его покупки пулов или реинвестирования вы получаете партнерский бонус в размере 10% от стоимости покупки им пула. Если этот человек пригласит кого-то нового, вы получите 8% от стоимости купленного им пула. И таким образом, если этот кто-то пригласит нового человека, вы получите 6% от стоимости купленного им пула.        ",
        panel_info_item_h3_3: "Как все устроено?",
        panel_info_item_span_3: "После регистрации в игре вы можете инвестировать в пулы. Пулы начинаются от 0,07BNB до 8BNB (всего 20 пулов). Как только вы купили пул: вы сначала ждете его следующего жизненного цикла, затем у вас есть 2 цикла, чтобы вернуть деньги. Вы зарабатываете 74% от стоимости пула в конце жизненного цикла.        ",
        panel_info_item_span_3_2: "После 2 циклов вы получаете свои деньги обратно с прибылью. Затем вам нужно снова инвестировать в этот пул, чтобы продолжать получать пассивный доход.                                        ",
        panel_info_item_h3_4: "Зачем нужно реинвестировать?",
        panel_info_item_span_4: "Каждый участник желает заработать больше денег, поэтому мы предоставляем такую возможность. Если жизненный цикл вашего пула закончился, вам необходимо реинвестировать средства. Если этого не произойдет, вы не сможете получать вознаграждение от своих рефералов за их реинвестирование. Кроме того, ваш реферал может покупать пулы дороже вашего, из-за чего вы можете пропустить вознаграждение за него. После этого вы и ваш реферал заменяете друг друга, он начинает получать бонусное вознаграждение за вас.                                      ",
        panel_info_item_h3_5: "Фактор доверия",
        panel_info_item_span_5: "Вся игра создана на смарт-контракте по причине того, что все транзакции прозрачны для всех.                                            ",
        panel_info_item_span_5_2: "Все вознаграждения немедленно перечисляются в BNB на кошелек пользователя. Никакой третьей стороны.        ",
        panel_info_item_span_5_3: "Все прозрачно и легко, можно проверить.  ",
        panel_info_item_h3_6: "Различия с конкурентами",
        panel_info_item_span_6_2: "Основная проблема других проектов - это возврат средств. Когда приходит время, действительно трудно вернуть деньги из пулов из-за неактивных новых пользователей. Мы решили эту проблему с нашим сезоном 1        ",
        panel_info_item_span_6_3: "О чем 1-й сезон?",
        panel_info_item_span_6_4: "Meta Express - это криптокомпания, которая предоставляет игровые платформы для криптосферы. Каждый сезон длится в течение 30 дней с официальной даты открытия. В этом есть смысл – когда сезон заканчивается, все средства возвращаются пользователям, которые не получили прибыли и все еще ждут вознаграждения.                                ",
        panel_info_item_span_6_5: " Все вознаграждения немедленно перечисляются в BNB на кошелек пользователя. Никакой третьей стороны.        ",
        earn_item1: "Ваш доход",
        earn_item2: "Реф начисление",
        earn_item3: "Время до начал сл. круга",
        btn_register: "",        

    },
  },
};
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;