const phrases = [
    "Краще відчувати один раз, ніж слухати про це тисячі разів",
    "Коли ти поруч, моя душа відчуває, що все можливо",
    "Найкращі відносини - це ті, де ви любите один одного за те, ким ви є",
    "Кращий друг - це той, хто стоїть поруч з тобою, коли весь світ проти тебе",
    "Моя любов до тебе - це не тільки слова, це почуття, які заповнюють моє серце",
    "Найкраща дружба починається зі спільних інтересів, але зберігається через спільні цінності",
    "Любов - це не те, що ми кажемо один одному, а те, що ми робимо один для одного",
    "Дружба - це як плавання на човні, ми можемо рухатися у різні боки, але завжди прийдемо до берега разом",
    "Якщо ти хочеш бути щасливим, не шукай великих речей. Будь щасливим з малого, що є навколо тебе",
    "Любов - це тоді, коли ти готовий робити все для іншої людини, не очікуючи відповідності",
    "Так ніхто не кохав. Через тисячі літ лиш приходить подібне кохання","Кохання – це квітка, якій ти маєш дозволити зрости","Для кохання не існує вчора, кохання не думає про завтра. Воно жадібно тягнеться до нинішнього дня, але цей день потрібен йому весь, необмежений, незатьмарений","Коли любиш, хочеться щось робити в ім'я любові. Хочеться жертвувати собою. Хочеться служити","Я скорше дуба вріжу, ніж мене поставлять на коліна","Так, держава – це я, а не те, що вони з нею зробили. І якби кожен усвідомив, що держава – це він, то досі у нас вже була б достойна держава.","Шкода, що в жінках так швидко вмирає Ассоль.","Там, де в жінок не розвинуте почуття честі й гідності, процвітає моральне невігластво чоловіка","Мені потрібне слово, а не слава.","Музика – це мова почуттів.","Любов шляхетна тільки тоді, коли вона сором'язлива.","Без любви жить легче. …Но без нее нет смысла.","Кому-то не хватает одной женщины, и он переключается на пятую, десятую. А другому не хватает жизни, чтобы любить одну-единственную.","Неразделенная любовь так же отличается от любви взаимной, как заблуждение от истины.","Ты должна знать, что я всегда буду твоей опорой.","Я тебе обещаю, что всегда буду рядом в трудные моменты.","Я тебя поддержу, когда ты будешь нуждаться в этом.","Ты должна понимать, что я ценю твою компанию больше всего.","Я тебе дарю свое время, чтобы провести его с тобой.","Я тебя вдохновляю, чтобы ты могла достичь своих целей.","Ты должна помнить, что я всегда буду любить тебя.","Я тебе доверяю, и всегда буду честен с тобой.","Я тебя уважаю, и всегда буду уважать твои решения.","Ты должна знать, что ты очень важна для меня.","Я тебе готов прийти на помощь в любой момент.","Я тебе верю, и знаю, что ты сможешь преодолеть все трудности.","Я тебя ценю, и всегда буду уважать твое мнение.","Ты должна понимать, что ты способна на большее, чем ты думаешь.","Я тебе благодарен за то, что ты всегда рядом со мной.","Я тебя понимаю, и всегда готов выслушать твои проблемы.","Я тебе обещаю, что буду делать все возможное, чтобы ты была счастлива.","Ты должна знать, что я готов принять тебя такой, какая ты есть.","Я тебе помогу, если ты не знаешь, как преодолеть сложности.","Я тебя поддержу, когда тебе будет трудно.","Ты должна понимать, что ты одна из самых важных людей в моей жизни.","Я тебя восхищаюсь, и всегда буду гордиться твоими достижениями.","Я тебе благодарен за то, что ты всегда оказываешь мне поддержку.","Я тебя люблю, и всегда буду любить.","Ты должна знать, что ты очень сильная и умная девушка.","Я тебе готов помочь в любых трудностях, чтобы ты не чувствовала себя одна.","Ты должна перестать быть такой прекрасной, ты мешаешь всем остальным выглядеть хорошо!","Я тебе завидую, потому что у тебя есть все, что нужно, чтобы меня дражить.","Я тебя никогда не забуду, даже если попытаюсь. Ты слишком прекрасна, чтобы выйти из моей головы.","Ты должна прекратить улыбаться так мило. Я не могу сосредоточиться на своих делах!","Я тебе завидую, потому что ты можешь быть смешной и красивой одновременно. Это нечестно!","Я тебе завидую, потому что у тебя есть все, что нужно, чтобы я забыл о своих проблемах.","Ты должна давать предупреждение, когда собираешься выглядеть так прекрасно. Я не готов к такому!","Я тебя никогда не забуду, потому что ты напоминаешь мне о том, как мало я достиг в жизни.","Я тебе завидую, потому что ты можешь быть такой прекрасной, не прилагая усилий. Я же вынужден постоянно работать над собой!","Я тебя никогда не забуду, потому что ты напоминаешь мне о том, как я хочу стать лучшим человеком для тебя.","Я тебе обещаю - со мной тебе не будет скучно.","Я тебя ни за что не забуду, потому что ты как ветер - когда тебя нет, мне холодно и печально.","Я тебе предлагаю - давай изучать языки вместе, чтобы у нас было что обсуждать на свиданиях за рубежом.","Ты должна быть лучшим секретом, потому что я не хочу, чтобы тебя узнал весь мир - ты моя маленькая победа.","Я тебя никогда не подведу, потому что я как сильный кофе - крепкий, горячий и никогда не охладеет.","Ты должна быть как книга, которую я хочу перечитывать снова и снова, потому что каждый раз я нахожу что-то новое и интересное.","Я тебе готов подарить всю звездную пыль во Вселенной, чтобы ты чувствовала себя как принцесса.","Ты должна быть как солнечный лучик, который всегда светит на моем лице и греет мое сердце.","Я тебя люблю не за то, что ты красива, а за то, что ты делаешь мир вокруг меня лучше.","Любовь - это боль. Боль, которую мы не можем избежать. Что бы мы ни делали, она все равно найдет нас.","Я понял, что ты для меня значишь больше, чем все остальное в этом мире. Но это уже поздно","Любовь - это, когда ты готов простить все ошибки и недостатки того, кого любишь. Даже если это означает бороться со всем миром.","Ты знаешь, что самое грустное в любви? Это то, что никогда не знаешь, когда она закончится.","Любовь - это как цветок. Если его не поливать и не ухаживать, он увядает и умирает.","Я думала, что любовь - это самое прекрасное чувство на свете. Но она может превратиться в самый большой кошмар.","Любовь - это нечто, что можно потерять в любую секунду. И когда она уходит, оставляет только боль и разочарование.","Любовь - это как игрушка. Мы играем с ней, пока она не сломается. И когда это происходит, мы больше никогда не можем ее починить.","Как много бывает людей на свете, а в конечном счете все, что нам нужно, это лишь один единственный человек.","Ты моё всё.","Милашка","Надюсик, а ты меня любишь?","Люблю...","Хочу тебя обнять","Ты так прекрасна","Ты мой смысл жизни","Я тебе кохаю","Ты моя принцесса","Любовь...","Будешь со мной на вечно?"
  ]
  ;
  
  const generateBtn = document.getElementById("generate-btn");
  const phrase = document.getElementById("phrase");
  
  generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phrase.classList.remove("show");
    setTimeout(() => {
      phrase.textContent = phrases[randomIndex];
      phrase.classList.add("show");
    }, 300);
  });
  