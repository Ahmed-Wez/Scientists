const data = [
    {
        id: 1,
        imageUrl: "/1.jpg",
        scientistName: "جَــــابِـرُ بْـنُ حَـيَّــــانَ",
        scientistYear: "١٠١ - ٢٠٠",
        scientistFullData: {
            scientistName: "أبو موسى جَابر بن حيّان بن عبد الله الكوفي الأَزْدِيُّ",
            scientistYearOfBirth: "١٠١",
            scientistYearOfDeath: "٢٠٠",
            scientistCountry: "الدولة العباسية",
            scientistNationality: "عباسي",
            scientistDeen: "الإسلام",
        },
        scientistDescriptions: {
            hisLife: `
                ذكرت بعض المصادر، أن جابر هو ابن حيان بن عبد الله الأزدي الذي هاجرت أسرته من اليمن إلى الكوفة، وكانت ولادته فيها وعمل في الكوفة صيدلانياً. كان والده من المناصريين للعباسيين في ثورتهم ضد الأمويين، الذين أرسلوه إلى خراسان ليدعوا الناس لتأييدهم، حيث قُبض عليه وقتله الأمويون، فهربت أسرته إلى اليمن، حيث نشأ جابر ودرس القرآن والعلوم الأخرى ومارس مهنة والده.<br><br> ثم عادت أسرته إلى الكوفة، بعد أن أزاح العباسيون الأمويين، لذا ينسب أحيانًا بالأزدي أو الكوفي أو الطوسي أو الصوفي.
                اختلفت بعض المصادر حول كونه عربيّاً أزديّاً أم فارسي. في حين يعتقد هنري كوربين أن جابر بن حيان لم يكن عربيًا وإنما كان من موالي قبيلة الأزد ومن المعاصرين زكي نجيب محمود الذي قرر أصله الأزدي العربي الصميم. وهناك انضم إلى حلقة جعفر الصادق، فتلقى علومه الشرعية واللغوية والكيميائية على يديه، كما درس أيضًا على يد الحميري، رغم تشكك البعض في تتلمذ جابر على يد جعفر الصادق، ويرى بعض الباحثين أن جعفر الصادق نفسه التقى بخالد بن يزيد بن معاوية وأخذ عنه الكيمياء وقد تمت التعمية على هذه المعلومة من قبل بعض المؤرخين لأسباب سياسية وعقدية.<br><br>
                ثم مارس جابر الطب في بداية حياته تحت رعاية الوزير جعفر البرمكي وبتوجيه من الخليفة العباسي هارون الرشيد.
                وصفه أنور الرفاعي في كتابه تاريخ العلوم في الإسلام: بأنه كان طويل القامة، كثيف اللحية. اشتهر بإيمانه وورعه، وكذلك بتصوفه. كان يعيش جابر بن حيان في مدينة دمشق القديمة، حيث كان يقضي معظم يوم في غرفة منعزلة يعكف على دراسة الكيمياء.
                في عام 987، ترجم ابن النديم لإبن حيان في الفهرست بأنه كان من أصحاب جعفر الصادق، كما أشار إلى أن جماعة الفلاسفة إدعت أن جابر من أعضائها. كما قال عنه ابن وحشية أن «جابر بن حيان صوفي... وأن كتابه عن السموم عمل عظيم..». في حين شكَّ آخرون في نسبة كتابته إليه.
                <br><br>وتوفي جابر وقد جاوز التسعين من عمره في الكوفة بعدما فر إليها من العباسيين بعد نكبة البرامكة، سجن في الكوفة وظل في السجن حتى وفاته سنة 197هـ (813 م) وقيل أيضا 195 هـ/810 م.
                أطلقت عليه العديد من الألقاب، منها «الأستاذ الكبير» و«شيخ الكيميائيين المسلمين» و«أبو الكيمياء» و«القديس السامي التصوف» و«ملك الهند». وكذلك لُقِّب علم الكيمياء نسبة إليه صنعة جابر.
                `,
            hisAchievements: `
            هذه قائمة بسيطة وموجزة حول بعض منجزات جابر بن حيان في علوم الكيمياء:<br><br>
            <ul>
                <li>اكتشف «الصودا الكاوية» أو القطرون (NaOH).</li>
                <li>أول من استحضر ماء الذهب.</li>
                <li>أول من أدخل طريقة فصل الذهب عن الفضة بالحلّ بواسطة الأحماض. وهي الطريقة السائدة إلى يومنا هذا.</li>
                <li>أول من اكتشف حمض النتريك.</li>
                <li>أول من اكتشف حمض الهيدروكلوريك.</li>
                <li>اعتقد بالتولد الذاتي.</li>
                <li>أضاف جوهرين إلى عناصر اليونان الأربعة وهما (الكبريت والزئبق) وأضاف العرب جوهرا ثالثا وهو (الملح).</li>
                <li>أول من اكتشف حمض الكبريتيك وقام بتسميته بزيت الزاج.</li>
                <li>أدخل تحسينات على طرق التبخير والتصفية والانصهار والتبلور والتقطير.</li>
                <li> استطاع إعداد الكثير من المواد الكيميائية كسلفيد الزئبق وأكسيد الارسين (arsenious oxide).</li>
                <li>نجح في وضع أول طريقة للتقطير في العالم.فقد اخترع جهاز تقطير ويستخدم فيه جهاز زجاجي له قمع طويل لا يزال يعرف حتى اليوم في الغرب باسم "Alembic" من «الإنبيق» باللغة العربية. وقد تمكن جابر بن حيان من تحسين نوعية زجاج هذه الأداة بمزجه بثاني أكسيد المنجنيز.</li>
                <li>صنع ورق غير قابل للأحتراق.</li>
                <li>شرح بالتفصيل كيفية تحضير الزرنيخ والانتيمون.</li>
            </ul>
            `,
            hisMostFamousSayings: `
            إياك أن تجرب أو تعمل حتى تعلم، فيكون في التجربة كمال العلم، إن كل صناعة لا بد لها من سبوق العلم في طلبها للعمل ؛ لأنه إنما هو إبراز ما في العلم من قوة الصانع إلى المادة المصنوعة لا غير، إن العلم سابق أول، والعمل متأخر مستأنف، وكل من لم يسبق إلى العلم لم يمكنه إتيان العمل
            `,
            hisBooks: `
            تعود شهرة جابر بن حيان إلى مؤلفاته العديدة، ومنها «كتاب الرسائل السبعين»، ترجمه إلى اللاتينية جيرار الكريموني سنة 1187م وتضاف إلى هذه الكتب تصانيف أخرى عديدة تتناول، إلى جانب الكيمياء، شروحاً لكتب أرسطو وأفلاطون؛ ورسائل في الفلسفة، والتنجيم، والرياضيات، الطب، والموسيقى. وجاء في «الأعلام» للزركلي أن جابراً له تصانيف كثيرة تتراوح ما بين مائتين واثنين وثلاثين (232) وخمسمائة (500) كتاب، لكن ضاع أكثرها. وقد ترجمت بعض كتب جابر إلى اللغة اللاتينية في أوائل القرن الثاني عشر، كما ترجم بعضها من اللاتينية إلى الإنجليزية عام 1678. وظل الأوربيون يعتمدون على كتبه لعدة قرون، وقد كان لها أثر كبير في تطوير الكيمياء الحديثة. وفي هذا يقول ماكس مايرهوف: يمكن إرجاع تطور الكيمياء في أوروبا إلى جابر ابن حيان بصورة مباشرة. وأكبر دليل على ذلك أن كثيراً من المصطلحات التي ابتكرها ما زالت مستعملة في مختلف اللغات الأوربية.
            `
        }
    },
    {
        id: 2,
        imageUrl: "/2.jpg",
        scientistName: "أبو بَكر الرَّازِيّ",
        scientistYear: "٢٥٠ - ٣١٣",
        scientistFullData: {
            scientistName: "أبو بَكر مُحَمَّد بن يَحْيَى بن زَكَرِيّا الرَّازِيّ",
            scientistYearOfBirth: "٢٥٠",
            scientistYearOfDeath: "٣١٣",
            scientistCountry: "الدولة العباسية",
            scientistNationality: "عباسي",
            scientistDeen: "الإسلام",
        },
        scientistDescriptions: {
            hisLife: `
            ولد أبو بكر الرازي، في «الري» من أعمال فارس سنة 250هـ - 864م، واهتم منذ صغره بالعلوم الأدبية وقرض الشعر وكان مولعاً بالموسيقا، وبعد أن صار شاباً عكف على دراسة الطب، حتى تمكن منه وبدأ يمارسه ونبغ فيه وذاع صيته، هو أبو بكر محمد بن يحيى بن زكريا الرازي، أحد أكبر العلماء والأطّباء المسلمين، اتصف بالفطنة والذكاء والاجتهاد، وبحبه للعلم منذ نعومة أطرافه، وبدأ في طلب العلم في سن مبكرة، فدرس الرياضيات والفلك والكيمياء والمنطق، وعرف بالنبوغ والتفوق، فكان يحفظ كل ما يقرأه أو يسمعه بسرعة مذهلة.
            قرر وهو ابن ثلاثين عاماً، الانتقال إلى واحة العلم بغداد عاصمة الخلافة العباسية، فدرس الكيمياء والفلسفة والطب، وأثبت براعته في الفيزياء، والموسيقا، والميتافيزيقيا، والرياضيات، موسوعة علمية شاملة، طبيب بارع، وكيميائي لا يشق له غُبار، وصيدلي متمكن، وفيزيائي قدير، وأديب وفيلسوف، عالم موسوعي من طراز فريد، من أعظم الرواد الأوائل، الذين قدموا للبشرية خدمات عظيمة النفع، في مجالات العلوم المختلفة، برزت إسهاماته في جميع الفروع، وقدم للبشرية مؤلفات عظيمة في الطب والكيمياء والرياضيات والأدب، وقد ظلت مؤلفاته، خاصة في مجال الطب، مرجعاً أساساً للأساتذة والدارسين، على مدى قرون عديدة.<br><br>
            تتلمذ «الرازي» في علم الكيمياء على يد «جابر بن حيان»، وكان يشير إليه كلما ذكر اسمه بكلمة «معلمي»، ويظن أن السبب الذي استهوى الرازي في طلب الكيمياء هو شائعة تحويل المعادن الخسيسة إلى ذهب، وأراد أن يتقن هذه الصناعة، وكان العلماء آنذاك يؤمنون بأنه من المستطاع تحويل المعادن الرخيصة إلى ثمينة، وأن هناك مادة اسمها «الإكسير» يمكن بواسطتها تحويل النحاس إلى ذهب، وقد انهمك الرازي في دراسة الكيمياء وألف كتاباً في هذا بعنوان: «سر الأسرار»، وفيه يذكر كيفية تحويل النحاس إلى ذهب وبعد أن قرأه السلطان «خرسان أبو صالح منصور» استقدم الرازي وطلب إليه إثبات نظريته، ولكنه عجز، فأمر السلطان بأن يضرب بالكتاب على رأسه حتى يتمزق، وقد أثر هذا القصاص على الرازي نفسياً وجسمياً وأصيب بألم في عينه، أجبره فيما بعد على ترك صناعة الكيمياء والاكتفاء بالطب.<br><br>
            ويعتبر «الرازي» مؤسس علم الكيمياء الحديثة، ويظهر فضله في هذا العلم بصورة واضحة عندما عمد إلى تقسيم المواد المعروفة إلى أربعة أقسام، المشتقة والمعدنية والنباتية والحيوانية، كما قسم المعادن إلى ست طوائف بحسب طبائعها وصفاتها، فهو أول من استخلص «الكحول» بتقطير مواد نشوية وسكرية مختمرة، وأول من ميز بين «الصودا» و«البوتاس»، وقام بتحضير بعض السوائل السامة من «روح الخل»، وأول من ذكر حامض «الكبريتيك»، وأطلق عليه اسم زيت الزاج أو الزاج الأخضر، كما حضّر في معمله بعض الحوامض الأخرى، وما زالت الطرق التي سلكها في سبيل تحضيرها مستخدمة حتى الآن، وكان من أوائل العلماء الذين طبقوا الكيمياء وأدخل التركيبات الكيميائية في الطب، وأثر الأدوية في إثارة التفاعلات الكيميائية داخل جسم المريض.<br><br>
            ألف «الرازي» كتاباً بعنوان: «أصول الكيمياء»، وعثر عليه في مكتبة أحد أمراء الهند، ويمتاز بحسن تبويبه ووصفه الدقيق للتجارب الكيميائية والأدوات المستعملة في إجراء التجارب، وقسّم المادة إلى «عناصر»، بينما قسمها جابر إلى أقسام متجانسة وقد كان تقسيمه بدقة أكثر، وفقد بصره في أواخر أيامه من كثرة القراءة والكتابة، وإجراء التجارب في معمله، وقد ترك ثروة علمية هائلة في شتى أنواع المعرفة، وأحصى له بعض الباحثين نحو 220 مؤلفاً.
            `,
            hisAchievements: `
            هذه قائمة بسيطة وموجزة حول بعض منجزات جابر بن حيان في علوم الكيمياء:<br><br>
            <ul>
                <li>حضّر العديد من الحوامض والمواد الكيمياوية الأخرى.</li>
                <li>استخدامه الفحم الحيواني في قصر الألوان، ولا يزال هذا النوع من الفحم مستعملاً في إزالة الألوان والروائح من المواد العضوية.</li>
                <li>تمييزه بين بعض المواد الكيميائية رغم تشابهها الكبير في صفاتها وخواصها الطبيعية: مثل تمييزه بين الصودا والبوتاس، أي بين كربونات الصوديوم وكربونات البوتاسيوم.</li>
                <li>وصفه الدقيق لكثيرٍ من المواد الكيميائية: مثل الأنتيمون الذي وصفه بأنه مادة صلبة سوداء، ووصفه النحاس بتحوله إلى كربوناته القاعدية الخضراء عند تعرضه للهواء الرطب في درجات الحرارة العادية، ولكنه سرعان ما يتحول إلى مادة سوداء هي أكسيد النحاسيك إذا ما سخن تسخيناً شديداً.</li>
                <li>تقديره الكثافة النوعية للعديد من السوائل: مستعملا ميزاناً أسماه (الميزان الطبيعي).</li>
                <li>حضّر الكحول من تخمير السكريات.</li>
            </ul>
            `,
            hisBooks: `
                <ul>
                    <li>كتاب الكيمياء، وأنها إلى الصحة أقرب.</li>
                    <li>كتاب الشكوك على جالينوس.</li>
                    <li>كتاب الحاوي في الطب.</li>
                    <li>كتاب الجامع الكبير.</li>
                    <li>كتاب في الفصد والحجامة.</li>
                    <li>كتاب الطب الروحاني.</li>
                    <li>كتاب إن للعبد خالقا.</li>
                    <li>كتاب المدخل إلى المنطق.</li>
                    <li>كتاب هيئة العالم.</li>
                    <li>كتاب طبقات الأبصار.</li>
                    <li>كتاب أخلاق الطبيب.</li>
                </ul>
            `,
        }
    },
    {
        id: 3,
        imageUrl: "/3.jpeg",
        scientistName: "أَبُـو يُـوسُـفْ اَلْـكِـنْـدِيَّ",
        scientistYear: "١٨٥ - ٢٥٦",
        scientistFullData: {
            scientistName: "أَبُو يُوسُفْ يَعْقُوبْ بْنْ إِسْحَاقْ بْنْ اَلصَّبَاحِ بْنْ عِمْرَانْ بْنْ إِسْمَاعِيلْ اَلْكِنْدِيَّ",
            scientistYearOfBirth: "١٨٥",
            scientistYearOfDeath: "٢٥٦",
            scientistCountry: "الدولة العباسية",
            scientistNationality: "عباسي",
            scientistDeen: "الإسلام",
        },
        scientistDescriptions: {
            hisLife: `
            ولد في الكوفة في بيت من بيوت شيوخ قبيلة كندة. كان والده واليًا على الكوفة، حيث تلقى علومه الأولية، ثم انتقل إلى بغداد، حيث حظي بعناية الخليفتين المأمون والمعتصم، حيث جعله المأمون مشرفًا على بيت الحكمة - الذي كان قد أنشئ حديثًا لترجمة النصوص العلمية والفلسفية اليونانية القديمة - في بغداد. عرف الكندي أيضًا بجمال خطه، حتى أن المتوكل جعله خطاطه الخاص.<br><br>
            عندما خلف المعتصم أخيه المأمون، عينه المعتصم مربيًا لأبنائه. ولكن مع تولي الواثق والمتوكل، أفل نجم الكندي في بيت الحكمة. هناك عدة نظريات لتفسير سبب حدوث ذلك، فقد رجح البعض أن ذلك بسبب التنافس في بيت الحكمة، والبعض قال أن السبب تشدد المتوكل في الدين، حتى أن الكندي تعرّض للضرب، وصودرت مؤلفاته لفترة. فقد قال هنري كوربين - الباحث في الدراسات الإسلامية - أن الكندي توفي في بغداد وحيدًا عام 259 هـ/873 م في عهد الخليفة المعتمد.<br><br>
            بعد وفاته، اندثر الكثير من أعمال الكندي الفلسفية، وفقد الكثير منها. يشير فيليكس كلاين فرانكه إلى وجود عدة أسباب لذلك، فبصرف النظر عن تشدد المتوكل الديني، فقد دمّر المغول عددًا لا يحصى من الكتب، عند اجتياحهم بغداد. إضافة إلى سبب أكثر احتمالاً وهو أن كتاباته لم تعد تلقى قبولاً بين أشهر الفلاسفة اللاحقين كالفارابي وابن سينا.
            `,
            hisAchievements: `
            في عام 833 توفي الخليفة المأمون وأتى الخليفة المعتصم الذي بدوره أعجب بالكندي واستدعاه ليكون مربيًا لولده أحمد. سارت الأمور على نحوٍ جيد حتى قدوم المتوكل.
            كان الوشاة ومن بينهم العالمان محمد وأحمد أبناء موسى بن شاكر عالم الفلك، يحاولون تشويه سمعة الكندي أمام الخليفة المتوكل، وحين نجحوا بالوصول إلى غايتهم، بعد أن تمكنوا من إثارة الخليفة المتوكل على الكندي، ضرب الخليفة الكندي وأباح مكتبته الضخمة وأعطى كتبه الثمينة لأبناء موسى.<br><br>     
            بقي حال الكندي هذا حتى آخر أيام الخليفة المتوكل، ثم أعاد أبناء موسى للكندي كتبه بعد حادثة "نهر الجعفري" بعد ذلك انعزل الكندي عن محيط الخلفاء الذين تعاقبوا على الحكم.
            وصل عدد مؤلفات الكندي إلى 241 كتابًا موزعًا على 17 مجال من مجالات المعرفة، غير أن الكثير من هذه المؤلفات فُقدَت ولم يبقَ من أعماله سوى 50 كتابًا. كتب الفيلسوف أكثر من 20 كتابًا فلسفيًا تحدث فيها عن الطبيعيات وما فوق الطبيعيات والتوحيد وأوائل الأشياء المحسوسة والفاعلة والمنفعلة من الطبيعيات الأولى، والتدليل على التوافق بين اللاهوت الطبيعي والفلسفة.
            وكتب الكندي أيضًا في المنطق، فقد عرض أراء بطليموس التي أوردها في كتابه المجسطي ومناقشتها، وتكلم أيضًا في البرهان المنطقي والأصوات الخمسة، وكتب رسالةً في الاحتراس من خدع السفسطائيين.<br><br>     
            توسّع الكندي في الطب بشكلٍ كبير، فقد كان له أكثر من خمسٍ وعشرون أطروحةً فيه، تحدث فيها عن الغذاء والدواء المهلك والأدوية المشفية من الروائح المؤذية وعلة نفث الدم وعضة الكَلب و الأعراض الحادثة عن البلغم وفي وجع المعدة و النقرس وأقسام الحميات وعلاج الطحال، وله رسالةٌ في صنع الأطعمة من غير عناصرها وأخرى في كيفية الدماغ و ثالثة في السموم وغيرها. وله كتاب "رسالة في قدر منفعة صناعة الطب" الذي أوضح فيه كيفية استخدام الرياضيات في الطب والصيدلة.
            وأدخل الكندي الأرقام الهندية إلى الشرق الأوسط، وألفَّ 12 كتابًا عن الحساب وتحدث عن تأليف الأعداد والتوحيد من جهة العدد والكمية المضافة والحيل العددية وعلم إضمارها.
            أما في الكيمياء فقد أسس الكندي وجابر بن حيان صناعة العطور، وأجرى الكندي أبحاثًا واسعة وتجارب في الجمع بين روائح النباتات عن طريق تحويلها إلى زيوت، ونفى الكندي إمكانية استخراج المعادن الكريمة أو الثمينة كالذهب من المعادن الخسيسة في رسالة سماها "كتاب في إبطال دعوى من يدعي صنعة الذهب والفضة".<br><br>     
            اقترح الكندي إضافة الوتر الخامس إلى العود، ووضع سلمًا موسيقيًا ما زال يُستخدم في الموسيقى العربية مؤلفًا من اثنتي عشرة نوتة موسيقية. للكندي خمسة عشر أطروحة في الموسيقى، لم يبقَ منها سوى خمس فقط، وهو أول من أدخل كلمة "موسيقى" إلى اللغة العربية، ومنها انتقلت إلى الفارسية والتركية.
            `,
            hisMostFamousSayings: `
            لا يجب علينا الخجل من الاعتراف بالحقيقة مهما كان مصدرها حتى وإن كانت من أقوام سبقونا أو من أجانب، فلا يوجد شيءٌ أكثر قيمة للشخصِ الذي يبحث عن الحقيقة من الحقيقة نفسها.
            `,
            hisBooks: `
            وفقًا لابن النديم، كتب الكندي على الأقل مئتان وستين كتابًا، منها اثنان وثلاثون في الهندسة، واثنان وعشرون في كل من الفلسفة والطب، وتسع كتب في المنطق واثنا عشر كتابًا في الفيزياء، بينما عدّ ابن أبي أصيبعة كتبه بمائتين وثمانين كتابًا. على الرغم من أن الكثير من مؤلفاته فقدت، فقد كان للكندي تأثيرًا في مجالات الفيزياء والرياضيات والطب والفلسفة والموسيقى استمر لعدة قرون، عن طريق الترجمات اللاتينية التي ترجمها جيرارد الكريموني، وبعض المخطوطات العربية الأخرى، أهمها الأربع وعشرون مخطوطة من أعماله المحفوظة في مكتبة تركية منذ منتصف القرن العشرين.<br><br>
            تناولت مواضيع مختلفة منها الفلسفة والمنطق والحساب والهندسة والفلك والطب والكيمياء والفيزياء وعلم النفس والأخلاقيات وتصنيف المعادن والجواهر. ومن مؤلفاته:<br>
            <ul>
                <li>رسالة في كيمياء العطر.</li>
                <li>رسالة في العطر وأنواعه.</li>
                <li>رسالة في التنبيه على خدع الكيميائيين.</li>
            </ul>
            `
        }
    },
    {
        id: 4,
        imageUrl: "/4.avif",
        scientistName: "أَبُـو اَلْـقَـاسِـمْ اَلْـمَـجْـرِيـطِـي",
        scientistYear: "٣٣٨ - ٣٩٨",
        scientistFullData: {
            scientistName: "أَبُو اَلْقَاسِمْ مُسْلِمَةً بْنْ أَحْمَدْ اَلْمَجْرِيطِي",
            scientistYearOfBirth: "٣٣٨",
            scientistYearOfDeath: "٣٩٨",
            scientistCountry: "	الدولة الأموية في الأندلس",
            scientistNationality: "أموي",
            scientistDeen: "الإسلام",
        },
        scientistDescriptions: {
            hisLife: `
                ذكرت بعض المصادر، أن جابر هو ابن حيان بن عبد الله الأزدي الذي هاجرت أسرته من اليمن إلى الكوفة، وكانت ولادته فيها وعمل في الكوفة صيدلانياً. كان والده من المناصريين للعباسيين في ثورتهم ضد الأمويين، الذين أرسلوه إلى خراسان ليدعوا الناس لتأييدهم، حيث قُبض عليه وقتله الأمويون، فهربت أسرته إلى اليمن، حيث نشأ جابر ودرس القرآن والعلوم الأخرى ومارس مهنة ولد مسلمة بن أحمد بن قاسم المجريطي في مجريط عام 338 هـ. غير أنه لا يعرف الكثير عن سيرته، سوى أنه كان بين أنبغ علماء الأندلس في عهد الخليفة الحكم المستنصر بالله. قال عنه صاعد الأندلسي أنه أفضل الرياضياتيين والفلكيين في زمانه في الأندلس. كما ابتكر طرقًا جديدة للمساحة مع ابن الصفار. كذلك كتب كتابًا عن فرض الضرائب واقتصاد الأندلس.<br><br>
                أسس المجريطي مدرسة للفلكيين والرياضياتيين كانت بداية لظهور جيل من العلماء في الأندلس، وكان من تلاميذها ابن الصفار وأمية بن عبد العزيز بن أبي الصلت وأبو بكر الطرطوشي. كما كان المنجم الخاص بالحاجب المنصور الذي تنبأ له بنهاية دولة الأمويين ومتى سيكون ذلك.
                ولمسلمة بن أحمد بن قاسم المجريطي عدة تصانيف منها «رتبة الحكيم» و«غاية الحكيم» و«كتاب الأحجار» و«روضة الحدائق»، و«رسالة في الاسطرلاب» و«تمام علم العدد» و«اختصار تعديل الكواكب من زيج البتاني»، وذهب بعض المؤرخين أنه مؤلف «رسائل إخوان الصفا»، إلا أنه لم يثبت ذلك.<br><br>
                ذهب أيضًا جورج سارتون إلى أن كتابي غاية الحكيم ورتبة الحكيم اللذان ترجما إلى اللاتينية عام 1252 م بأمر من ألفونسو العاشر هما أيضًا منسوبان إلى المجريطي وأنهما كتبا بعد وفاته. يضم رتبة الحكيم وصفات كيميائية لتنقية بعض المعادن، وفيه أول إشارة إلى قانون بقاء المادة، أما غاية الحكيم فهو مختص بعلم التنجيم والسحر.<br><br>
                توفي المجريطي عام 398 هـ.
                
                .`,
            hisAchievements: `
            يعتبر المجريطي من أهم علماء الكيمياء في عصره، حيث ميز بين الكيمياء والسيمياء كما أبعد علم الكيمياء عن الخرافات والسحر، وذلك من خلال تدريسه للكيمياء بطريقه التجربة والاستقراء في مدرسته، كما أنه قد أولى عناية خاصة بالتجارب التي تتعلق بالاحتراق وما ينجم عنها من تفاعلات.
            قام المجريطي بتحضير لمادة أكسيد الزئبق، حيث يعتبر أول من قام بتحويل الزئبق السائل إلى أكسيد الزئبق.<br><br>
            قام باختصار الجداول الفلكية الخاصة بالعالم البتاني، فكان كتابه مرجعا لمعظم علماء الفلك.
            اهتم المجريطي بتاريخ الحضارات القديمة وماتوصلت له من مكتشقات ومعرفة.<br><br>
            إلى جانب تدريسه للطلاب والعلماء ألف المجريطي العديد من الكتب في مجالات الرياضيات والفلك أهمها كتاب ثمار العدد في الحساب، وكتاب اختصار تعديل الكواكب من زيج البتاني، وكتاب رتبة الحكيم، وكتاب غاية الحكيم، وكتاب مفخرة الأحجار الكريمة، وكتاب روضة الحدائق ورياض الخلائق.


            `,
        }
    },
    {
        id: 5,
        imageUrl: "/5.jpeg",
        scientistName: "أَبُـو الـرَّيْـحَـانِ الـبِـيـرُونِـيّ",
        scientistYear: "٣٦٢ - ٤٤٠",
        scientistFullData: {
            scientistName: "أَبُو الرَّيْحَانِ مُحَمَّدٌ بْنُ أَحْمَدَ البِيرُونِيّ",
            scientistYearOfBirth: "٣٦٢",
            scientistYearOfDeath: "٤٤٠",
            scientistCountry: "الدولة السامانية",
            scientistNationality: "فارسي",
            scientistDeen: "الإسلام",
        },
        scientistDescriptions: {
            hisLife: `
            ولد في المدينة الخارجية من بيروني، عاصمة آل آفريغ في خوارزم في وسط آسيا. من أجل إجراء أبحاثه، استخدم البيروني العديد من الوسائل للولوج إلى العديد من المجالات التي كان يدرسها. يعتبر كثيرون البيروني واحدًا من أعظم العلماء في التاريخ، وخاصة في الإسلام بسبب منهجيته واكتشافاته. عاش البيروني في العصر الذهبي للإسلام، والذي شجع على دراسة علم الفلك وإجراء الأبحاث فيه. قضى البيروني أول خمسة وعشرين عامًا من حياته في خوارزم يدرس الفقه الإسلامي والنحو وعلم الكلام والرياضيات وعلم الفلك والطب والفلسفة وكان له باع في علم الفيزياء وغيرها من المجالات العديدة. نجت لغة البيروني، اللغة الإيرانية الخوارزمية، لعدة قرون بعد الإسلام، حتى استولى الأتراك على المنطقة، وكذلك نجت بعض من الثقافة الخوارزمية. لقد كان البيروني متعاطفًا مع آل آفريغ، الذين نكل بهم أعداؤهم المأمونیان عام 995م. غادر البيروني موطنه إلى بخارى، ثم إلى الدولة السامانية تحت قيادة الإمبراطور منصور الثاني بن نوح. وهناك راسل ابن سينا، وكانت تلك فرصة لتبادل الرؤى بين العالمين.<br><br>
            ولد في خوارزم (تابعة حاليا لدولة أوزبكستان) والتي كانت في عهدهِ تابعة لسلالة السامانيين في بلاد فارس.
            عام 998م، قصد بلاط أمير زياريون بطبرستان، شمس المعالي قابوس بن وشكمير. وهناك كتب أول أعماله المهمة: الآثار الباقية عن القرون الخالية عن التسلسل الزمني العلمي والتاريخي، وذلك في عام 1000 الميلادي تقريبًا، بالرغم من أنه أجرى بعض التعديلات لاحقًا على الكتاب. كما أنه زار بلاط آل مرزبان في حكم باوندیان. وبقبوله زوال حكم آل آفريغ على يد مأمونیان، أقام البيروني سلامًا مع الأخيرة التي ستحكم خوارزم. وصار بلاطهم في غرغانج (في خوارزم أيضًا) مشهورًا بجمعه للعلماء النابغين.<br><br>
            وفي عام 1017م، نقل محمود الغزنوي أغلب الباحثين، ومنهم البيروني، إلى غزنة، عاصمة الدولة الغزنوية. أصبح البيروني عالم الفلك والمنجم الخاص بالبلاط، وصاحب محمود أثناء غزواته في الهند، وعاش هناك عدة سنوات. كان عمر البيروني 44 عامًا عندما قام بهذه الرحلة مع محمود الغزنوي. أصبح البيروني على معرفة بكل الأمور المتعلقة بالهند. كما أنه تعلم بعضًا من اللغة السنسكريتية. أثناء هذه الرحلة، كتب البيروني دراساته عن الهند، وأنهاها نحو 1030. وبجانب هذه الكتابات، تأكد البيروني أيضًا من مد دراسته إلى العلوم أثناء رحلاته الاستكشافية. وسعى إلى إيجاد وسيلة لقياس طول الشمس، ووضع تصورا مبدئيا لأسطرلاب لهذا الغرض. كان البيروني قادرًا على إحراز تقدم كبير في دراسته عن الرحلات المتواترة التي ذهب فيها إلى أرض الهند.            
            `,
            hisAchievements: `
            في مراهقته، تعلم الكثير من المعارف وفي نهاية القرن العاشر كان قد حسب خط العرض لمدينة كاث.
            لقد كتب العديد من الأعمال خلال القرن العاشر، ولكن معظمها اختفى، على أي حال، لم ينقذ سوى القليل عن رسم الخرائط، حيث احتوى العمل الذي تم انقاذه على نظريات لرسم الخرائط استفاد منه العلماء فيما بعد.<br><br>
            في نهاية القرن العاشر، بدأت الاضطرابات السياسية في المناطق الإسلامية، وأُطيح بحكم السامانيين بيد محمود الغزنوي. وتم تحويل البيروني إلى محكمة محمود مع عدد من العلماء، وعيّن كمستشار، ومن ثم ذهب للهند هو ومحمود الغزنوي أثناء الهجوم.
            يقال أن للبيروني معرفة باللغة السنسكريتية  خلال تلك الفترة، أنجز "كتاب الهند". كما ابتكر سبع طرق في تحديد اتجاه الشمال والجنوب، كما اكتشف نظامًا رياضيًا لتحديد بداية الفصول.<br><br>
            أحد أهم أعماله " القانون المسعودي" جمع كل معارفه العلمية التي اكتسبها من القراءة والملاحظات، بما فيها أعمال عالم الفلك والرياضيات المصري بطليموس. وفي هذا الكتاب ابتكر أنظمة جبرية لحل معادلات الدرجة الثالثة، وخصص هذا الكتاب لمسعود ابن محمود الغزنوي.
            أنجز عمله "كتاب التفهيم لأوائل صناعة التنجيم" وهو عن علم التنجيم، يعتقد البيروني أن علم التنجيم أداة مهمة لنقل العلوم الرياضية الفلكية وأكثر من نصف الكتاب يتكلم عن تدريس علم الفلك والرياضيات والجغرافية و الكرونولوجي (تأريخ).<br><br>
            وقد كتب كتاب"تحديد نهايات الأماكن لتصحيح مسافات الأماكن"، الذي أصبح عملًا مشهورًا يتعلق بالجغرافيا الرياضية، يناقش الكتاب الطريقة التي يتم بها تحديد خطوط العرض والطول. وفي نفس الكتاب، اكتشف اتجاه مكة الكرمة، والذي كان مطلبًا دينيًا، أكثر مما هو مطلب رياضي.
            أعمال أخرى، "الجماهير في معرفة الجواهر"، " إفراد المعقل في أمر الظلال" (أطروحة شاملة عن الظلال)، "كتاب الصيدلة"، " مقاليد علم الحياه" ( مفاتيح علم  الفلك).<br><br>
            ساهم في علم الجغرافيا من خلال ابتكار طريقة لحساب نصف قطر الأرض بالاستعانة بارتفاع الجبال. أجرى التجربة في مكان تابع لباكستان حالياً. واخترع أيضا ًأداة يمكن من خلالها معرفة الثقل النوعي لبعض المعادن.
            وأهم كتبه " تحقيق ما للهند من مقولة مقبولة في العقل أو مزولة"، هذا الكتاب عن كل معرفة اكتسبها البيروني عن الهند من ثقافتها وأدبها وعاداتها وطقوسها ودينها وعلومها.<br><br>
            وأيضاً له كتاب " الآثار الباقية عن القرون الخالية" (التسلسل الزمني للأمم القديمة). كرّس هذا الكتاب للأمير قابوس. يتضمن تفاصيل حول الثقافات المختلفة في جميع أنحاء العالم.


            `,
            hisMostFamousSayings: `
            ما إن سأل الحكيم لماذا يتدفق العلماء دائماً إلى أبواب الأثرياء، بينما لا يقترب الأثرياء إلى أبواب العلماء. أجاب ... العلماء يدركون جيداً استخدام المال، لكن الأثرياء يجهلون نبل العلم.
            `,
        }
    },
    {
        id: 6,
        imageUrl: "/6.jpeg",
        scientistName: "أبو منصور الموفق",
        scientistYear: "غير معروفة",
        scientistFullData: {
            scientistName: "أبو منصور الموفق بن علي الهروي",
            scientistYearOfBirth: "القرن العاشر",
            scientistYearOfDeath: "القرن العاشر",
            scientistCountry: "غير معروفة",
            scientistNationality: "غير معروفة",
            scientistDeen: "الإسلام",
        },
        scientistDescriptions: {
            hisLife: `
            أبو منصور الموفق بن علي الهروي كيميائي مسلم، عاصر الأمير منصور بن نوح الساماني الذي حكم فيما بين (350هـ - 365هـ)، وكان صديقًا مقربا إليه. وكان من عباقرة علماء المسلمين في علم الكيمياء، إذ أولى كل اهتمامه بالأمور التي تتعلق بحياة الناس اليومية، مثل الحصول على مادة لاحمة للعظام، أو مادة تستعمل لصبغ الشعر، وغيرها. يقول عنه جورج سارتون في كتابه المدخل إلى تاريخ العلوم: «إن أبا المنصور الموفق كان علامة زمانه فأعطى تعريفا وافيا لأكسيد النحاس[؟] والأنتيمون "حجر الكحل" وطريقة استعمالهما في الحياة اليومية».<br><br>
            لقد كان أبو المنصور الموفق من العلماء الواقعيين الذين يؤمنون بالحقيقة لا بالخرافة، ولذا فقد جعل كل تجاربه واهتماماته منصبا على الأمور التي تهم الناس في حياتهم اليومية، بعيدا عن الخرافات التي صاحبت مهنة الكيمياء في عصره. وقد استفاد الناس من تجاربه هذه وابتكاراته الكيماوية أفضل استفادة من الناحيتين المادية والاجتماعية، فكان إذا توصل إلى تحضير دواء يمكن استخدامه، يسارع إلى إخراجه للأسواق ليقبل عليه الناس، فيربح من بيعه كثيرا ويشتري بذلك آلات وأدوات ومواد جديدة تساعده في بحوثه وتجاربه الجديدة.<br><br>
            كان من هذه الابتكارات والإنجازات في مجال الكيماويات والأدوية التي ما زالت تنسب له حتى الآن، خاصة ما كان منها متعلقا بعلم الكيمياء الطبية. فقد قام بتحضير مادة قوامها الجير الحي لتنظيف الجلد من الشعر واكتسابه بريقا ولونا يميل إلى الاحمرار، ونصح بتسخين النحاس المؤكسد بشدة لينتج مادة سوداء يستعملها الإنسان ليكسب شعر رأسه لونا أسود لامعا. كما اكتشف مادة لاحمة للعظام تستعمل في معالجة الكسور، وذلك بتسخين كبريتات الكاليسيوم ومزج الناتج بزلال البيض. ولقد ساعد أبا المنصور الموفق في تجاربه العلمية هذه أنه كان عارفا بعلوم اليونان وحجة في المعارف السريانية والهندية والفارسية. كما كان صابرا على طلب العلم والدرس والتدقيق والتمحيص، ومحبا للسفر بحثا عن علماء الكيمياء المعروفين ليأخذ منهم ويتعلم على أيديهم، حتى أضحى موسوعة في علم الكيمياء.<br><br>
            ويعد كتابه الأبنية في حقائق الأدوية من أهم الكتب التي نصت على إنتاجه. فقد شمل الكثير من المعلومات عن خواص العقاقير والأدوية وطرق الحصول عليها.
            `,
            hisAchievements: `
            لربما أفضل إنجازات عالم الكيمياء أبو المنصور الموفق، هي النقلة النوعية التي حققها في هذا العلم، حيث ساهم طيلة حياته في تطوير الأبحاث والدراسات ليحظى بمزيد من الاكتشافات المذهلة التي مازال العديد منها حتى اليوم، مرجع رئيس للعديد من العلماء والأطباء وطلبة العلم أيضًا.<br><br> ومن أهم الإنجازات:
            <ul>
                <li>صناعة العديد من الأدوية.</li>
                <li>من أوائل العلماء الذين اشتُهروا بتحضير مادة “الجير الحي” أو “أكسيد الكالسيوم”، التي استُخدمت في تنظيف الجلد من الشّعر.</li>
                <li>تمكّن الموفق من اكتشاف مواد خاصة لعلاج كسور العظام، حيث قام بتسخين كبريتات الكالسيوم وخلطها بزلال البيض، واستخدام الخليط في العلاج.</li>
                <li>كان الموفق أول العلماء الذي اكتشف أن تعريض النحاس للهواء يكوّن على سطحه مادة خضراء، بدورها تستحيل بالتسخين إلى مادة سوداء، وتستخدم هذه المادة في صبغ الشعر باللون الأسود.</li>
            </ul><br>
            كما ألَّف أبو منصور الموفق كتابًا شهيرًا في علم الصيدلة سماه “الأبنية في حقائق الأدوية”، ويعتبر هذا الكتاب من أهم الكتب في مجال الصيدلة وإعداد العقاقير الطبية، صُنفت فيه الأدوية حسب تأثيرها إلى أربعة أصناف، كما ذكر الموفق حوالي 585 دواء في الكتاب؛ منها 466 صنف مصنوع من النباتات، و75 دواء مصنوع من المعادن، و44 من المشتقات الحيوانية، كما كان كتابه غنيًا بالكثير من المعلومات الكيميائية.


            `,
        }
    },
];
let filteredData = [];

if (window.location.href == "https://arabchemweek.netlify.app/home" || window.location.href == "https://arabchemweek.netlify.app/" || window.location.href == "http://127.0.0.1:5500/Home.html") {
    const imagesContainer = document.querySelector(".images-container");
    let result; 

    data.map(({id, imageUrl, scientistName, scientistYear}) => {
        result = `
        <a href="/Person.html" class="image-container" id="${id}">
            <div class="content">
                <p class="name">${scientistName}</p>
                <p class="time">${scientistYear}</p>
            </div>
            <img src=${imageUrl} alt=${scientistName} class="image" />
        </a>
        `;
         imagesContainer.innerHTML += result;
    });
    
    const allpersonsBox = imagesContainer.querySelectorAll(".image-container");
    
    allpersonsBox.forEach(personBox => {
        personBox.addEventListener("click", () => {
            filteredData = data.filter(({id}) => personBox.id == id);
            window.localStorage.setItem("filteredData", JSON.stringify(filteredData));
        });

        personBox.addEventListener("mouseover", () => {
            allpersonsBox.forEach(personBox => personBox.classList.add("hide-50"));
            personBox.classList.remove("hide-50");
        });

        personBox.addEventListener("mouseout", () => allpersonsBox.forEach(personBox => personBox.classList.remove("hide-50")));
    });
    
} else if (window.location.href == "https://arabchemweek.netlify.app/person" || window.location.href == "http://127.0.0.1:5500/Person.html") {
    const personPage = document.querySelector("div.person-page");
    let personPageResult;
    filteredData = JSON.parse(window.localStorage.getItem("filteredData"));

    function scientistFunc() {
        filteredData.map(({imageUrl, scientistName, scientistFullData, scientistDescriptions}) => {
            document.querySelector("title").innerHTML = scientistName;
            document.querySelector("link[rel='icon']").href = imageUrl;
            document.querySelector("link[rel='apple-touch-icon']").href = imageUrl;
            personPageResult = `
                <div class="left-side">
                <div class="image-container">
                    <img src="${imageUrl}" alt="${scientistFullData.scientistName}">
                </div>
                <div class="all-content-links">
                    <h3 class="title">جدول المحتويات</h3>
                    <div class="links-container">
                        ${scientistDescriptions.hisLife ? `<p><a href="#scientist-life" class="link">حـيــــــــــاتـه</a></p>` : ""}
                        ${scientistDescriptions.hisAchievements ? `<p><a href="#scientist-achievements" class="link">انـجــــــــــازاتـه</a></p>` : ""}
                        ${scientistDescriptions.hisBooks ? `<p><a href="#scientist-books" class="link">مـؤلـفـاتـــــــه</a></p>` : ""}
                        ${scientistDescriptions.hisMostFamousSayings ? `<p> <a href="#scientist-most-famous-sayings" class="link">أشـهـــــر أقـوالـــــه</a></p>` : ""}
                    </div>
                </div>
            </div>
            <div class="right-side">
                <div class="main-info">
                    <h3 class="title">من هو ${scientistFullData.scientistName}</h3>
                <div class="infos-container">
                    <div class="row">
                        <p class="title">الاسم الكامل:</p>
                        <p class="description">${scientistFullData.scientistName}</p>
                    </div>
                    <div class="row">
                        <p class="title">الميلاد:</p>
                        <p class="description">${scientistFullData.scientistYearOfBirth}</p>
                    </div>
                    <div class="row">
                        <p class="title">الوفاة:</p>
                        <p class="description">${scientistFullData.scientistYearOfDeath}</p>
                    </div>
                    <div class="row">
                        <p class="title">الإقامة:</p>
                        <p class="description">${scientistFullData.scientistCountry}</p>
                    </div>
                    <div class="row">
                        <p class="title">الجنسية:</p>
                        <p class="description">${scientistFullData.scientistNationality}</p>
                    </div>
                    <div class="row">
                        <p class="title">الديانة:</p>
                        <p class="description">${scientistFullData.scientistDeen}</p>
                    </div>
                </div>
                </div>
                <div class="content">
                ${scientistDescriptions.hisLife ? 
                    `<div class="section section-hisLife" id="scientist-life">
                        <h1 class="title">حـيــــــــــاتـه</h1>
                        <p class="description">${scientistDescriptions.hisLife}</p>
                    </div>` : ""}
    
                ${scientistDescriptions.hisAchievements ? 
                    `<div class="section section-hisAchievements" id="scientist-achievements">
                        <h1 class="title">انـجــــــــــازاتـه</h1>
                        <p class="description">${scientistDescriptions.hisAchievements}</p>
                    </div>` : ""}
    
                ${scientistDescriptions.hisBooks ? 
                    `<div class="section section-hisBooks" id="scientist-books">
                        <h1 class="title">مـؤلـفـاتـــــــه</h1>
                        <p class="description">${scientistDescriptions.hisBooks}</p>
                    </div>` : ""}
    
                ${scientistDescriptions.hisMostFamousSayings ? 
                    `<div class="section section-hisMostFamousSayings" id="scientist-most-famous-sayings">
                        <h1 class="title">أشـهـــــر أقـوالـــــه</h1>
                        <div class="the-word">
                            <p class="description">
                                <i>${scientistDescriptions.hisMostFamousSayings}</i>
                            </p>
                            <svg focusable="false" class="chakra-icon css-ar-1yys7d9" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.09 11.631H3.4c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.687.687 0 0 0-.95-.24c-3.38 2-4.56 3.22-4.56 9.03v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c0-1.75-1.33-3.08-3.09-3.08ZM18.909 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z" fill="currentColor"></path></svg>
                        </div>
                    </div>` : ""}
                </div>
            </div>
            `;
            return personPage.innerHTML = personPageResult;
        });
    }

    scientistFunc();

    const rightArrow = document.querySelector(".settings .arrow-right-container");
    const rightArrowInfoImage = document.querySelector(".settings .arrow-right-container .info-image-container img");
    const leftArrow = document.querySelector(".settings .arrow-left-container");
    const leftArrowInfoImage = document.querySelector(".settings .arrow-left-container .info-image-container img");

    let currentScientistId;
    let nextScientistId = 1;
    let prevScientistId = 6;

    function currNexPrevPersonInfo() {
        currentScientistId = parseInt(filteredData.map(({id}) => id));
        nextScientistId = currentScientistId === 6 ? 1 : currentScientistId + 1;
        prevScientistId = currentScientistId === 1 ? 6 : currentScientistId - 1;
    }

    function updateNextPersonInfoImage() {
        currNexPrevPersonInfo();
        rightArrowInfoImage.src = `/person-${nextScientistId}-page.png`;
    }

    function updatePrevPersonInfoImage() {
        currNexPrevPersonInfo();
        leftArrowInfoImage.src = `/person-${prevScientistId}-page.png`;
    }

    rightArrow.addEventListener("click", () => {
        currNexPrevPersonInfo();

        filteredData = data.filter(({id}) => id == nextScientistId);
        window.localStorage.setItem("filteredData", JSON.stringify(filteredData));

        window.scrollTo(0, 0);
        scientistFunc();
        updateNextPersonInfoImage();
    });

    leftArrow.addEventListener("click", () => {
        currNexPrevPersonInfo();

        filteredData = data.filter(({id}) => id == prevScientistId);
        window.localStorage.setItem("filteredData", JSON.stringify(filteredData));
        
        window.scrollTo(0, 0);
        scientistFunc();
        updatePrevPersonInfoImage();
    });

    rightArrow.addEventListener("mousemove", () => window.innerWidth >= 991 ? updateNextPersonInfoImage() : "");

    leftArrow.addEventListener("mousemove", () => window.innerWidth >= 991 ? updatePrevPersonInfoImage() : "");
}

// window.location.href == "https://arabchemweek.netlify.app/home" || window.location.href == "https://arabchemweek.netlify.app/"
// window.location.href == "https://arabchemweek.netlify.app/person"