export const EQUIPMENT_LIST = [
  {
    name: '掃描式電子顯微鏡 (SEM)',
    image: './images/equipment/e1.jpg',
    purpose: '用於觀察材料表面形貌和微觀結構，可提供高解析度的表面形貌圖像。',
    features: [
      '高解析度成像能力',
      '可進行元素分析',
      '樣品製備簡單',
      '適用於導電和非導電樣品'
    ],
    spec: '加速電壓可設置10eV~30eV，根據導電率的高低，其影像解析度可高至1萬至5萬倍。'
  },
  {
    name: 'SEM+電子束微影系統',
    image: './images/equipment/e1.jpg',
    purpose: '利用高能量電子束，精確地在材料表面形成微米或奈米級的圖案，以用於製造各種微米和奈米結構。',
    features: [
      '奈米結構圖形寫入',
      '精細圖案製作',
      '正負光阻使用'
    ],
    spec: '目前在正光阻方面使用型號有PMMA 950K A1~A7、495K A1~A7、LOR 5B 負光阻方面則有SU8 2000.5。圖案區可寫入區域可達1000 µm²，feature size可低至100 nm，通過雙光阻製程可使圖形厚度增至200nm。'
  },
  {
    name: '熱蒸鍍機台',
    image: './images/equipment/e3.jpg',
    purpose: '運用電阻加熱將鍍膜材料加熱並使其蒸發，進行鍍膜。',
    features: [
      '熱擴散',
      '真空製程',
      '奈米薄膜製作'
    ],
    spec: '具有四組蒸發源，電壓可以施加到150安培以上，當前已有Ag、Cr、MgF、ITO、Ni、Fe、CO、Au、Al的參數'
  },
  {
    name: '離子輔助電子槍蒸鍍系統',
    image: './images/equipment/e4.jpg',
    purpose: '運用電子束將鍍膜材料(如金屬Al、Cu)加熱並使其蒸發，並搭配獨立離子源輔助沉積，進行鍍膜。',
    features: [
      '熱蒸鍍製程',
      '真空製程',
      '電漿輔助系統',
      '奈米級薄膜製作'
    ],
    spec: '腔體大小 : 660 x  590 x 890 mm / 津弘科技 / 內部含有4個坩鍋放置區\n電子束蒸鍍機 : 控制模組 / telemark model 880；電源供應器 /  telemark tt-15 / 最大功率可達15kW / 可蒸鍍Al、Cu、Au、Hf、Mg、Si、Ag、Zn和Sn等金屬和其氧化物\n離子束 : 立兆鑫科技 / CKII 控制器 / 陽極電壓(Anode Voltage)最大輸出電壓為200 VDC / 陽極電流(Anode Current)最大輸出電流為5 Amp'
  },
  {
    name: '三槍非平衡磁控濺鍍機',
    image: './images/equipment/e5.jpg',
    purpose: '利用DC和RF電源產生電漿，轟擊靶材，使材料均勻沉積於基材表面。',
    features: [
      '三靶材同時沉積',
      '多層或合金薄膜製作',
      '鍍膜均勻性高'
    ],
    spec: '機台廠商：俊尚科技 / 載台直徑：4吋 / 2 吋靶材 / DC、RF 電源各兩個 / 最高可加熱至850 ℃'
  },
  {
    name: '3D列印機台',
    image: './images/equipment/e6.jpg',
    purpose: '印製出COMSOL所模擬的模型，或者是其他.stl檔的影印檔。',
    features: [
      '模型列印',
      '光固化3D列印',
      '批量製程'
    ],
    spec: '機台廠商:普羅森/列印尺寸 L22.3 x W12.6 x H23.5 cm/XY 解析度 16.8 x 24.8 µm/切層厚度 0.01-0.30 mm'
  },
  {
    name: '快速退火爐',
    image: './images/equipment/e7.jpg',
    purpose: '利用鹵素紅外燈等熱源，在短時間內將材料快速加熱到特定溫度，以消除材料內部缺陷，改善其性能。',
    features: [
      '半導體製程',
      '材料缺陷修復',
      '材料相變化'
    ],
    spec: '森積科技 / R-401 / 適用4吋以下的矽基板 / 最高加熱溫度1000℃'
  },
  {
    name: '傅立葉紅外線光譜儀',
    image: './images/equipment/e8.jpg',
    purpose: '利用紅外光源照射樣品，確認材料或化合物的分子結構與化學組成，判斷樣品是否為某種已知物質。',
    features: [
      '官能基辨識',
      '化學結構',
      'IR吸收峰'
    ],
    spec: '廠牌／型號：PerkinElmer Spectrum Two/模組配置：具備兩套可更換模組，分別為 穿透（Transmission）模組 與 衰減全反射（ATR, Attenuated Total Reflection）模組，可依樣品性質與需求切換使用。'
  },
  {
    name: 'X光繞射儀',
    image: './images/equipment/e9.jpg',
    purpose: '利用X射線與晶體結構的交互作用，通過分析繞射圖譜來獲取材料的晶體結構、相組成、取向等信息。',
    features: [
      '檢測晶體結構',
      '元素組成',
      '晶粒尺寸',
      '相組成'
    ],
    spec: '機台廠商Rigaku / 可量測Thin film and Powder模式 / 量測角度(入射端低掠角模式、接收端角度0-100 °) / 包含加熱模組至1300 °C / 旋轉試片載台(垂直-5 °~90 °、水平360  °) / 試片殘留應力分析模組'
  },
  {
    name: '場發掃描電子顯微鏡與能量色散光譜儀',
    image: './images/equipment/e10.jpg',
    purpose: 'FE-SEM用於觀察樣品的結構與形貌，可以提供高解析度的表面形貌圖像，而EDS可以分析特定區域的元素組成。',
    features: [
      '高解析影像',
      '非破壞性分析',
      '元素定性定量',
      '區域選擇分析',
      '同步成像與分析'
    ],
    spec: '機台廠商JEOL/JEOL JSM-IT700HR/ 高解析度（1 nm）/高探針電流（300 nA）/自動化功能/結合EDS模組'
  },
  {
    name: '原子力顯微鏡',
    image: './images/equipment/e11.jpg',
    purpose: '利用原子間的相互作用力，掃描樣品表面以獲得高解析度的三維表面形貌圖像，可達到原子級的解析度。',
    features: [
      '原子級解析度',
      '非破壞性檢測',
      '三維表面形貌',
      '多種掃描模式',
      '奈米級量測'
      ],
    spec: '機台廠商:BRUKER 掃瞄範圍:90x90 μm 高度10 μm 最高512x512 psi的解析度 樣品靈活性:尖端掃描儀'
  },
  {
    name: '反應式離子蝕刻機台',
    image: './images/equipment/e12.jpg',
    purpose: '利用射頻電場在低壓氣體中激發出電漿，電漿中的正離子在電場加速下垂直撞擊樣品表面，造成蝕刻。',
    features: [
      '化學物理複合蝕刻',
      '乾式蝕刻',
      '表面改質',
      '奈米結構製造',
      '材料選擇性蝕刻'
    ],
    spec: '機台廠商:津弘科技/可使用氣體O2 H2 Ar N2/最大功率可達600W/氣體最大流速100SCCM/最大面積226cm²'
  },
  {
    name: '恆電位儀',
    image: './images/equipment/e13.jpg',
    purpose: '維持電極在恆定電位狀態下，測量電流與時間或電位的關係，用於電化學分析和腐蝕研究。',
    features: [
      '電化學分析',
      '腐蝕測試',
      '循環伏安法',
      '阻抗分析',
      '即時監控'
    ],
    spec: '機台廠商：北極光 電壓: 控制電壓：± 10V 解析度：在200 mV內為 5 µV 合規性：± 10V。電流: 電流範圍：1 A 至 10 µA 最大電流：± 1A 解析度：0.760 nA。EIS: 頻率範圍：1 MHz 至 10 µHz'
  },
  {
    name: '拉曼',
    image: './images/equipment/e14.jpg',
    purpose: '用於分析材料的分子振動與化學鍵資訊，可辨識物相與化學組成，並能以非破壞方式評估應力/應變、結晶度與缺陷。',
    features: [
      '非破壞檢測',
      '多材料適用',
      '快速辨識材料'
    ],
    spec: '機台廠商：昇航 / 雷射波長：633nm ( 17mW ) 、 532nm ( 25mW ~ 200mW ) / 物鏡：10倍、50倍 ( 長聚焦：適合薄膜、塊材 )、50倍 ( 短聚焦：適合粉末、液體 )、100倍 / 探測器：CCD探測器 /  量測範圍：'
  }
  // 可以根據實際設備繼續添加更多項目
]; 